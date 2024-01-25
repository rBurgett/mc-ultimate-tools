const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { CloudFrontClient, CreateInvalidationCommand } = require('@aws-sdk/client-cloudfront');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const bucketName = process.env.S3_BUCKET;
const cloudFrontDistribution = process.env.CLOUDFRONT_DISTRIBUTION;
const baseDirectory = path.resolve(__dirname, '../build');

const s3 = new S3Client();
const cloudFront = new CloudFrontClient();

const uploadFile = async (filePath, relativePath) => {
  const fileContent = fs.readFileSync(filePath);
  const key = path.join(relativePath, path.basename(filePath));

  const params = {
    Bucket: bucketName,
    Key: key,
    Body: fileContent,
    ACL: 'public-read',
  };

  const mimeType = mime.getType(filePath);
  if(mimeType) {
    params.ContentType = mimeType;
  }

  console.log(`Uploading ${params.Key}`);
  await s3.send(new PutObjectCommand(params));
};

const uploadDirectory = async (directoryPath, relativePath = "") => {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });
  for(const entry of entries) {
    const fullPath = path.join(directoryPath, entry.name);
    if (entry.isDirectory()) {
      await uploadDirectory(fullPath, path.join(relativePath, entry.name));
    } else {
      await uploadFile(fullPath, relativePath);
    }
  }
};

const createInvalidations = async () => {
  const params = {
    DistributionId: cloudFrontDistribution,
    InvalidationBatch: {
      CallerReference: `invalidate-${new Date().getTime()}`,
      Paths: {
        Quantity: 2,
        Items: [
          '/',
          '/*',
        ],
      },
    },
  };

  const command = new CreateInvalidationCommand(params);
  const data = await cloudFront.send(command);
  console.log('\nInvalidation created: ', data.Invalidation.Id);
  return data;
};

(async function() {
  await uploadDirectory(baseDirectory);
  await createInvalidations();
})();

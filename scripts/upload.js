const { S3Client } = require('@aws-sdk/client-s3');

(async function() {
  const client = new S3Client();
  // upload recursive everything in the build directory to the isaacfain.com bucket
  await client.uploadDir({
    localDir: 'build',
    deleteRemoved: true,
    s3Params: {
      Bucket: 'isaacfain.com'
    }
  });


})();

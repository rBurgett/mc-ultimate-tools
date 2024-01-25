export interface AlertProps {
  children?: any
  className?: string
}
export const DangerAlert = ({ children, className = '' }: AlertProps) => {
  return (
    <div className={`alert alert-danger ${className}`}>{children}</div>
  );
};

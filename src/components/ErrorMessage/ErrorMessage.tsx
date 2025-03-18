import { ReactNode } from "react";

interface LoadMoreBtnProps {
  children:ReactNode,
}

const ErrorMessage: React.FC<LoadMoreBtnProps> = ({
  children
}) => {
  return (
    <p>
      {children}
    </p>
  );
};
export default ErrorMessage;

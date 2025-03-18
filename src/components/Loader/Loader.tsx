import { ReactNode } from "react";

interface LoadMoreBtnProps {
  children:ReactNode,
  onClick: () => void,
  disabled: boolean,
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ children, onClick, disabled }) => {
  return (
    <div onClick={onClick} disabled={disabled}>
      {children}
    </div>
  );
};
export default LoadMoreBtn;

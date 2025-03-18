import { ReactNode } from "react";

interface LoadMoreBtnProps {
  children: ReactNode,
  onClick: () => void,
  isDisabled: boolean,
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ children, onClick, isDisabled }) => {
  return (
    <div onClick={onClick} disabled={isDisabled}>
      {children}
    </div>
  );
};
export default LoadMoreBtn;

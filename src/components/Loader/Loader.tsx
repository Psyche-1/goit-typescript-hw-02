import { ReactNode } from "react";

interface LoadMoreBtnProps {
  children: ReactNode,
  onClick: () => void,
  isDisabled: boolean,
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ children, onClick, isDisabled }) => {
  return (
    <button onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};
export default LoadMoreBtn;

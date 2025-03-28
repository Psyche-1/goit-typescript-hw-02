import { ReactNode } from "react";

interface ImageCardProps {
  children: ReactNode;
  onClick: () => void;
  isDisabled: boolean;
}

const LoadMoreBtn: React.FC<ImageCardProps> = ({ children, onClick, isDisabled }) => {
  return (
    <button onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};
export default LoadMoreBtn;
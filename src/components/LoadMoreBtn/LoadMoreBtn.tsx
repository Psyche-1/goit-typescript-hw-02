interface ImageCardProps {
  children: string;
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
interface ImageCardProps {
  children: string;
  onClick: () => void;
  disabled: boolean;
}

const LoadMoreBtn: React.FC<ImageCardProps> = ({ children, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default LoadMoreBtn;
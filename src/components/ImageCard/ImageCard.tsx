import { Image } from '../../types';

interface ImageCardProps {
    image: Image,
    openModal: (src:string, alt:string, description:string) => void
}

const ImageCard: React.FC<ImageCardProps> = ({
    image: {
        urls: { small, regular },
        alt_description,
        description,
    },
    openModal,
    }) => {
    return (
        <div>
        <img
            src={small}
            alt={alt_description}
            onClick={() => openModal(regular, alt_description, description)}
        />
        </div>
    );
};
export default ImageCard;

import { Image } from '../../types';
import ImageCard from '../ImageCard/ImageCard'

interface ImageGalleryProps {
    images: Image[];
    openModal: (src:string, alt:string, description:string) => void
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images, openModal}) => {
    return (
        <ul>
            {images.map((item) => (<li key={item.id}><ImageCard image={item} openModal={openModal}/></li>))}
        </ul>

)
}

export default ImageGallery;
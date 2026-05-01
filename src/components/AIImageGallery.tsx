import React from "react";
import ImageGallery, {ReactImageGalleryItem} from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface AIImageGalleryProps {
    images?: ReactImageGalleryItem[];
}

const AIImageGallery: React.FC<AIImageGalleryProps> = ({ images = [] }) => {
    return (
        <div className="gallery-container">
            <ImageGallery showPlayButton={false}
                          showFullscreenButton={true}
                          showNav={true}
                          showThumbnails={true}
                          lazyLoad={true}
                          items={images} />
        </div>
    );
};

export default AIImageGallery;

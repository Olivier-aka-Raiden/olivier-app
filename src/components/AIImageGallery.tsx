import ImageGallery, {ReactImageGalleryItem} from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";

interface AIImageGalleryProps {
    images?: ReactImageGalleryItem[];
}

class AIImageGallery extends React.Component<AIImageGalleryProps> {
    static defaultProps: AIImageGalleryProps = {
        images: []
    };
    render() {
        const { images = []  } = this.props;
        return (
            <div className="gallery-container">
                <ImageGallery showPlayButton={false}
                              showFullscreenButton={true}
                              showNav={true}
                              showThumbnails={true}
                              items={images} />
            </div>
        );
    }
}


export default AIImageGallery;
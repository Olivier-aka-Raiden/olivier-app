import ImageGallery, {ReactImageGalleryItem} from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";

interface Dimensions {
    width: number;
    height: number;
}

interface AIVideoGalleryState {
    dimensions: Dimensions;
}

class AIVideoGallery extends React.Component<{}, AIVideoGalleryState>  {

    private resizeListener: (() => void) | null = null;

    constructor(props: {}) {
        super(props);
        this.state = {
            dimensions: { width: 560, height: 315 }
        };
    }

    componentDidMount() {
        this.updateDimensions();
        this.resizeListener = this.updateDimensions.bind(this);
        window.addEventListener('resize', this.resizeListener);
    }

    componentWillUnmount() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
        }
    }

    updateDimensions() {
        const width = Math.min(window.innerWidth - 20, 560);
        const height = Math.round((width / 16) * 9);
        this.setState({ dimensions: { width, height } });
    }

    _renderVideo(item: ReactImageGalleryItem) {
        return (
            <div className="video-wrapper">
                <iframe
                    title="sample video"
                    width={this.state.dimensions.width}
                    height={this.state.dimensions.height}
                    src={item.original}
                    style={{border: "none"}}
                    allowFullScreen
                />
            </div>
        );
    };

    render() {
        const images = [
            {
                thumbnail: `/assets/img/mq1.webp`,
                original: `https://www.youtube.com/embed/GgYNwmTiXss?autoplay=0&showinfo=0`,
                description: "AI podcast - Thought about AI podcast ?",
                renderItem: this._renderVideo.bind(this),
            },
            {
                thumbnail: `/assets/img/mq2.webp`,
                original: `https://www.youtube.com/embed/_5Cwr2ZDpGg?autoplay=0&showinfo=0`,
                description: "AI podcast - The Dumbing Down of Humanity by AI",
                renderItem: this._renderVideo.bind(this),
            },
            {
                thumbnail: `/assets/img/sddefault.jpg`,
                original: `https://www.youtube.com/embed/e4bQoqO6J7c?autoplay=0&showinfo=0`,
                description: "SC2 - AI duo casting an AI match from AI Arena ladder",
                renderItem: this._renderVideo.bind(this),
            },
            {
                thumbnail: `/assets/img/raidenvskrillin.jpg`,
                original: `https://www.youtube.com/embed/4u2x87MpZwQ?autoplay=0&showinfo=0`,
                description: "SC2 - AI duo casting an AI match from AI Arena ladder",
                renderItem: this._renderVideo.bind(this),
            },
        ];
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

export default AIVideoGallery;
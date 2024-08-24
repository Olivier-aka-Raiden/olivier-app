import ImageGallery, {ReactImageGalleryItem} from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";


class AIVideoMusicGallery extends React.Component {

    _renderVideo(item: ReactImageGalleryItem) {
        return (

                <div className="video-wrapper">
                    <button className="close-video"/>
                    <iframe
                        title="sample video"
                        width="560"
                        height="315"
                        src={item.original}
                        style={{border: "none"}}
                        allowFullScreen
                    />
                </div>
        );
    }

    render() {
        const images = [
            {
                thumbnail: `/assets/img/punjabi.webp`,
                original: `https://www.youtube.com/embed/AA4Tklu_Emc?si=buV7d1y6X49734W4?autoplay=0&showinfo=0`,
                description: "Punjabi rap",
                renderItem: this._renderVideo.bind(this),
            },
            {
                thumbnail: `/assets/img/korean_rap.webp`,
                original: `https://www.youtube.com/embed/21X8AlTcGRk?autoplay=0&showinfo=0`,
                description: "Korean rap",
                renderItem: this._renderVideo.bind(this),
            },
            {
                thumbnail: `/assets/img/AI.webp`,
                original: `https://www.youtube.com/embed/axpLCXyNvKM?si=buV7d1y6X49734W4?autoplay=0&showinfo=0`,
                description: "l'IA s'émancipe",
                renderItem: this._renderVideo.bind(this),
            },
            {
                thumbnail: `/assets/img/CDP_olivier.webp`,
                original: `https://www.youtube.com/embed/5yT1eMAJleo?autoplay=0&showinfo=0`,
                description: "voice swap rap",
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

export default AIVideoMusicGallery;
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";






class AIImageGallery extends React.Component {
    render() {
        const images = [
            {
                original: "/assets/img/beauty.webp",
                thumbnail: "/assets/img/beauty.webp",
            },
            {
                original: "/assets/img/BigMac.webp",
                thumbnail: "/assets/img/BigMac.webp",
            },
            {
                original: "/assets/img/black_lambo.webp",
                thumbnail: "/assets/img/black_lambo.webp",
            },
            {
                original: "/assets/img/cutie.webp",
                thumbnail: "/assets/img/cutie.webp",
            },{
                original: "/assets/img/demon.webp",
                thumbnail: "/assets/img/demon.webp",
            },{
                original: "/assets/img/hair.webp",
                thumbnail: "/assets/img/hair.webp",
            },{
                original: "/assets/img/koreanbeauty.webp",
                thumbnail: "/assets/img/koreanbeauty.webp",
            },{
                original: "/assets/img/lamborghini.webp",
                thumbnail: "/assets/img/lamborghini.webp",
            },{
                original: "/assets/img/masterpiece.webp",
                thumbnail: "/assets/img/masterpiece.webp",
            },{
                original: "/assets/img/model.webp",
                thumbnail: "/assets/img/model.webp",
            },{
                original: "/assets/img/mountainbiker.webp",
                thumbnail: "/assets/img/mountainbiker.webp",
            },{
                original: "/assets/img/mountainbiker_alps.webp",
                thumbnail: "/assets/img/mountainbiker_alps.webp",
            },{
                original: "/assets/img/mysteriousman.webp",
                thumbnail: "/assets/img/mysteriousman.webp",
            },{
                original: "/assets/img/ramen.webp",
                thumbnail: "/assets/img/ramen.webp",
            },{
                original: "/assets/img/stunningkorean.webp",
                thumbnail: "/assets/img/stunningkorean.webp",
            },{
                original: "/assets/img/wildlife.webp",
                thumbnail: "/assets/img/wildlife.webp",
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


export default AIImageGallery;
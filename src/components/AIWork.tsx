import React from 'react';
import AIImageGallery from "./AIImageGallery";
import AIVideoMusicGallery from "./AIVideoMusicGallery";



const AIWork: React.FC = () => {
    const images = [
        {
            original: "/assets/img/lamborghini.webp",
            thumbnail: "/assets/img/lamborghini.webp",
        },
        {
            original: "/assets/img/black_lambo.webp",
            thumbnail: "/assets/img/black_lambo.webp",
        },
        {
            original: "/assets/img/wildlife.webp",
            thumbnail: "/assets/img/wildlife.webp",
        },
        {
            original: "/assets/img/ramen.webp",
            thumbnail: "/assets/img/ramen.webp",
        },
        {
            original: "/assets/img/BigMac.webp",
            thumbnail: "/assets/img/BigMac.webp",
        },
        {
            original: "/assets/img/beauty.webp",
            thumbnail: "/assets/img/beauty.webp",
        },
        {
            original: "/assets/img/cutie.webp",
            thumbnail: "/assets/img/cutie.webp",
        },
        {
            original: "/assets/img/demon.webp",
            thumbnail: "/assets/img/demon.webp",
        },
        {
            original: "/assets/img/hair.webp",
            thumbnail: "/assets/img/hair.webp",
        },
        {
            original: "/assets/img/koreanbeauty.webp",
            thumbnail: "/assets/img/koreanbeauty.webp",
        },
        {
            original: "/assets/img/masterpiece.webp",
            thumbnail: "/assets/img/masterpiece.webp",
        },
        {
            original: "/assets/img/model.webp",
            thumbnail: "/assets/img/model.webp",
        },
        {
            original: "/assets/img/mountainbiker.webp",
            thumbnail: "/assets/img/mountainbiker.webp",
        },
        {
            original: "/assets/img/mountainbiker_alps.webp",
            thumbnail: "/assets/img/mountainbiker_alps.webp",
        },
        {
            original: "/assets/img/mysteriousman.webp",
            thumbnail: "/assets/img/mysteriousman.webp",
        },
        {
            original: "/assets/img/stunningkorean.webp",
            thumbnail: "/assets/img/stunningkorean.webp",
        },
    ];

    const loraImages = [
        {
            original: "/assets/img/dr_strange_olivier.webp",
            thumbnail: "/assets/img/dr_strange_olivier.webp",
        },
        {
            original: "/assets/img/deadpool.webp",
            thumbnail: "/assets/img/deadpool.webp",
        },
        {
            original: "/assets/img/deadpool2.webp",
            thumbnail: "/assets/img/deadpool2.webp",
        },
        {
            original: "/assets/img/godfather.webp",
            thumbnail: "/assets/img/godfather.webp",
        },
        {
            original: "/assets/img/godfather_2.webp",
            thumbnail: "/assets/img/godfather_2.webp",
        },
        {
            original: "/assets/img/olivier_jedi2.webp",
            thumbnail: "/assets/img/olivier_jedi2.webp",
        },
        {
            original: "/assets/img/olivier_ww2.webp",
            thumbnail: "/assets/img/olivier_ww2.webp",
        },
        {
            original: "/assets/img/egypt.webp",
            thumbnail: "/assets/img/egypt.webp",
        },
        {
            original: "/assets/img/pyramides.webp",
            thumbnail: "/assets/img/pyramides.webp",
        },
        {
            original: "/assets/img/samurai2.webp",
            thumbnail: "/assets/img/samurai2.webp",
        },
        {
            original: "/assets/img/samurai3.webp",
            thumbnail: "/assets/img/samurai3.webp",
        },
        {
            original: "/assets/img/samurai4.webp",
            thumbnail: "/assets/img/samurai4.webp",
        },
    ];

    return (
        <div>
            <h2 className="content__title">AI Art</h2>
            <div className="galleries">
                <div>
                    <h3 className="gallery-title">AI Generated Images</h3>
                    <p className="gallery-description">
                        Explore a collection of my best images made with FLUX 1.dev model.
                    </p>
                    <div className="gallery">
                        <AIImageGallery images={images}/>
                    </div>
                </div>
                <div>
                    <h3 className="gallery-title">AI Finetuning</h3>
                    <p className="gallery-description">
                        Explore a collection of images from a model I trained to include my face.
                    </p>
                    <div className="gallery">
                        <AIImageGallery images={loraImages}/>
                    </div>
                </div>
                <div>
                    <h3 className="gallery-title">AI Generated Songs</h3>
                    <p className="gallery-description">
                        Explore a collection of songs I made using RVC models or Suno AI
                    </p>
                    <div className="gallery">
                    <AIVideoMusicGallery/>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default AIWork;
import React from 'react';
import AIImageGallery from "./AIImageGallery";
import AIVideoMusicGallery from "./AIVideoMusicGallery";



const AIWork: React.FC = () => {
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
                        <AIImageGallery />
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
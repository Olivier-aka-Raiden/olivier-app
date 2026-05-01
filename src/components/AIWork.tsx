import React from 'react';
import AIImageGallery from "./AIImageGallery";
import VideoGallery from "./VideoGallery";
import PromptCarousel from "./PromptCarousel";
import { aiVideoItems, musicVideoItems } from "../data/videos";
import { fluxImages, loraImages } from "../data/images";
import { conversations } from "../data/conversations";

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
                        <AIImageGallery images={fluxImages}/>
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
                    <div className="gallery">
                        <VideoGallery items={aiVideoItems} />
                    </div>
                </div>
                <div>
                    <h3 className="gallery-title">AI Generated Songs</h3>
                    <p className="gallery-description">
                        Explore a collection of songs I made using RVC models or Suno AI
                    </p>
                    <div className="gallery">
                    <VideoGallery items={musicVideoItems} />
                    </div>
                </div>
                <div>
                    <h3 className="gallery-title">Prompts hall of fame</h3>
                    <p className="gallery-description">
                        Some interesting conversations with AI
                    </p>
                    <PromptCarousel conversations={conversations} />
                </div>
            </div>

        </div>
    );
};
export default AIWork;

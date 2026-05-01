import React, { useEffect, useState } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import { VideoItem } from '../data/videos';

interface VideoGalleryProps {
    items: VideoItem[];
}

interface Dimensions {
    width: number;
    height: number;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ items }) => {
    const [dimensions, setDimensions] = useState<Dimensions>(() => ({
        width: Math.min(window.innerWidth - 20, 560),
        height: Math.round((Math.min(window.innerWidth - 20, 560) / 16) * 9),
    }));

    useEffect(() => {
        const updateDimensions = () => {
            const width = Math.min(window.innerWidth - 20, 560);
            const height = Math.round((width / 16) * 9);
            setDimensions({ width, height });
        };

        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const renderVideo = (item: ReactImageGalleryItem) => (
        <div className="video-wrapper">
            <iframe
                title="sample video"
                width={dimensions.width}
                height={dimensions.height}
                src={item.original}
                style={{ border: 'none' }}
                allowFullScreen
            />
        </div>
    );

    const galleryItems: ReactImageGalleryItem[] = items.map((item) => ({
        ...item,
        renderItem: renderVideo,
    }));

    return (
        <div className="gallery-container">
            <ImageGallery
                showPlayButton={false}
                showFullscreenButton={true}
                showNav={true}
                showThumbnails={true}
                items={galleryItems}
            />
        </div>
    );
};

export default VideoGallery;

import React, { useState } from 'react';
import styled from 'styled-components';
import PromptBubble from './PromptBubble';

interface Conversation {
    prompt: string;
    response: string;
    model: string;
}

interface PromptCarouselProps {
    conversations: Conversation[];
}

const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 0;
`;

const CarouselWrapper = styled.div`
    overflow: hidden; // This will hide the adjacent slides
    width: 100%;
`;

const CarouselContent = styled.div<{ translate: number }>`
    display: flex;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${props => props.translate}%);
`;

const NavigationButton = styled.button<{ direction: 'left' | 'right' }>`
    position: absolute;
    top: 50%;
    ${props => props.direction}: -40px;
    transform: translateY(-50%);
    background: var(--color-bg);
    border: 2px solid var(--color-link);
    color: var(--color-title);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 2;
    
    &:hover {
        background: var(--color-link);
    }

    @media (max-width: 768px) {
        display: none; /* Hide arrows on mobile */
    }
`;

const PromptCarousel: React.FC<PromptCarouselProps> = ({ conversations }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);

    const handlePrevious = () => {
        setCurrentIndex(current => 
            current === 0 ? conversations.length - 1 : current - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex(current => 
            current === conversations.length - 1 ? 0 : current + 1
        );
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === null) return;
        
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) { // minimum swipe distance
            if (diff > 0) {
                handleNext();
            } else {
                handlePrevious();
            }
        }
        
        setTouchStart(null);
    };

    return (
        <CarouselContainer>
            <NavigationButton 
                direction="left" 
                onClick={handlePrevious}
            >
                ←
            </NavigationButton>
            
            <CarouselWrapper>
                <CarouselContent
                    translate={-currentIndex * 100}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {conversations.map((conv, index) => (
                        <div key={index} style={{ flex: '0 0 100%' }}>
                            <PromptBubble
                                prompt={conv.prompt}
                                response={conv.response}
                                model={conv.model}
                            />
                        </div>
                    ))}
                </CarouselContent>
            </CarouselWrapper>
            
            <NavigationButton 
                direction="right" 
                onClick={handleNext}
            >
                →
            </NavigationButton>
        </CarouselContainer>
    );
};

export default PromptCarousel;
import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

interface PromptBubbleProps {
    prompt: string;
    response: string;
    model: string;
}

const BubbleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 85vw;
    min-width: 300px;
    margin: 20px auto;
    padding: 10px 0;

    @media (max-width: 768px) {
        width: 80vw;
    }
`;

const SwipeHint = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;
    color: var(--color-text);
    font-size: 0.5rem;
    text-align: center;
    padding: 10px;
    width: 100%;
    transform: translateY(100%);
    display: none;
    animation: pulseAnimation 2s ease-in-out infinite;
    
    @media (max-width: 768px) {
        display: block;
    }

    @keyframes pulseAnimation {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
`;

const MessageBubble = styled.div<{ isResponse?: boolean }>`
    position: relative;
    background: ${props => props.isResponse ? 'var(--color-link)' : 'var(--color-bg)'};
    border: 2px solid var(--color-link);
    border-radius: 20px;
    padding: 0 10px;
    margin: ${props => props.isResponse ? '0 0 0 auto' : '0 auto 0 0'};
    width: 70vw;
    color: var(--color-text);
    font-size: 0.5rem;

    @media (max-width: 768px) {
        padding: 0 10px;
        font-size: 0.5rem;
        overflow-y: visible!important;
    }
`;

const BubbleLabel = styled.div<{ isResponse?: boolean }>`
    position: absolute;
    top: -12px;
    ${props => props.isResponse ? 'right: 20px' : 'left: 20px'};
    background: var(--color-bg);
    padding: 2px 10px;
    border: 2px solid var(--color-link);
    border-radius: 12px;
    font-size: 0.4rem;
    color: var(--color-title);

    @media (max-width: 768px) {
        font-size: 0.3rem;
        padding: 1px 4px;
    }
`;

const PromptBubble: React.FC<PromptBubbleProps> = ({ prompt, response, model }) => {
    const [showSwipeHint, setShowSwipeHint] = useState(false);
    const responseRef = useRef<HTMLDivElement>(null);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget;
        const isNearBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;
        setShowSwipeHint(isNearBottom);
    };

    return (
        <BubbleContainer>
            <MessageBubble>
                <BubbleLabel>prompt</BubbleLabel>
                <ReactMarkdown>{prompt}</ReactMarkdown>
            </MessageBubble>
            
            <MessageBubble
                isResponse
                ref={responseRef}
                onTouchEnd={handleScroll}
            >
                <BubbleLabel isResponse>{model}</BubbleLabel>
                <ReactMarkdown>{response}</ReactMarkdown>
                {showSwipeHint && (
                    <SwipeHint>
                        ← Swipe to see more →
                    </SwipeHint>
                )}
            </MessageBubble>
        </BubbleContainer>
    );
};

export default PromptBubble;
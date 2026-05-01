import React from 'react';
import styled from 'styled-components';

interface TileProps {
    imageUrl: string;
    title: string;
    description: string;
    learnMoreUrl: string;
}

const TileContainer = styled.div`
  width: 100%;
  max-width: 340px;
  min-height: 480px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(41, 53, 186, 0.25);
  }
`;

const ImageSection = styled.div<{ imageUrl: string }>`
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  flex-shrink: 0;
`;

const TitleOverlay = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0,0,0,0.6);
  color: white;
  padding: 6px 14px;
  border-radius: 10px;
  font-size: 0.7rem;
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 20px;
  font-weight: 400;
  font-size: 0.55rem;
  line-height: 1.5;
  background-color: var(--card-color);
  color: var(--text-color);
`;

const LearnMoreLink = styled.a`
  align-self: flex-end;
  color: var(--color-link);
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
  margin-top: 16px;
  font-size: 0.6rem;

  &:hover {
    color: var(--color-link-hover);
  }

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;

const Description = styled.p`
  text-align: left;
  margin: 0;
`;

const Tile: React.FC<TileProps> = ({ imageUrl, title, description, learnMoreUrl }) => {
    return (
        <TileContainer>
            <ImageSection imageUrl={imageUrl}>
                <TitleOverlay>{title}</TitleOverlay>
            </ImageSection>
            <DescriptionSection>
                <Description>{description}</Description>
                <LearnMoreLink href={learnMoreUrl} target="_blank" rel="noopener noreferrer">
                    Learn More
                </LearnMoreLink>
            </DescriptionSection>
        </TileContainer>
    );
};

export default Tile;

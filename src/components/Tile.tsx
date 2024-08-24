import React from 'react';
import styled from 'styled-components';

interface TileProps {
    imageUrl: string;
    title: string;
    description: string;
    learnMoreUrl: string;
}

const TileContainer = styled.div`
  min-width: 300px;
  max-width:300px;
  min-height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex: 1 1 calc(25% - 20px);
  flex-direction: column;
`;

const ImageSection = styled.div<{ imageUrl: string }>`
  height: 40%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const TitleOverlay = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0,0,0,0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
  padding: 15px;
  font-weight: 400;
  font-size:20px;
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
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-link-hover);
  }

  &::after {
    content: '→';
    margin-left: 5px;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(3px);
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
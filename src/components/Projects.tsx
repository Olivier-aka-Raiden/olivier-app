import React from 'react';
import Tile from "./Tile";

const Projects: React.FC = () => {
    return (
        <div>
            <h2 className="content__title">Projects</h2>
            <div className="tile-container">
                <Tile
                    imageUrl="/assets/img/elza_AI.webp"
                    title="Elza Assistant"
                    description="An AI assistant hosted on GCR, using FastAPI backend and integrated with Telegram. This bot uses OpenAI's GPT-4o model to process and respond to text messages, images, and voice inputs."
                    learnMoreUrl="https://github.com/Olivier-aka-Raiden/telegram-elza-bot?tab=readme-ov-file#personal-ai-assistant-bot"
                />
                <Tile
                    imageUrl="/assets/img/artificial-sus.webp"
                    title="Artificial Suspects"
                    description="A thrilling game where humans battle against AIs in an undercover role-playing experience. This game is based on a discord bot/server."
                    learnMoreUrl="https://github.com/Olivier-aka-Raiden/Artificial-Suspects?tab=readme-ov-file#artificial-suspects"
                />
                <Tile
                    imageUrl="/assets/img/AI_Arena.webp"
                    title="SC2 ML Bot"
                    description="Starcraft II Machine Learning (ML) bot, developed for competing in a Starcraft II bot ladder competition. This bot is designed using Python and leverages various libraries and frameworks to make an AI capable of playing Starcraft II."
                    learnMoreUrl="https://github.com/Olivier-aka-Raiden/sc2-raiden-bot/tree/main#starcraft-ii-machine-learning-bot"
                />
                <Tile
                    imageUrl="/assets/img/AI_commentators.webp"
                    title="AI commentators"
                    description="live commentary of Starcraft II AI matches using AI-generated TTS. The system features two AI commentators, who provide entertaining and insightful commentary based on the current game state."
                    learnMoreUrl="https://github.com/Olivier-aka-Raiden/GPT-commentary-SC2/tree/master?tab=readme-ov-file#starcraft-ii-live-commentary-bot"
                />
                <Tile
                    imageUrl="/assets/img/velo.png"
                    title="Twitch overlay"
                    description="An overlay for IRL streamers riding bicycles, showing realtime data from their trip : speed, traveled distance, position etc. This overlay was made specifically for a cyclathon project and adding connectivity with stream subs and donations."
                    learnMoreUrl="https://github.com/Olivier-aka-Raiden/react-realtimeirl-fawzz-tv?tab=readme-ov-file#realtimeirl-react-based-overlay"
                />
            </div>
        </div>
    );
};
export default Projects;
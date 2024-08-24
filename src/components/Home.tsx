import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <div className="item">
                Fullstack software developer
            </div>
            <h2 className="content__title">Olivier.</h2>
            <div className="item">
                <div className="landing-content">
                    <h2 className="welcome">Welcome to my website!</h2>
                    <p className="description">
                        I made this website to share my side projects and interests.<br/>
                        Most of it is AI-related: images, music, LLM-centered applications, and more.
                    </p>
                    <p className="enjoy">Enjoy exploring!</p>
                </div>
            </div>

        </div>
    );
};
export default Home;
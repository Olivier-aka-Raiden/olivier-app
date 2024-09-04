import React from 'react';
import Tooltip from "./Tooltip";

const About: React.FC = () => {

    const logos = [
        { src: '/assets/img/logos/github.png', alt: 'GitHub' },
        { src: '/assets/img/logos/java-se.png', alt: 'Java' },
        { src: '/assets/img/logos/IntelliJ_IDEA.png', alt: 'IntelliJ IDEA' },
        { src: '/assets/img/logos/react.svg', alt: 'React' },
        { src: '/assets/img/logos/Angular.png', alt: 'Angular' },
        { src: '/assets/img/logos/Python-logo.png', alt: 'Python' },
        { src: '/assets/img/logos/docker.svg', alt: 'Docker' },
        { src: '/assets/img/logos/kubernetes.png', alt: 'Kubernetes' },

    ];

    const ai_logos = [
        { src: '/assets/img/logos/sdnext.jfif', alt: 'SDNext' },
        { src: '/assets/img/logos/flux.webp', alt: 'Flux' },
        { src: '/assets/img/logos/replicate-prediction-gwlekklbmfsw4vub4vi3uhvgpy.png', alt: 'Replicate Prediction' },
        { src: '/assets/img/logos/eleven-labs-ai-logo.png', alt: 'Eleven Labs AI' },
        { src: '/assets/img/logos/suno.png', alt: 'Suno' },
    ];

    return (
        <div>
            <h2 className="content__title">About me</h2>
            <div className="item">
                <p>Olivier Villequey,<br/>
                    Working as Software Engineer in Strasbourg, France
                </p>
                <div className="apps-flex-container">
                    {logos.map((logo, index) => (
                        <Tooltip key={index} text={logo.alt}>
                            <div className="app-flex" key={index}>
                                <img decoding="async" src={logo.src} className="app-logo" alt={logo.alt} data-tooltip={logo.alt}/>
                            </div>
                        </Tooltip>
                    ))}
                </div>
                <div className="column-flex-two">
                    <div className="column-flex">
                        <h3>Technical Skills:</h3>
                        <ul>
                            <li>Languages: Java, Python, JavaScript/TypeScript, HTML/CSS</li>
                            <li>Frameworks: Spring Boot, Quarkus, Angular, Primefaces</li>
                            <li>DevOps: Jenkins, Kubernetes, Docker, Concourse</li>
                            <li>Database: SQL</li>
                            <li>Tools: Maven, Git, Jira, Confluence</li>
                            <li>Methodologies: Agile, Scrum</li>
                        </ul>
                    </div>
                    <div className="column-flex">
                        <h3>Languages:</h3>
                        <ul>
                            <li>French (Native)</li>
                            <li>English (B2 Certificate)</li>
                            <li>Korean (Intermediate)</li>
                            <li>Spanish (Basic)</li>
                        </ul>
                    </div>
                </div>

                <div className="column-flex-two">
                    <div className="column-flex">
                        <h3>Education:</h3>
                        <ul>
                            <li>UTBM - Engineering degree in Computer Science (2012-2017)</li>
                            <li>KAIST - Exchange program and internship, South Korea (2015-2016)</li>
                            <li>Chonbuk National University - Exchange program, South Korea (2014)</li>
                        </ul>
                    </div>
                    <div className="column-flex">
                        <h3>Professional Experience:</h3>
                        <ul>
                            <li>
                                <strong>France Travail</strong> (Sept 2022 - Present)<br />
                                Developing APIs for business and professional individual referentials
                            </li>
                            <li>
                                <strong>Électricité de Strasbourg</strong> (Oct 2020 - Sept 2022)<br />
                                Developed customer portal features including consumption visualization and online payments
                            </li>
                            <li>
                                <strong>GE Healthcare</strong> (Oct 2017 - Mar 2020)<br />
                                Worked on DoseWatch application, including microservices architecture migration
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="interests">
                    <h3>Interests & Hobbies:</h3>
                    <div className="passion-section">
                        <p>
                            Outside of coding, I enjoy sports like football, cycling, and hiking. I'm also passionate about strategy games such as GO, chess, and competitive video games. My love for travel aligns with my international experiences and language skills.
                        </p>
                    </div>
                    <div className="passion-section">
                        <p>
                            I am deeply passionate about generative AI and the exciting possibilities it offers. My journey has led me to create various innovative
                            projects that harness the power of AI. I've developed intelligent assistants integrated with large language models (LLMs), featuring
                            multimodal capabilities, function calls, and memory retention. Additionally, I've built sophisticated image generation tools and designed
                            workflows for both model inference and training. My work also includes creating AI commentators that provide live commentary for StarCraft II
                            matches, leveraging LLMs and text-to-speech (TTS) technology. Beyond that, I've explored the creative potential of generative AI in music
                            production and voiceovers.
                        </p>
                    </div>
                    <div className="apps-flex-container">
                        {ai_logos.map((logo, index) => (
                            <Tooltip key={index} text={logo.alt}>
                                <div className="app-flex" key={index}>
                                    <img decoding="async" src={logo.src} className="app-logo" alt={logo.alt} data-tooltip={logo.alt}/>
                                </div>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};
export default About;
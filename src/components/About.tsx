import React from 'react';

const About: React.FC = () => {
    return (
        <div>
            <h2 className="content__title">About me</h2>
            <div className="item">
                <p>Olivier Villequey,<br/>
                    Working as Software Engineer in Strasbourg, France
                </p>
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
                    <p>
                        Outside of coding, I enjoy sports like football, cycling, and hiking. I'm also passionate about strategy games such as GO, chess, and competitive video games. My love for travel aligns with my international experiences and language skills.
                    </p>
                </div>
            </div>
        </div>

    );
};
export default About;
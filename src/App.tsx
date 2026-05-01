import './App.css';
import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import AIWork from './components/AIWork';
import Contact from './components/Contact';
import {scrollWithOffset} from './services/scrollToElement.service';
import BurgerMenu from "./components/BurgerMenu";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { useActiveSection } from "./services/useActiveSection";

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeSection = useActiveSection();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <header className="header">
                    <nav>
                        <div className="home-btn-container">
                            <Link className="home-btn" scroll={el => scrollWithOffset(el)} to="#home">
                                <div role="button" className="main-button">
                                    O.
                                </div>
                            </Link>
                        </div>
                        <ul className="menu desktop-menu">
                            <li className={activeSection === 'about' ? 'nav-active' : ''}>
                                <Link scroll={el => scrollWithOffset(el)} to="#about">
                                    <div role="button" className="menu-button">
                                        About
                                    </div>
                                </Link>
                            </li>
                            <li className={activeSection === 'projects' ? 'nav-active' : ''}>
                                <Link scroll={el => scrollWithOffset(el)} to="#projects">
                                    <div role="button" className="menu-button">
                                        Projects
                                    </div>
                                </Link>
                            </li>
                            <li className={activeSection === 'ai-work' ? 'nav-active' : ''}>
                                <Link scroll={el => scrollWithOffset(el)} to="#ai-work">
                                    <div role="button" className="menu-button">
                                        AI Work
                                    </div>
                                </Link>
                            </li>
                            <li className={activeSection === 'contact' ? 'nav-active' : ''}>
                                <Link scroll={el => scrollWithOffset(el)} to="#contact">
                                    <div role="button" className="menu-button">
                                        Contact
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <div className="burger-container">
                            <button className={`burger-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} >
                                ☰
                            </button>
                        </div>
                    </nav>
                </header>
                <div className="content">
                    <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} activeSection={activeSection}/>
                    <section id="home">
                        <Home/>
                    </section>
                    <section id="about">
                        <About/>
                    </section>
                    <section id="projects">
                        <Projects/>
                    </section>
                    <section id="ai-work">
                        <AIWork/>
                    </section>
                    <section id="contact">
                        <Contact/>
                    </section>
                <Footer/>
                </div>
                <BackToTop/>
                <div className="wrap">
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;

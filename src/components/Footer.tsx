import React from 'react';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://github.com/Olivier-aka-Raiden" target="_blank" rel="noopener noreferrer" className="footer-link">
                        GitHub
                    </a>
                    <span className="footer-separator">·</span>
                    <a href="https://linkedin.com/in/olivier-villequey-fr/" target="_blank" rel="noopener noreferrer" className="footer-link">
                        LinkedIn
                    </a>
                </div>
                <p className="footer-copyright">
                    &copy; {year} Olivier Villequey
                </p>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    return (
        <div className="tooltip-container">
            {children}
            <div className="tooltip-box">{text}</div>
        </div>
    );
};

export default Tooltip;

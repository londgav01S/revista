import React from 'react';
import './UniversidadDelQuindioLogo.css';

/**
 * LogoIcon Component
 * Recreates the green symbol of the Universidad del Quindío logo
 * - Green vertical rectangle with rounded bottom corners
 * - White vertical oval in the center
 * - Small white rectangle in the bottom right
 */
const LogoIcon = ({ size = 1 }) => {
    return (
        <div className="logo-icon" style={{ transform: `scale(${size})` }}>
            {/* Main green rectangle with rounded bottom */}
            <div className="logo-rectangle">
                {/* White vertical oval in the center */}
                <div className="logo-oval" />
                {/* Small white rectangle in bottom right */}
                <div className="logo-small-rect" />
            </div>
        </div>
    );
};

/**
 * LogoText Component
 * Renders the text "UNIVERSIDAD DEL QUINDÍO"
 * - Serif font, green color
 * - Centered alignment
 * - Letter spacing for elegance
 */
const LogoText = () => {
    return (
        <div className="logo-text">
            <div className="logo-text-line">UNIVERSIDAD</div>
            <div className="logo-text-line">DEL QUINDÍO</div>
        </div>
    );
};

/**
 * UniversidadDelQuindioLogo Component
 * Main wrapper component that combines icon and text
 * Features:
 * - Responsive scaling via size prop
 * - Hover animations (elevation + color intensification)
 * - Fade-in animation on mount
 * - Dark mode compatible
 */
const UniversidadDelQuindioLogo = ({ size = 1, className = '' }) => {
    return (
        <div
            className={`universidad-logo ${className}`}
            style={{ '--logo-size': size }}
        >
            <LogoIcon size={size} />
            <LogoText />
        </div>
    );
};

export default UniversidadDelQuindioLogo;

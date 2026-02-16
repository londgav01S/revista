import React from 'react';
import './Pyramid.css';

const PyramidLevel = ({ level, title, description, color, width }) => {
    return (
        <div
            className={`pyramid-level-wrapper level-${level}`}
            style={{ '--level-width': width }}
        >
            <div
                className={`pyramid-level-shape level-${level}`}
                style={{ '--level-color': color }}
            ></div>

            <div className="level-content">
                <span className="level-intro">Nivel {level}:</span>
                <span className="level-title">{title}</span>
                <span className="level-subtitle">{description}</span>
            </div>
        </div>
    );
};

const Pyramid = () => {
    const levels = [
        {
            level: 3,
            title: "Representación Simbólica",
            description: "(Interpretación Contextual)",
            color: "#A9D3E6", // Light Blue
            width: "60%"
        },
        {
            level: 2,
            title: "Disposición Interna",
            description: "(Procesamiento Lógico)",
            color: "#4DA3D9", // Medium Blue
            width: "80%"
        },
        {
            level: 1,
            title: "Sensorial",
            description: "(Reacción Inmediata)",
            color: "#1B7F9E", // Dark Blue
            width: "100%"
        }
    ];

    return (
        <div className="pyramid-container">
            <div className="pyramid-wrapper">
                {levels.map((lvl) => (
                    <PyramidLevel
                        key={lvl.level}
                        {...lvl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Pyramid;

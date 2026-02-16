import React, { useState } from 'react';
import { Radio, MessageSquare, Globe, Headphones, RefreshCw } from 'lucide-react';
import './InfoCycle.css';

const InfoCycle = ({ title, subtitle, size = 1 }) => {
    const [activeNode, setActiveNode] = useState(null);

    const nodes = [
        { id: 'emisor', label: 'Emisor', icon: <Radio size={24} />, desc: 'El nodo origen que codifica la idea.' },
        { id: 'mensaje', label: 'Mensaje', icon: <MessageSquare size={24} />, desc: 'El paquete de información a transmitir.' },
        { id: 'canal', label: 'Canal', icon: <Globe size={24} />, desc: 'El medio físico o digital (voz, fibra óptica, aire).' },
        { id: 'receptor', label: 'Receptor', icon: <Headphones size={24} />, desc: 'El nodo destino que decodifica y procesa.' },
        { id: 'feedback', label: 'Retroalimentación', icon: <RefreshCw size={24} />, desc: 'La respuesta que asegura que el proceso fue exitoso.' }
    ];

    return (
        <div className="info-cycle-container" style={{ '--scale-factor': size }}>
            {/* Background Pattern */}
            <div className="circuit-pattern"></div>

            {/* Title Section */}
            <header className="cycle-header">
                <h2 className="cycle-title">{title}</h2>
                <p className="cycle-subtitle">{subtitle}</p>
            </header>

            {/* Diagram Section */}
            <div className="cycle-diagram-wrapper">
                <div className="cycle-circle">
                    {/* Rotating Arrows Ring */}
                    <div className="arrows-ring">
                        <div className="arrow-segment"></div>
                        <div className="arrow-segment"></div>
                        <div className="arrow-segment"></div>
                    </div>

                    {/* Central Hub (Optional visual anchor) */}
                    <div className="central-hub">
                        <div className="pulse"></div>
                    </div>

                    {/* Nodes */}
                    {nodes.map((node, index) => {
                        const angle = (index * (360 / nodes.length)) - 90; // Start from top (-90deg)
                        // Calculate position on circle (radius increased for better spacing)
                        const radius = 190;
                        const x = radius * Math.cos((angle * Math.PI) / 180);
                        const y = radius * Math.sin((angle * Math.PI) / 180);

                        return (
                            <div
                                key={node.id}
                                className={`cycle-node ${activeNode === node.id ? 'active' : ''}`}
                                style={{
                                    transform: `translate(${x}px, ${y}px)`,
                                }}
                                onMouseEnter={() => setActiveNode(node.id)}
                                onMouseLeave={() => setActiveNode(null)}
                                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                            >
                                <div className="node-content">
                                    <div className="node-icon">{node.icon}</div>
                                    <div className="node-label">{node.label}</div>
                                </div>

                                {/* Tooltip */}
                                <div className={`node-tooltip ${activeNode === node.id ? 'visible' : ''}`}>
                                    <strong>{node.label}</strong>
                                    <p>{node.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Footer Quote */}
            <div className="cycle-footer">
                <blockquote>“Sin un código común, no hay entendimiento”</blockquote>
            </div>
        </div>
    );
};

export default InfoCycle;

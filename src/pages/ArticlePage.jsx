import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { magazineConfig } from '../config/magazine';
import PageTransition from '../components/UI/PageTransition';
import InfoCycle from '../components/Diagrams/InfoCycle';
import Pyramid from '../components/Diagrams/Pyramid';
import './ArticlePage.css';

const renderMarkdown = (text) => {
    if (!text) return null;
    // Split by bold (**text**) and italics (*text*)
    // Escape asterisks and use non-greedy matching
    const regex = /(\*\*.+?\*\*|\*.+?\*)/g;
    const parts = text.split(regex);

    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return part;
    });
};

const ArticlePage = () => {
    const { id } = useParams();

    // Find the article in the config based on the ID or path segment
    // NOTE: Our config uses paths like /article/1, but params give us just '1'
    // So we need to match broadly or adjust the config lookup.
    // Ideally, upgrade config to have explicit IDs that match params.
    // For now, let's look for the matching path.
    const article = magazineConfig.pages.find(p => p.path === `/article/${id}`);

    if (!article) {
        return <Navigate to="/" />;
    }

    return (
        <PageTransition className="article-page-wrapper">
            <div className="article-page">
                <header className="article-header">
                    <div className="article-category">{article.category}</div>
                    <h1 className="article-title">{article.title}</h1>
                    <div className="article-meta">By {article.author}</div>
                </header>

                {article.image && (
                    <img src={article.image} alt={article.title} className="article-image" />
                )}

                <div className="article-body">
                    {Array.isArray(article.content) ? (
                        article.content.map((block, index) => {
                            switch (block.type) {
                                case 'header':
                                    return <h2 key={index} className="article-section-header">{block.text}</h2>;

                                case 'quote':
                                    return (
                                        <div key={index} className="article-quote">
                                            <p>{block.text}</p>
                                        </div>
                                    );

                                case 'definition-grid':
                                    return (
                                        <div key={index} className="definition-grid">
                                            {block.items.map((item, i) => (
                                                <div key={i} className="definition-card">
                                                    <div className="def-source">{item.source}</div>
                                                    <div className="def-text">{item.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                    );

                                case 'list-group':
                                    return (
                                        <div key={index} className="list-group">
                                            <h3 className="list-title">{block.title}</h3>
                                            <ul>
                                                {block.items.map((item, i) => {
                                                    const [title, desc] = item.split(': ');
                                                    return (
                                                        <li key={i}>
                                                            <strong>{title}:</strong> {desc}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    );

                                case 'dual-list':
                                    return (
                                        <div key={index} className="dual-list-container">
                                            {block.items.map((list, i) => (
                                                <div key={i} className="list-group half-width">
                                                    <h3 className="list-title">{list.title}</h3>
                                                    <ul>
                                                        {list.points.map((point, k) => {
                                                            const [title, desc] = point.split(': ');
                                                            return (
                                                                <li key={k}>
                                                                    <strong>{title}:</strong> {desc ? desc : ''}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    );

                                case 'custom-component':
                                    if (block.component === 'info-cycle') {
                                        return <InfoCycle key={index} {...block.props} />;
                                    }
                                    if (block.component === 'pyramid') {
                                        return <Pyramid key={index} {...block.props} />;
                                    }
                                    return null;

                                case 'scenario-box':
                                    return (
                                        <div key={index} className="scenario-container">
                                            <h3 className="scenario-title">{block.title}</h3>
                                            <div className="scenario-terminal">
                                                {block.dialogue.map((line, i) => (
                                                    <div key={i} className={`terminal-line ${line.style}`}>
                                                        <span className="terminal-actor">{line.actor}:</span>
                                                        <span className="terminal-text">"{line.text}"</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );

                                case 'comparison-table':
                                    const colCount = block.headers.length;
                                    return (
                                        <div key={index} className="comparison-container">
                                            <div
                                                className="comparison-grid"
                                                style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}
                                            >
                                                {block.headers.map((header, i) => (
                                                    <div key={i} className="comparison-header">{header}</div>
                                                ))}
                                                {block.rows.map((row, i) => (
                                                    <React.Fragment key={i}>
                                                        {row.map((cell, j) => (
                                                            <div key={j} className={`comparison-cell ${j === 0 ? 'left' : 'right'}`}>
                                                                {cell}
                                                            </div>
                                                        ))}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    );

                                case 'highlight-box':
                                    return (
                                        <div key={index} className="highlight-box">
                                            <div className="highlight-header">
                                                {block.icon && <span className="highlight-icon">{block.icon}</span>}
                                                <h3 className="highlight-title">{block.title}</h3>
                                            </div>
                                            <div className="highlight-content">
                                                {block.content.map((subBlock, k) => (
                                                    <p key={k}>{subBlock.text}</p>
                                                ))}
                                            </div>
                                        </div>
                                    );

                                case 'interview-qa':
                                    return (
                                        <div key={index} className="interview-section">
                                            {block.items.map((item, i) => (
                                                <div key={i} className="qa-block">
                                                    <div className="qa-question">
                                                        <span className="qa-label">P:</span> {item.question}
                                                    </div>
                                                    <div className="qa-answer">
                                                        <span className="qa-label">R:</span> {item.answer}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    );

                                case 'image':
                                    return (
                                        <div key={index} className="inline-image-container">
                                            <img src={block.src} alt={block.alt || ''} className="inline-image" />
                                            {block.caption && <p className="image-caption">{block.caption}</p>}
                                        </div>
                                    );

                                case 'references-list':
                                    return (
                                        <div key={index} className="references-section">
                                            {block.items.map((item, i) => (
                                                <p key={i} className="reference-item">
                                                    {renderMarkdown(item)}
                                                </p>
                                            ))}
                                        </div>
                                    );

                                case 'paragraph':
                                default:
                                    return (
                                        <p key={index}>
                                            {renderMarkdown(block.text)}
                                        </p>
                                    );
                            }
                        })
                    ) : (
                        // Fallback for string content (backward compatibility)
                        article.content.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph.trim()}</p>
                        ))
                    )}
                </div>
            </div>
        </PageTransition>
    );
};

export default ArticlePage;

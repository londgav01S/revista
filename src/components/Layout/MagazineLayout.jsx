import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { magazineConfig } from '../../config/magazine';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './MagazineLayout.css';

const MagazineLayout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const currentPageIndex = magazineConfig.pages.findIndex(page => page.path === location.pathname);
    const prevPage = magazineConfig.pages[currentPageIndex - 1];
    const nextPage = magazineConfig.pages[currentPageIndex + 1];

    const handleNavigation = (path) => {
        if (path) {
            navigate(path);
        }
    };

    return (
        <div className="magazine-layout">
            {/* Navigation Controls */}
            <div className="navigation-controls">
                <button
                    className={`nav-button prev ${!prevPage ? 'disabled' : ''}`}
                    onClick={() => handleNavigation(prevPage?.path)}
                    disabled={!prevPage}
                >
                    <ChevronLeft size={32} />
                </button>

                <button
                    className={`nav-button next ${!nextPage ? 'disabled' : ''}`}
                    onClick={() => handleNavigation(nextPage?.path)}
                    disabled={!nextPage}
                >
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Main Content Area */}
            <main className="magazine-content">
                {children}
            </main>

            {/* Page Indicator */}
            <div className="page-indicator">
                {currentPageIndex + 1} / {magazineConfig.pages.length}
            </div>
        </div>
    );
};

export default MagazineLayout;

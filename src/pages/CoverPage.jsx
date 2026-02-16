import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/UI/PageTransition';
import './CoverPage.css';

const CoverPage = () => {
    return (
        <PageTransition className="cover-page">
            <div className="bg-gradient" />

            {/* Floating decorative elements */}
            <motion.div
                className="floating-shape shape-circle"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="floating-shape shape-square"
                animate={{
                    y: [0, 15, 0],
                    rotate: [0, -8, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="cover-content academic-layout">
                <motion.header
                    className="academic-header"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h1 className="magazine-title">REVISTA</h1>
                    <div className="title-underline" />
                </motion.header>

                <motion.section
                    className="student-info"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className="student-name">Santiago Londoño Gaviria</h2>
                    <p className="student-code">Código: 1091884016</p>
                </motion.section>

                <div className="spacer-large" />

                <motion.section
                    className="professor-info"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <p className="label">Profesor:</p>
                    <h3 className="professor-name">Ana Milena López</h3>
                </motion.section>

                <motion.footer
                    className="academic-footer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    <p className="university-name">Universidad del Quindío</p>
                    <p className="faculty-name">Facultad de Ingeniería</p>
                    <p className="program-name">Ingeniería de Sistemas y Computación diurna</p>
                    <p className="course-name">Comunicación Asertiva</p>
                    <p className="location-date">Armenia, Quindío, 2026</p>
                </motion.footer>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                >
                    <Link to="/article/1" className="start-reading-link">
                        <motion.span
                            className="arrow"
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >→</motion.span>
                    </Link>
                </motion.div>
            </div>
        </PageTransition >
    );
};

export default CoverPage;

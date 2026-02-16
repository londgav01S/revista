import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        rotateY: 90,
        transformOrigin: "left center",
        x: "100%"
    },
    in: {
        opacity: 1,
        rotateY: 0,
        transformOrigin: "left center",
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    },
    out: {
        opacity: 0,
        rotateY: -90,
        transformOrigin: "right center",
        x: "-100%",
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
};

const PageTransition = ({ children, className = "" }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className={`page-transition-wrapper ${className}`}
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                perspective: '1000px',
                backfaceVisibility: 'hidden',
                overflowY: 'auto',
                overflowX: 'hidden',
                WebkitOverflowScrolling: 'touch'
            }}

        >
            {children}
        </motion.div>
    );
};

export default PageTransition;

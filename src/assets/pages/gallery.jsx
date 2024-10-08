import React, { useState, useRef } from 'react';
import '../css/gallery.css';
import Navbar from '../../../components/navbar';
import LandScape from '../../../components/landscape';
import Portrait from '../../../components/portrait';
import Footer from '../../../components/footer';

function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const contentRef = useRef(null);

    const handleClick = (category) => {
        setSelectedCategory(category);
 
        setTimeout(() => {
            if (contentRef.current) {
                contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 0);
    };

    return (
        <>
            <Navbar />
            <div className="gallery-container">
                <div style={{marginTop: '-100px'}} className="intro-content">
                    <h2>The Gallery</h2>
                   
                </div>
                <div className="btns">
                    <button className="learn-more" onClick={() => handleClick('landscape')}>
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Landscape Images</span>
                    </button>
                    <button className="learn-more" onClick={() => handleClick('portrait')}>
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Portrait Images</span>
                    </button>
                </div>
                <p>Explore a curated selection of our favorite photos, showcasing our expertise in documentary reportage, portraiture, fashion photography, and filmmaking.</p>
                <div ref={contentRef} style={{ marginTop: '50px' }} />
            </div>
            {selectedCategory === 'landscape' && <LandScape />}
            {selectedCategory === 'portrait' && <Portrait />}

            <Footer />
        </>
    );
}

export default GalleryPage;

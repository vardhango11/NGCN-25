import React from "react";
import './Gallery.css'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: "/Images/IMG_1722.JPG",
        thumbnail: "/Images/IMG_1722.JPG",
        description: "NGCN Team Gathering" // Optional: Added description field support
    },
    {
        original: "/Images/g2.jpg",
        thumbnail: "/Images/g2.jpg",
    },
    {
        original: "/Images/g8.jpg",
        thumbnail: "/Images/g8.jpg",
    },
    {
        original: "/Images/g7.jpg",
        thumbnail: "Images/g7.jpg",
    },
    {
        original: "/Images/g5.jpg",
        thumbnail: "/Images/g5.jpg",
    },
    {
        original: "/Images/IMG_1730.JPG",
        thumbnail: "/Images/IMG_1730.JPG",
    },
];

const Gallery = () => {
    return (
        <div className="gallery-page-wrapper">
            {/* 1. Hero Header */}
            <header className="gallery-hero">
                <div className="hero-content">
                    <h1>Gallery</h1>
                    <p>
                        The first class that dared to dream. Photos documenting the beginnings of our Next-Gen Computing research journey.
                    </p>
                </div>
            </header>

            {/* 2. Overlapping Gallery Card */}
            <div className="gallery-content-card">
                <div className="gallery-inner-wrapper">
                    <ImageGallery
                        items={images}
                        showPlayButton={true}
                        showFullscreenButton={true}
                        autoPlay={true}
                        slideInterval={4000}
                        thumbnailPosition="bottom"
                        showNav={true}
                        showBullets={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
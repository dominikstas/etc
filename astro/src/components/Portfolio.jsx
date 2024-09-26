import React, { useState, useEffect } from 'react';
import '/public/Portfolio.css';

const projects = [
  {
    title: "Strona Projekt 1",
    description: "Opis projektu nr 1, który wykonaliśmy. Ten projekt skupiał się na...",
    imageUrl: "/images/project1.jpg",
    url: "https://project1.com",
  },
  {
    title: "Strona Projekt 2",
    description: "Opis projektu nr 2, który wykonaliśmy. Głównym celem było...",
    imageUrl: "/images/project2.jpg",
    url: "https://project2.com",
  },
  {
    title: "Strona Projekt 3",
    description: "Opis projektu nr 3, który wykonaliśmy. Klient oczekiwał...",
    imageUrl: "/images/project3.jpg",
    url: "https://project3.com",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const { title, description, imageUrl, url } = projects[currentIndex];

  return (
    <div className="portfolio-container">
      <div className="project-card">
        <div className="image-container">
          <img src={imageUrl} alt={title} className="project-image" />
          <button onClick={handlePrev} className="nav-button prev-button">&lt;</button>
          <button onClick={handleNext} className="nav-button next-button">&gt;</button>
        </div>
        <div className="project-info">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
            Zobacz stronę
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
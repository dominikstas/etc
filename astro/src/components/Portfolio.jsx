import React, { useState, useEffect } from 'react';

const projects = [
  {
    title: "Zdalne korki",
    description: "Strona całkowicie utworzona i prowadzona przez nas. Projekt został wykonany przy użyciu Astro, i postawiony na cloudflare. Dbamy też o SEO oraz content na stronie, co wpływa na jej obecność w wyszukiwarkach.",
    imageUrl: "/public/zdalne-korki.png",
    mobileImageUrl: "/public/zdalne-korki-mobile.png",
    url: "https://zdalne-korki.pl",
  },
  {
    title: "Strona Projekt 2",
    description: "Opis projektu nr 2, który wykonaliśmy. Głównym celem było...",
    imageUrl: "/api/placeholder/800/600",
    mobileImageUrl: "/api/placeholder/400/300",
    url: "https://project2.com",
  },
  {
    title: "Strona Projekt 3",
    description: "Opis projektu nr 3, który wykonaliśmy. Klient oczekiwał...",
    imageUrl: "/api/placeholder/800/600",
    mobileImageUrl: "/api/placeholder/400/300",
    url: "https://project3.com",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const { title, description, imageUrl, mobileImageUrl, url } = projects[currentIndex];

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">
        Nasze <span className="highlight">Projekty</span>
      </h1>
      <div className="project-card">
        <div className="image-container">
          <img 
            src={isMobile ? mobileImageUrl : imageUrl} 
            alt={title} 
            className="project-image" 
          />
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
      <style jsx>{`
        .portfolio-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
          color: #e2e8f0;
          border-radius: 8px;
        }
        .portfolio-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 2rem;
          margin-top: 0;
        }
        .highlight {
          color: #fcd34d;
          text-underline-offset: 8px;
        }
        .project-card {
          background-color: #2d3748;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 1.5rem;
          padding: 1rem;
        }
        .image-container {
          position: relative;
          height: 500px;
          background-color: #1a202c;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.5rem;
        }
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          border: none;
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
          border-radius: 50%;
        }
        .nav-button:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        .prev-button {
          left: 1rem;
        }
        .next-button {
          right: 1rem;
        }
        .project-info {
          padding: 1.5rem;
          text-align: left;
        }
        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .project-description {
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }
        .project-link {
          display: inline-block;
          background-color: #f59e0b;
          color: #1a202c;
          text-decoration: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.25rem;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .project-link:hover {
          background-color: #fbbf24;
        }
        @media (max-width: 768px) {
          .portfolio-title {
            font-size: 2rem;
          }
          .image-container {
            height: 500px;
          }
          .project-title {
            font-size: 1.25rem;
          }
          .project-description {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
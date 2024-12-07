import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaDatabase, FaCloudflare, FaChartLine, FaToolbox, FaGlobe, FaHandshake, FaMegaport, FaChartBar, FaLock, FaMobileAlt } from 'react-icons/fa';
import { SiAstro, SiFlask, SiMysql, SiUmami } from 'react-icons/si';

const tools = [
  { name: 'Astro', description: 'Nowoczesny framework do tworzenia szybkich stron internetowych.', icon: <SiAstro /> },
  { name: 'HTML5', description: 'Standardowy język do budowania struktury stron WWW.', icon: <FaHtml5 /> },
  { name: 'CSS3', description: 'Zaawansowane możliwości stylizacji i responsywności.', icon: <FaCss3Alt /> },
  { name: 'React', description: 'Budowanie dynamicznych i interaktywnych interfejsów.', icon: <FaReact /> },
  { name: 'Flask', description: 'Wydajny framework backendowy do aplikacji internetowych.', icon: <SiFlask /> },
  { name: 'MySQL', description: 'Niezawodny system zarządzania bazami danych.', icon: <SiMysql /> },
  { name: 'Cloudflare', description: 'Bezpieczne i szybkie hostowanie Twojej strony.', icon: <FaCloudflare /> },
  { name: 'Umami', description: 'Nowoczesna analityka ruchu na stronie.', icon: <SiUmami /> },
  { name: 'DevOps', description: 'Zintegrowane i bezproblemowe aktualizacje stron.', icon: <FaToolbox /> },
];

const importancePoints = [
  { icon: <FaGlobe />, title: 'Globalna Obecność', description: 'Twoja firma dostępna dla klientów na całym świecie, 24/7.' },
  { icon: <FaHandshake />, title: 'Budowanie Zaufania', description: 'Profesjonalna strona internetowa zwiększa wiarygodność Twojej marki.' },
  { icon: <FaMegaport />, title: 'Łatwy Kontakt', description: 'Zapewnij klientom prosty sposób na kontakt z Twoją firmą.' },
  { icon: <FaChartBar />, title: 'Wzrost Sprzedaży', description: 'Strona internetowa skutecznie wspiera Twoją strategię sprzedażową.' },
  { icon: <FaLock />, title: 'Kontrola Wizerunku', description: 'Kształtuj pozytywny wizerunek Twojej firmy w internecie.' },
  { icon: <FaMobileAlt />, title: 'Mobilna Dostępność', description: 'Twoja strona działa płynnie na każdym urządzeniu mobilnym.' },
];

const WebsiteCreation = () => {
  return (
    <div className="website-creation-container">
      <h1 className="section-title"><span className="highlight">Nowoczesne Strony Internetowe</span> dla Twojej Firmy</h1>

      <section className="process-description">
        <p>
          Nasz proces tworzenia stron internetowych łączy kreatywność, zaawansowaną technologię i strategiczne podejście.
          Dzięki temu dostarczamy rozwiązania, które są szybkie, estetyczne i skuteczne. Pracujemy z wykorzystaniem
          najnowszych technologii, aby Twoja strona była krokiem w przyszłość.
        </p>
      </section>

      <section className="tools-section">
        <h2 className="section-header">Narzędzia i Technologie</h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="icon">{tool.icon}</div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="importance-section">
        <h2 className="section-header">Dlaczego Warto Mieć Profesjonalną Stronę?</h2>
        <div className="importance-grid">
          {importancePoints.map((point, index) => (
            <div key={index} className="importance-card">
              <div className="importance-icon">{point.icon}</div>
              <h4>{point.title}</h4>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .website-creation-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          color: #e2e8f0;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
        }
        .section-header {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #fcd34d;
        }
        .highlight {
          color: #fcd34d;
        }
        .process-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          text-align: center;
        }
        .tools-section, .importance-section {
          margin-bottom: 3rem;
        }
        .tools-grid, .importance-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .tool-card, .importance-card {
          background-color: #2d3748;
          border-radius: 0.75rem;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tool-card:hover, .importance-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        .icon, .importance-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: #fcd34d;
        }
        .tool-card h3, .importance-card h4 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: #fcd34d;
        }
        .tool-card p, .importance-card p {
          font-size: 1rem;
          line-height: 1.4;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .tools-grid, .importance-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .website-creation-container {
            padding: 1.5rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .section-header {
            font-size: 1.8rem;
          }
          .process-description {
            font-size: 1rem;
          }
          .tools-grid, .importance-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default WebsiteCreation;
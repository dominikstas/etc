import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaDatabase, FaCloudflare, FaChartLine, FaToolbox, FaGlobe, FaHandshake, FaMegaport, FaChartBar, FaLock, FaMobileAlt } from 'react-icons/fa';
import { SiAstro, SiFlask, SiMysql, SiUmami } from 'react-icons/si';

const tools = [
  { name: 'Astro', description: 'Framework dla szybkich stron statycznych', icon: <SiAstro /> },
  { name: 'HTML', description: 'Język znaczników do tworzenia struktury strony', icon: <FaHtml5 /> },
  { name: 'CSS', description: 'Język stylów do projektowania wyglądu strony', icon: <FaCss3Alt /> },
  { name: 'React', description: 'Biblioteka JavaScript do budowania interfejsów użytkownika', icon: <FaReact /> },
  { name: 'Flask', description: 'Lekki framework backendowy w Pythonie', icon: <SiFlask /> },
  { name: 'MySQL', description: 'System zarządzania relacyjnymi bazami danych', icon: <SiMysql /> },
  { name: 'Cloudflare', description: 'To tutaj umieszczamy twoją stronę', icon: <FaCloudflare /> },
  { name: 'Umami', description: 'Narzędzie do analizy ruchu na stronie', icon: <SiUmami /> },
  { name: 'DevOps', description: 'Dbamy o to, by aktualizacje strony przechodziły gładko i bezproblemowo', icon: <FaToolbox /> },
];

const importancePoints = [
  { icon: <FaGlobe />, title: 'Globalna Obecność', description: 'Zwiększ widoczność swojej firmy na arenie międzynarodowej, docierając do klientów 24/7.' },
  { icon: <FaHandshake />, title: 'Budowanie Zaufania', description: 'Profesjonalna strona buduje wiarygodność i zaufanie wśród potencjalnych klientów.' },
  { icon: <FaMegaport />, title: 'Bezpośredni Kontakt', description: 'Umożliw klientom łatwy kontakt i interakcję z Twoją firmą.' },
  { icon: <FaChartBar />, title: 'Wzrost Sprzedaży', description: 'Wykorzystaj stronę jako platformę do prezentacji i sprzedaży produktów lub usług.' },
  { icon: <FaLock />, title: 'Kontrola Wizerunku', description: 'Zarządzaj swoim wizerunkiem online i kształtuj narrację o swojej marce.' },
  { icon: <FaMobileAlt />, title: 'Mobilna Dostępność', description: 'Bądź dostępny dla klientów na wszystkich urządzeniach, w każdym miejscu i czasie.' },
];

const WebsiteCreation = () => {
  return (
    <div className="website-creation-container">
      <h2 className="section-title"><span className="highlight">Jak Tworzymy </span>nasze strony</h2>
      
      <div className="process-description">
        <p>
          Tworzenie stron internetowych to kompleksowy proces, który łączy w sobie
          kreatywność, techniczną wiedzę i strategiczne myślenie. Nasz zespół wykorzystuje
          najnowocześniejsze narzędzia i technologie, aby dostarczyć Ci stronę, która
          nie tylko wygląda świetnie, ale też działa szybko i efektywnie.
        </p>
      </div>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <div className="icon">{tool.icon}</div>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            {/* <a href={`/tools/${tool.name.toLowerCase()}`} className="tool-link">
              Dowiedz się więcej → 
            </a> */}
          </div>
        ))}
      </div>

      <div className="importance-section">
        <h3>Dlaczego Strony Internetowe Są Kluczowe dla Twojego Biznesu?</h3>
        <div className="importance-grid">
          {importancePoints.map((point, index) => (
            <div key={index} className="importance-card">
              <div className="importance-icon">{point.icon}</div>
              <h4>{point.title}</h4>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>

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
        .highlight {
          color: #fcd34d;
        }
        .process-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .tool-card {
          background-color: #2d3748;
          border-radius: 0.75rem;
          padding: 2rem;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }
        .tool-card:hover {
          transform: translateY(-10px);
        }
        .icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: #fcd34d;
        }
        .tool-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #fcd34d;
        }
        .tool-card p {
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }
        .tool-link {
          display: inline-flex;
          align-items: center;
          color: #63b3ed;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }
        .tool-link:hover {
          color: #4299e1;
        }
        .importance-section {
          background-color: #2d3748;
          border-radius: 0.75rem;
          padding: 2rem;
          margin-top: 2rem;
        }
        .importance-section h3 {
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
          color: #fcd34d;
          text-align: center;
        }
        .importance-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .importance-card {
          background-color: #3d4c63;
          border-radius: 0.5rem;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .importance-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .importance-icon {
          font-size: 2.5rem;
          color: #fcd34d;
          margin-bottom: 1rem;
        }
        .importance-card h4 {
          font-size: 1.2rem;
          color: #fcd34d;
          margin-bottom: 0.5rem;
        }
        .importance-card p {
          font-size: 0.9rem;
          line-height: 1.4;
        }
        @media (max-width: 1024px) {
          .tools-grid, .importance-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .tools-grid, .importance-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default WebsiteCreation;
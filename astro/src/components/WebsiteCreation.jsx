import React from 'react';

const tools = [
  { name: 'Astro', description: 'Framework dla szybkich stron statycznych' },
  { name: 'HTML', description: 'Język znaczników do tworzenia struktury strony' },
  { name: 'CSS', description: 'Język stylów do projektowania wyglądu strony' },
  { name: 'React', description: 'Biblioteka JavaScript do budowania interfejsów użytkownika' },
  { name: 'Flask', description: 'Lekki framework backendowy w Pythonie' },
  { name: 'MySQL', description: 'System zarządzania relacyjnymi bazami danych' },
  { name: 'Cloudflare', description: 'Platforma do dostarczania treści i bezpieczeństwa' },
  { name: 'Umami', description: 'Prywatna alternatywa dla Google Analytics' }
];

const WebsiteCreationProcess = () => {
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
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            <a href={`/tools/${tool.name.toLowerCase()}`} className="tool-link">
              Dowiedz się więcej →
            </a>
          </div>
        ))}
      </div>

      <div className="importance-section">
        <h3>Dlaczego Strony Internetowe Są Ważne?</h3>
        <ul>
          <li>Zwiększają widoczność Twojej firmy w sieci</li>
          <li>Budują wiarygodność i profesjonalny wizerunek</li>
          <li>Umożliwiają bezpośredni kontakt z klientami</li>
          <li>Działają jako platforma do prezentacji produktów i usług</li>
          <li>Wspierają marketing i sprzedaż online</li>
          <li>Zapewniają dostęp do informacji 24/7</li>
        </ul>
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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .tool-card {
          background-color: #2d3748;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .tool-card:hover {
          transform: translateY(-5px);
        }
        .tool-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: #fcd34d;
        }
        .tool-card p {
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .tool-link {
          display: inline-flex;
          align-items: center;
          color: #63b3ed;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        .tool-link:hover {
          color: #4299e1;
        }
        .importance-section {
          background-color: #2d3748;
          border-radius: 0.5rem;
          padding: 1.5rem;
          margin-top: 2rem;
        }
        .importance-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #fcd34d;
        }
        .importance-section ul {
          list-style-type: none;
          padding-left: 0;
        }
        .importance-section li {
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }
        .importance-section li::before {
          content: "•";
          color: #fcd34d;
          position: absolute;
          left: 0;
        }
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          .tools-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default WebsiteCreationProcess;
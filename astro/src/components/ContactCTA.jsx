import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactCTA = () => {
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { website, email, message });
    // Reset form after submission
    setWebsite('');
    setEmail('');
    setMessage('');
    alert('Dziękujemy za przesłanie formularza. Skontaktujemy się z Tobą wkrótce!');
  };

  // do poprawy tekst - zbyt skomplikowany
  
  return (
    <div className="contact-cta">
      <h2>Popraw Swoją Obecność Online</h2>
      <p>
        Wyślij nam adres swojej strony lub opis firmy, a my zaproponujemy, 
        jak ulepszyć Twoją obecność w sieci lub stworzymy dla Ciebie nową stronę!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="website">Strona internetowa (opcjonalnie)</label>
          <input
            type="url"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://www.twojafirma.pl"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email (wymagane)</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="twoj@email.pl"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Wiadomość (opcjonalnie)</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Opisz swoją firmę lub potrzeby związane ze stroną internetową"
          />
        </div>
        <button type="submit">
          <FaPaperPlane /> Wyślij
        </button>
      </form>

      <style jsx>{`
        .contact-cta {
          padding: 4rem 2rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
          border-radius: 0.75rem;
          color: #fff;
          max-width: 800px;
          margin: 2rem auto;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #fcd34d;
        }
        p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .form-group {
          width: 100%;
          max-width: 500px;
          margin-bottom: 1.5rem;
        }
        label {
          display: block;
          text-align: left;
          margin-bottom: 0.5rem;
          color: #fcd34d;
        }
        input, textarea {
          width: 100%;
          padding: 0.75rem;
          border: none;
          border-radius: 0.25rem;
          background-color: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 1rem;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        textarea {
          min-height: 100px;
          resize: vertical;
        }
        button {
          background-color: #fcd34d;
          color: #000;
          border: none;
          border-radius: 0.25rem;
          padding: 0.75rem 1.5rem;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        button:hover {
          background-color: #f3c328;
        }
        @media (max-width: 768px) {
          .contact-cta {
            padding: 3rem 1rem;
          }
          h2 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactCTA;
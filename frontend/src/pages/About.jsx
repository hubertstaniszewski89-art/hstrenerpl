import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const competencies = [
    {
      title: 'Trening personalny',
      description: 'Indywidualne programy treningowe dostosowane do Twoich celów, ograniczeń i stylu życia. Nie szablony — system budowany od zera.'
    },
    {
      title: 'Trening medyczny',
      description: 'Praca z osobami po kontuzjach, z dysfunkcjami ruchu lub ograniczeniami zdrowotnymi. Współpraca z fizjoterapeutami i lekarzami.'
    },
    {
      title: 'Ocena funkcjonalna',
      description: 'Kompleksowa diagnostyka jakości ruchu, identyfikacja dysfunkcji i ograniczeń zanim staną się problemem.'
    },
    {
      title: 'Rehabilitacja ruchowa',
      description: 'Powrót do pełnej sprawności po kontuzji lub długiej przerwie. Stopniowa odbudowa bez ryzyka nawrotu problemu.'
    },
    {
      title: 'Terapia tkanek miękkich',
      description: 'Praca z mięśniami, powięziami i strukturami miękkotkankowych. Redukcja napięć i przywracanie prawidłowych wzorców ruchowych.'
    },
    {
      title: 'Żywienie',
      description: 'Strategia żywieniowa dopasowana do celów treningowych i trybu życia. Bez diet ekstremalnych — system który możesz utrzymać długoterminowo.'
    }
  ];

  const achievements = [
    'Lekkoatletyka — starty na poziomie Mistrzostw Polski',
    'AZS AWF Warszawa — sport akademicki',
    'Zawodnik IFBB — kulturystyka',
    'I miejsce Grand Prix Polski 2016'
  ];

  return (
    <div className="about">
      {/* HERO */}
      <section className="about-hero section-dark">
        <div className="section-container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <h1>Specjalista od ruchu<br/>i funkcjonowania człowieka.</h1>
              <p className="about-hero-subtitle">Ponad 20 lat doświadczenia w sporcie wyczynowym i pracy z klientami. System Staniszewskiego™ to rezultat lat nauki, prób i błędów — własnych i klientów.</p>
            </div>
            <div className="about-hero-image">
              <img 
                src="https://customer-assets.emergentagent.com/job_functional-training-3/artifacts/5p68kwf4_ChatGPT%20Image%2025%20cze%202026%2C%2008_46_05.png" 
                alt="Hubert Staniszewski"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="story section-light">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Historia</span>
            <div className="section-line"></div>
          </div>
          <div className="story-content">
            <h2>Skąd przyszedłem</h2>
            <div className="story-text">
              <p>Zaczynałem jako lekkoatleta. AZS AWF Warszawa, starty na poziomie Mistrzostw Polski, life całkowicie podporządkowany sportowi. Wiedziałem że trening może zmieniać ciała — ale dopiero lata później zrozumiałem że to nie wystarczy.</p>
              
              <p>Przełom przyszedł kiedy zacząłem pracować z ludźmi którzy nie byli sportowcami. Osoby z bólem pleców mimo że "nic nie robią". Ludzie którzy próbowali 5 różnych planów treningowych i zawsze wracali do punktu wyjścia. 40-latkowie którzy chcieli wrócić do formy ale mieli pracę, rodzinę i chroniczny brak czasu.</p>
              
              <p>Zrozumiałem że problem nie jest w braku wiedzy treningowej. Problem jest w braku systemu który uwzględnia rzeczywistość człowieka. Dlatego powstał System Staniszewskiego™ — metodologia łącząca ocenę funkcjonalną, trening, rehabilitację i monitoring w jeden spójny proces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KOMPETENCJE */}
      <section className="competencies section-dark">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Kompetencje</span>
            <div className="section-line"></div>
          </div>
          <h2>Czym się zajmuję</h2>
          <div className="competencies-grid">
            {competencies.map((comp, index) => (
              <div key={index} className="competency-card">
                <h3>{comp.title}</h3>
                <p>{comp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILOZOFIA */}
      <section className="philosophy section-light">
        <div className="section-container">
          <div className="philosophy-quote">
            <blockquote>
              "Nie każdy klient może żyć jak zawodowy sportowiec. Program musi być możliwy do wdrożenia w realnym życiu — z rodziną, pracą i stresem. Dlatego buduję systemy, nie plany."
            </blockquote>
          </div>
          <div className="philosophy-content">
            <p>Większość planów treningowych ignoruje najważniejszą rzecz: Twoje życie. Zakładają że masz czas, energię i warunki jak zawodowy sportowiec. Prawda jest inna.</p>
            
            <p>Dobry system treningowy nie wymaga idealnych warunków. Uwzględnia Twoje ograniczenia, adaptuje się do zmian i działa długoterminowo — nie tylko przez pierwszy tydzień.</p>
            
            <p>To nie jest kwestia "motywacji" czy "charakteru". To kwestia właściwej konstrukcji systemu.</p>
          </div>
        </div>
      </section>

      {/* OSIĄGNIĘCIA */}
      <section className="achievements section-dark">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Osiągnięcia</span>
            <div className="section-line"></div>
          </div>
          <h2>Background sportowy</h2>
          <ul className="achievements-list">
            {achievements.map((achievement, index) => (
              <li key={index}>
                <CheckCircle2 size={24} />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section-light">
        <div className="section-container" style={{textAlign: 'center'}}>
          <h2>Chcesz sprawdzić czy mogę Ci pomóc?</h2>
          <p style={{maxWidth: '600px', margin: '0 auto 40px'}}>Napisz — odezwę się w ciągu 24 godzin.</p>
          <Link to="/kontakt" className="btn btn-dark">Skontaktuj się</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
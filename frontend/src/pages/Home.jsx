import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

const Home = () => {
  const problems = [
    {
      title: 'Boli Cię mimo że nie trenujesz "za ciężko"?',
      description: 'Siedzący tryb życia, praca przy biurku, smartfon — ciało dostaje sygnały które ignorujesz. Dysfunkcja ruchu nie czeka na odpowiedni wiek. Zacznij rozumieć co się dzieje, zanim problem urośnie.',
      segment: '20–30 lat',
      link: '/oferta#diagnostyka'
    },
    {
      title: 'Masz pracę, rodzinę i za mało czasu na "idealny plan"?',
      description: 'Dobry system treningowy nie wymaga idealnych warunków. Wymaga właściwego podejścia do Twojej rzeczywistości. Zamiast kolejnego planu który nie działa — system który działa właśnie dlatego że uwzględnia Twoje życie.',
      segment: '30–45 lat',
      link: '/oferta#konsultacja'
    },
    {
      title: 'Próbowałeś już kilka razy i wracasz do punktu wyjścia?',
      description: 'To nie jest kwestia charakteru ani motywacji. To kwestia konstrukcji planu. Ciało po 45. nie jest zepsute — potrzebuje innego podejścia niż plan z internetu pisany dla 25-latka.',
      segment: '45+ lat',
      link: '/oferta#program'
    }
  ];

  const methodology = [
    { step: '01', title: 'Ocena', description: 'Identyfikacja dysfunkcji i ograniczeń' },
    { step: '02', title: 'Identyfikacja', description: 'Przyczyny problemu i priorytetyzacja' },
    { step: '03', title: 'Plan', description: 'System dopasowany do Twojego życia' },
    { step: '04', title: 'Monitoring', description: 'Bieżąca ocena postępów' },
    { step: '05', title: 'Utrzymanie', description: 'Długoterminowa sprawność' }
  ];

  const featuredTop = {
    text: 'Ćwiczenia z Hubertem to nie tylko ćwiczenia. To przede wszystkim zrozumienie potrzeb, wyznaczenie celów, dopasowanie treningów do możliwości, z jednoczesnym stopniowym podnoszeniem poprzeczki. Hubert zawsze dba o prawidłowe wykonywanie ćwiczeń i postawę. Koryguje to, co trzeba. Doradza też w diecie. Dziękuję za holistyczne podejście do ćwiczeń ze mną. Szczerze polecam Huberta wszystkim, którzy chcą zdrowo żyć.',
    author: 'Marta Gądarowska',
    source: 'Google · 3 miesiące temu'
  };

  const testimonialsThree = [
    {
      text: 'Jestem pod opieką Huberta już od ponad roku. Od tego czasu zaobserwowałem dużą poprawę siły, poprawę wyglądu swojej sylwetki i proporcji ciała. Zmagam się z cukrzycą od 9 lat (typ 1) — ale to nie staje na przeszkodzie. Hubert pod kątem mojej choroby ustawia plan treningowy, suplementację, dietę. A co najważniejsze — motywuje do ciężkiej pracy i niepoddawania się.',
      author: 'Dezydery Kowalkowski',
      source: 'Facebook'
    },
    {
      text: 'Pełen profesjonalizm i indywidualne podejście do klienta. Świetny kontakt. Ćwiczenia i dieta dobrze dobrane, nawet przy insulinooporności. POLECAM!',
      author: 'Krystian Nowacky',
      source: 'Facebook'
    },
    {
      text: 'Hubert to specjalista w każdym calu, dla którego bycie trenerem to nie tylko zawód, ale i pasja. Były zawodowy sportowiec, doświadczony profesjonalista, od ponad 12 lat w branży fitness. Jakość prowadzenia klienta i ogrom wiedzy wykracza znacząco poza obecne standardy.',
      author: 'Dominika',
      source: 'Google · właścicielka studia treningu'
    }
  ];

  const featuredBottom = {
    text: 'Od maja rozpoczęłam treningi indywidualne z Hubertem i od tamtej pory widzę pozytywne efekty naszej współpracy. Pozbyłam się paru zbędnych kilogramów, poprawiła się moja kondycja fizyczna i sprawność ruchowa, co daje mi dużo satysfakcji i motywuje do dalszych ćwiczeń. Zdecydowałam się na współpracę z Hubertem, gdyż posiada on ogromną wiedzę nie tylko z zakresu prowadzenia ćwiczeń, ale również prawidłowej diety, która jest niezbędna przy treningu siłowym.',
    author: 'Basia',
    source: 'hstrener.pl'
  };

  const shortQuotes = [
    { text: 'Polecam! Konkretnie i skutecznie.', author: 'Adam D.' },
    { text: 'Słucha, dopasowuje program do aktualnych warunków, jest elastyczny.', author: 'Łukasz Ogonowski' },
    { text: 'Zawsze punktualny i świetnie przygotowany. Bardzo się cieszę, że trafiłam właśnie do niego.', author: 'Dagmara Jabłońska' },
    { text: 'Zna się na rzeczy. Krok po kroku osiągamy zamierzony cel.', author: 'Asia Macko' }
  ];

  const renderStars = () => (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="#C9A84C" stroke="#C9A84C" />
      ))}
    </div>
  );

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero section-dark">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Ruch który działa.<br/>Ciało które nie boli.</h1>
            <p className="hero-subtitle">Specjalista od ruchu i funkcjonowania — dla każdego kto chce żyć sprawnie, bez bólu i bez wywracania życia do góry nogami.</p>
            <div className="hero-cta">
              <Link to="/oferta" className="btn btn-primary">Poznaj ofertę</Link>
              <Link to="/ebook" className="btn btn-secondary">Pobierz darmowy rozdział eBooka</Link>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://customer-assets.emergentagent.com/job_hstrener-clone/artifacts/e7vo98ok_ChatGPT%20Image%2027%20cze%202026%2C%2021_34_07.png" 
              alt="Hubert Staniszewski podczas konsultacji z klientem"
            />
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="problems section-light">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Dla kogo</span>
            <div className="section-line"></div>
          </div>
          <h2>Rozpoznajesz się?</h2>
          <div className="problems-grid">
            {problems.map((problem, index) => (
              <div key={index} className="problem-card">
                <span className="problem-segment">{problem.segment}</span>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
                <Link to={problem.link} className="problem-link">
                  Zobacz rozwiązanie <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KIM JESTEM */}
      <section className="intro section-dark">
        <div className="section-container">
          <div className="intro-grid">
            <div className="intro-image">
              <img 
                src="https://customer-assets.emergentagent.com/job_functional-training-3/artifacts/4cfbd56u_3A12AC22-A86A-4EB4-94F0-670F095E8BEC.png" 
                alt="Hubert w działaniu"
              />
            </div>
            <div className="intro-content">
              <div className="section-header">
                <span className="section-label">O mnie</span>
                <div className="section-line"></div>
              </div>
              <h2>Kim jestem</h2>
              <p>Przez ponad 20 lat sportu wyczynowego i pracy z klientami nauczyłem się jednej rzeczy: największą przewagą nie jest wiedza treningowa. To umiejętność zrozumienia sytuacji człowieka który do mnie przychodzi — jego ograniczeń, ryzyk i priorytetów.</p>
              <p>Nie prowadzę "treningów". Buduję systemy które działają w realnym życiu — z pracą, rodziną i stresem.</p>
              <Link to="/o-mnie" className="btn btn-secondary">Dowiedz się więcej</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM STANISZEWSKIEGO */}
      <section className="methodology section-light">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">System</span>
            <div className="section-line"></div>
          </div>
          <h2>System Staniszewskiego™</h2>
          <p className="methodology-intro">Pięć etapów które łączą ocenę funkcjonalną, trening, rehabilitację i monitoring w jeden spójny system.</p>
          <div className="methodology-timeline">
            {methodology.map((item, index) => (
              <div key={index} className="methodology-step">
                <span className="step-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials section-dark">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Opinie</span>
            <div className="section-line"></div>
          </div>
          <h2>Co mówią klienci</h2>

          <div className="testimonial-featured" data-testid="testimonial-featured-top">
            {renderStars()}
            <p className="testimonial-featured-text">"{featuredTop.text}"</p>
            <div className="testimonial-author">
              <strong>{featuredTop.author}</strong>
              <span>{featuredTop.source}</span>
            </div>
          </div>

          <div className="testimonials-grid-3">
            {testimonialsThree.map((t, index) => (
              <div key={index} className="testimonial-card-light" data-testid={`testimonial-card-${index}`}>
                {renderStars()}
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <strong>{t.author}</strong>
                  <span>{t.source}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-featured" data-testid="testimonial-featured-bottom">
            {renderStars()}
            <p className="testimonial-featured-text">"{featuredBottom.text}"</p>
            <div className="testimonial-author">
              <strong>{featuredBottom.author}</strong>
              <span>{featuredBottom.source}</span>
            </div>
          </div>

          <div className="testimonials-quotes-grid">
            {shortQuotes.map((q, index) => (
              <div key={index} className="testimonial-quote" data-testid={`testimonial-quote-${index}`}>
                {renderStars()}
                <p className="testimonial-text">"{q.text}"</p>
                <div className="testimonial-author">
                  <strong>{q.author}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EBOOK BANNER */}
      <section className="ebook-banner section-dark" style={{background: 'var(--graphite)'}}>
        <div className="section-container">
          <div className="ebook-banner-grid">
            <div className="ebook-banner-content">
              <h2>Mądry Trening Po 30 — Tom I</h2>
              <p>Przeczytaj darmowy rozdział zanim zdecydujesz. Bez spamu. Tylko wartościowe treści.</p>
              <ul className="ebook-features">
                <li><CheckCircle2 size={20} /> Dlaczego większość planów nie działa długoterminowo</li>
                <li><CheckCircle2 size={20} /> Jak budować progres bez ryzyka kontuzji</li>
                <li><CheckCircle2 size={20} /> System który działa w realnym życiu</li>
              </ul>
              <Link to="/ebook" className="btn btn-primary">Pobierz darmowy rozdział eBooka</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta section-light">
        <div className="section-container" style={{textAlign: 'center'}}>
          <h2>Gotowy żeby to naprawić?</h2>
          <p style={{maxWidth: '600px', margin: '0 auto 40px'}}>Napisz do mnie. Odezwę się w ciągu 24 godzin.</p>
          <Link to="/kontakt" className="btn btn-dark">Napisz do mnie</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

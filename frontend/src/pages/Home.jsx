import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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

  const testimonials = [
    {
      text: 'Po latach bólu pleców wreszcie rozumiem co jest jego przyczyną. Hubert nie tylko usunął ból — nauczył mnie jak poruszać się prawidłowo.',
      author: 'Marcin, 34 lata',
      context: 'Problem: chroniczny ból dolnego odcinka kręgosłupa'
    },
    {
      text: 'Miałam już dość "planów treningowych" które działały przez tydzień. System Staniszewskiego to nie jest kolejny plan — to sposób myślenia.',
      author: 'Anna, 41 lat',
      context: 'Problem: kilka prób powrotu do formy, brak konsystencji'
    },
    {
      text: 'Pracuję 10 godzin dziennie przy komputerze. Nie wierzyłem że mogę się poruszać bez bólu karku. 3 miesiące współpracy zmieniły wszystko.',
      author: 'Tomasz, 28 lat',
      context: 'Problem: dysfunkcja ruchu, siedzący tryb życia'
    }
  ];

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
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.context}</span>
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

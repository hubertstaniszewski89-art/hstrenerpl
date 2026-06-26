import { useState } from 'react';
import { CheckCircle2, Download, Mail } from 'lucide-react';
import { toast } from 'sonner';

const Ebook = () => {
  const [freeEmail, setFreeEmail] = useState('');
  const [freeFirstName, setFreeFirstName] = useState('');
  const [tomIIEmail, setTomIIEmail] = useState('');

  const handleFreeChapterSubmit = (e) => {
    e.preventDefault();
    // Mock - w przyszłości integracja z backendem
    toast.success('Dziękuję! Sprawdź skrzynkę - właśnie wysłałem Ci darmowy rozdział.');
    setFreeEmail('');
    setFreeFirstName('');
  };

  const handleTomIISubmit = (e) => {
    e.preventDefault();
    // Mock - w przyszłości integracja z backendem
    toast.success('Zapisałem Cię na listę! Otrzymasz powiadomienie kiedy Tom II będzie gotowy.');
    setTomIIEmail('');
  };

  const chapters = [
    { number: '01', title: 'Dlaczego większość planów nie działa długoterminowo', description: 'Problem nie jest w Tobie. Problem jest w konstrukcji planu.' },
    { number: '02', title: 'Co to znaczy "trening funkcjonalny" naprawdę', description: 'Oddzielenie buzzwordów od praktyki która działa.' },
    { number: '03', title: 'Jak budować progres bez ryzyka kontuzji', description: 'Periodyzacja, autoregulacja i monitoring — system nie plan.' },
    { number: '04', title: 'Regeneracja nie jest opcjonalna', description: 'Sen, stres i odżywianie jako część systemu treningowego.' },
    { number: '05', title: 'Trening w realnym życiu — praca, rodzina, stres', description: 'Jak utrzymać konsystencję kiedy życie nie współpracuje.' },
    { number: '06', title: 'Kiedy potrzebujesz specjalisty', description: 'Jak rozpoznać że problem wymaga pomocy zewnętrznej.' },
    { number: '07', title: 'System Staniszewskiego™ w praktyce', description: 'Case study — jak wygląda długoterminowa współpraca.' }
  ];

  const quotes = [
    '"Dobry plan treningowy nie wymaga idealnych warunków. Uwzględnia Twoje ograniczenia i dostosowuje się do rzeczywistości."',
    '"Progres nie jest liniowy. System który to ignoruje skazany jest na porażkę."',
    '"Regeneracja nie jest nagrodą za ciężki trening. To fundamentalna część procesu adaptacji."'
  ];

  return (
    <div className="ebook">
      {/* HERO */}
      <section className="ebook-hero section-dark">
        <div className="section-container">
          <div className="ebook-hero-grid">
            <div className="ebook-hero-image">
              <div className="ebook-cover">
                <div className="ebook-cover-content">
                  <span className="ebook-cover-label">System Staniszewskiego™</span>
                  <h3>Mądry Trening Po 30</h3>
                  <span className="ebook-cover-tom">TOM I</span>
                </div>
              </div>
            </div>
            <div className="ebook-hero-content">
              <span className="ebook-label">eBook</span>
              <h1>Mądry Trening Po 30<br/>— Tom I</h1>
              <p className="ebook-subtitle">System treningowy który działa w realnym życiu — z pracą, rodziną i stresem. Bez chaosu, bez ekstremalnych planów, bez ignorowania rzeczywistości.</p>
              <ul className="ebook-features">
                <li><CheckCircle2 size={20} /> 7 rozdziałów praktycznej wiedzy</li>
                <li><CheckCircle2 size={20} /> System nie plan — różnica która zmienia wszystko</li>
                <li><CheckCircle2 size={20} /> Case study z realnej współpracy z klientem</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FREE CHAPTER LEAD MAGNET */}
      <section className="free-chapter section-light">
        <div className="section-container">
          <div className="free-chapter-box">
            <div className="free-chapter-content">
              <h2>Przeczytaj zanim zdecydujesz.</h2>
              <p>Pobierz darmowy rozdział. Bez spamu. Tylko wartościowe treści raz w tygodniu.</p>
              <form onSubmit={handleFreeChapterSubmit} className="free-chapter-form">
                <div className="form-group">
                  <input 
                    type="text"
                    placeholder="Imię"
                    value={freeFirstName}
                    onChange={(e) => setFreeFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email"
                    placeholder="Email"
                    value={freeEmail}
                    onChange={(e) => setFreeEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  <Mail size={20} />
                  Wyślij mi rozdział
                </button>
              </form>
              <p className="free-chapter-note">Otrzymasz rozdział "Dlaczego większość planów nie działa długoterminowo" + dostęp do newslettera z wartościowymi treściami.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="toc section-dark">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Spis treści</span>
            <div className="section-line"></div>
          </div>
          <h2>Co znajdziesz w książce</h2>
          <div className="toc-grid">
            {chapters.map((chapter, index) => (
              <div key={index} className="toc-item">
                <span className="toc-number">{chapter.number}</span>
                <div>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="quotes section-light">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Cytaty</span>
            <div className="section-line"></div>
          </div>
          <div className="quotes-grid">
            {quotes.map((quote, index) => (
              <blockquote key={index} className="quote-block">
                {quote}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* PURCHASE FULL VERSION */}
      <section className="purchase section-dark">
        <div className="section-container">
          <div className="purchase-box">
            <div className="purchase-content">
              <h2>Pełna wersja — Kup teraz</h2>
              <div className="purchase-details">
                <div className="purchase-info">
                  <p className="purchase-format">Format: PDF, A5, 124 strony</p>
                  <p className="purchase-price">89 PLN</p>
                </div>
                <ul className="purchase-includes">
                  <li><CheckCircle2 size={18} /> Wszystkie 7 rozdziałów</li>
                  <li><CheckCircle2 size={18} /> Case study z realnej współpracy</li>
                  <li><CheckCircle2 size={18} /> Checklisty i narzędzia do samodzielnej oceny</li>
                  <li><CheckCircle2 size={18} /> Dostęp do aktualizacji (Tom I wersja 2.0)</li>
                </ul>
              </div>
              <a 
                href="https://customer-assets.emergentagent.com/job_functional-training-3/artifacts/w0f0yb52_M%C4%85dry%20trening%20po%2030%20-%20TOM%20I%20%28HSPERFORMENCE%29.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Download size={20} />
                Kup teraz
              </a>
              <p className="purchase-note">Po kliknięciu zostaniesz przekierowany do bezpiecznej strony płatności.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOM II ANNOUNCEMENT */}
      <section className="tom-ii section-light">
        <div className="section-container">
          <div className="tom-ii-box">
            <span className="tom-ii-label">W przygotowaniu</span>
            <h2>Tom II — Zaawansowane strategie</h2>
            <p>Periodyzacja, autoregulacja, praca z kontuzją i długoterminowy progres. Zapisz się żeby otrzymać powiadomienie.</p>
            <form onSubmit={handleTomIISubmit} className="tom-ii-form">
              <input 
                type="email"
                placeholder="Twój email"
                value={tomIIEmail}
                onChange={(e) => setTomIIEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-dark">Powiadom mnie</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ebook;
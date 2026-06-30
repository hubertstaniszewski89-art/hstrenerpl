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

  const tocBlocks = [
    {
      block: 'Blok I — Fundamenty skutecznego treningu',
      chapters: [
        { number: '01', title: 'Dlaczego większość planów treningowych nie działa', description: 'Problem nie jest w Tobie. Problem jest w konstrukcji planu.' },
        { number: '02', title: 'Motywacja — dlaczego nie musisz jej ciągle szukać', description: 'Dlaczego silna wola to zły fundament długoterminowego treningu.' },
        { number: '03', title: 'Co sprawia, że trening jest naprawdę efektywny', description: 'Adaptacja, regeneracja i trzy filary skutecznego treningu.' }
      ]
    },
    {
      block: 'Blok II — Struktura i planowanie',
      chapters: [
        { number: '04', title: 'Dlaczego planowanie w czasie ma kluczowe znaczenie', description: 'Plan jako mapa, nie sztywny scenariusz.' },
        { number: '05', title: 'Makrocykl — myślenie o treningu w skali miesięcy i roku', description: 'Roczna struktura treningu i jej mezocykle.' },
        { number: '06', title: 'Mezocykl — porządkowanie pracy w krótszych etapach', description: '4–5 tygodniowe cykle pracy i progresu.' },
        { number: '07', title: 'Mikrocykl — jak zaplanować tydzień treningowy', description: 'Praktyczna realizacja planu w tygodniowym rytmie.' }
      ]
    }
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
              <img
                className="ebook-cover-img"
                src="https://customer-assets.emergentagent.com/job_hstrener-clone/artifacts/u2di2b3d_ChatGPT%20Image%2030%20cze%202026%2C%2009_42_53.png"
                alt="Okładka eBooka Mądry Trening Po 30 — Tom I"
              />
            </div>
            <div className="ebook-hero-content">
              <span className="ebook-label">eBook</span>
              <h1>Mądry Trening Po 30<br/>— Tom I</h1>
              <p className="ebook-subtitle">System treningowy który działa w realnym życiu — z pracą, rodziną i stresem. Bez chaosu, bez ekstremalnych planów, bez ignorowania rzeczywistości.</p>
              <ul className="ebook-features">
                <li><CheckCircle2 size={20} /> 7 rozdziałów praktycznej wiedzy</li>
                <li><CheckCircle2 size={20} /> System nie plan — różnica która zmienia wszystko</li>
                <li><CheckCircle2 size={20} /> Makrocykl, mezocykl i mikrocykl — kompletny system planowania</li>
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
              <p className="free-chapter-note">Otrzymasz rozdział "Dlaczego większość planów treningowych nie działa" + dostęp do newslettera z wartościowymi treściami.</p>
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
          {tocBlocks.map((blk, bi) => (
            <div key={bi} className="toc-block">
              <h3 className="toc-block-title">{blk.block}</h3>
              <div className="toc-grid">
                {blk.chapters.map((chapter, index) => (
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
          ))}
          <p className="toc-closing">— Zakończenie Tomu I · O autorze</p>
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
                  <li><CheckCircle2 size={18} /> Kompletny system planowania (makro / mezo / mikrocykl)</li>
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
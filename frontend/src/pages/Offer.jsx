import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Offer = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const products = [
    {
      id: 'diagnostyka',
      segment: 'Dla osób 20–30 lat',
      title: 'Diagnostyka Funkcjonalna Online',
      description: 'Dla osób z bólem, dysfunkcją ruchu lub ograniczeniami które chcą zrozumieć co się dzieje zanim problem urośnie.',
      whatYouGet: [
        'Kwestionariusz oceny funkcjonalnej',
        'Nagranie wideo — seria prostych ruchów',
        'Raport PDF z analizą i rekomendacjami',
        'Lista priorytetów — co zrobić najpierw'
      ],
      howItWorks: 'Wypełniasz kwestionariusz online, nagrywasz krótkie video z prostymi ruchami (5-7 minut). Analizuję materiał i przesyłam raport PDF z identyfikacją dysfunkcji i krokami naprawczymi.',
      cta: 'Zamów diagnostykę',
      link: '/kontakt'
    },
    {
      id: 'konsultacja',
      segment: 'Dla osób 30–50 lat',
      title: 'Konsultacja Strategiczna',
      description: 'Dla osób które chcą zrozumieć problem zanim zdecydują się na długoterminową współpracę. 90 minut — online lub stacjonarnie.',
      whatYouGet: [
        'Pełna ocena funkcjonalna (testy ruchu)',
        'Analiza historii treningowej i zdrowotnej',
        'Rekomendacja strategii działania',
        'Plan pierwszych kroków'
      ],
      howItWorks: '90-minutowa sesja jeden na jeden. Przeprowadzam pełną ocenę funkcjonalną, analizujemy Twoją sytuację (praca, czas, ograniczenia) i buduję rekomendację co robić dalej. Dostajesz jasny plan działania.',
      cta: 'Umów konsultację',
      link: '/kontakt'
    },
    {
      id: 'program',
      segment: 'Ograniczona liczba miejsc',
      title: 'Program 1:1 — System Staniszewskiego™',
      description: 'Długoterminowa współpraca. Trening, ocena funkcjonalna, rehabilitacja i żywienie jako jeden spójny system. Dla osób które chcą realnej zmiany.',
      whatYouGet: [
        'Indywidualny program treningowy',
        'Regularna ocena funkcjonalna i korekta',
        'Terapia tkanek miękkich (jeśli potrzebna)',
        'Strategia żywieniowa',
        'Monitoring postępów i adaptacja planu'
      ],
      howItWorks: 'Zaczynamy od pełnej oceny funkcjonalnej. Buduję system dopasowany do Twojej sytuacji. Spotykamy się regularnie (online lub stacjonarnie), monitoruję postępy, dostosowuję plan. To nie jest "12-tygodniowy program" — to proces długoterminowy.',
      cta: 'Zapytaj o dostępność',
      link: '/kontakt'
    }
  ];

  const faqs = [
    {
      question: 'Czy pracujesz online?',
      answer: 'Tak. Diagnostyka funkcjonalna i część konsultacji działa online. Program 1:1 może być prowadzony zdalnie lub stacjonarnie — zależy od Twojej sytuacji i lokalizacji.'
    },
    {
      question: 'Jak długo trwa współpraca?',
      answer: 'Diagnostyka to jednorazowa usługa (7-10 dni na raport). Konsultacja to pojedyncza sesja 90 minut. Program 1:1 to długoterminowa współpraca — minimum 3 miesiące, najczęściej 6-12 miesięcy.'
    },
    {
      question: 'Czy potrzebuję doświadczenia treningowego?',
      answer: 'Nie. System Staniszewskiego™ działa niezależnie od poziomu. Pracuję zarówno z osobami które nigdy nie trenowały, jak i z zawodnikami wracającymi po kontuzji.'
    },
    {
      question: 'Czy pracujesz z osobami po kontuzji?',
      answer: 'Tak, to jedna z moich specjalizacji. Trening medyczny i rehabilitacja ruchowa to część systemu. Jeśli jesteś pod opieką lekarza lub fizjoterapeuty — współpracuję z nimi.'
    },
    {
      question: 'Jak wygląda pierwszy krok?',
      answer: 'Napisz do mnie przez formularz kontaktowy. Opisz krótko swoją sytuację. Odezwę się w ciągu 24 godzin i pomogę wybrać właściwy punkt wejścia.'
    }
  ];

  return (
    <div className="offer">
      {/* HERO */}
      <section className="offer-hero section-dark">
        <div className="section-container">
          <h1>Jeden system.<br/>Trzy ścieżki współpracy.</h1>
          <p className="offer-hero-subtitle">Wybierz punkt wejścia dopasowany do Twojej sytuacji.</p>
        </div>
      </section>

      {/* PRODUCTS */}
      <div className="products">
        {products.map((product, index) => (
          <section 
            key={product.id} 
            id={product.id}
            className={index % 2 === 0 ? 'product-section section-light' : 'product-section section-dark'}
          >
            <div className="section-container">
              <div className="product-header">
                <span className="product-segment">{product.segment}</span>
                <h2>{product.title}</h2>
                <p className="product-description">{product.description}</p>
              </div>

              <div className="product-grid">
                <div className="product-details">
                  <div className="product-block">
                    <h3>Co dostajesz</h3>
                    <ul className="product-list">
                      {product.whatYouGet.map((item, i) => (
                        <li key={i}>
                          <CheckCircle2 size={20} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-block">
                    <h3>Jak to działa</h3>
                    <p>{product.howItWorks}</p>
                  </div>
                </div>

                <div className="product-cta-box">
                  <Link to={product.link} className={index % 2 === 0 ? 'btn btn-dark' : 'btn btn-primary'}>
                    {product.cta}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* FAQ */}
      <section className="faq section-light">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <div className="section-line"></div>
          </div>
          <h2>Najczęstsze pytania</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ArrowRight 
                    size={20} 
                    style={{
                      transform: openFaq === index ? 'rotate(90deg)' : 'rotate(0)',
                      transition: 'transform 0.2s'
                    }}
                  />
                </button>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="offer-final-cta section-dark">
        <div className="section-container" style={{textAlign: 'center'}}>
          <h2>Nie wiesz który produkt jest dla Ciebie?</h2>
          <p style={{maxWidth: '600px', margin: '0 auto 40px'}}>Napisz — pomogę zdecydować.</p>
          <Link to="/kontakt" className="btn btn-primary">Napisz do mnie</Link>
        </div>
      </section>
    </div>
  );
};

export default Offer;
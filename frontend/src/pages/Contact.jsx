import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    gdprConsent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast.error('Musisz wyrazić zgodę na przetwarzanie danych osobowych.');
      return;
    }

    // Mock - w przyszłości integracja z backendem
    console.log('Form submitted:', formData);
    toast.success('Wiadomość wysłana! Sprawdź skrzynkę — właśnie wysłałem Ci email z potwierdzeniem.');
    
    // Reset form
    setFormData({
      firstName: '',
      email: '',
      phone: '',
      topic: '',
      message: '',
      gdprConsent: false
    });
  };

  return (
    <div className="contact">
      {/* HERO */}
      <section className="contact-hero section-dark">
        <div className="section-container">
          <div className="contact-hero-content">
            <h1>Napisz.<br/>Odezwę się w ciągu 24 godzin.</h1>
            <p className="contact-hero-subtitle">Opisz krótko swoją sytuację. Pomogę wybrać właściwy punkt wejścia.</p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section section-light">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-info-block">
                <h3>Email</h3>
                <a href="mailto:kontakt@hstrener.pl">kontakt@hstrener.pl</a>
              </div>
              <div className="contact-info-block">
                <h3>Lokalizacja</h3>
                <p>Warszawa + online</p>
              </div>
              <div className="contact-info-block">
                <h3>Czas odpowiedzi</h3>
                <p>Do 24 godzin (dni robocze)</p>
              </div>
            </div>

            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="firstName">Imię *</label>
                  <input 
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefon (opcjonalnie)</label>
                  <input 
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="topic">W czym mogę Ci pomóc? *</label>
                  <select 
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Wybierz...</option>
                    <option value="dysfunkcja">Dysfunkcja i ból</option>
                    <option value="powrot">Powrót do formy</option>
                    <option value="program">Program 1:1</option>
                    <option value="ebook">eBook</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Wiadomość *</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Opisz krótko swoją sytuację..."
                    required
                  ></textarea>
                </div>

                <div className="form-group-checkbox">
                  <input 
                    type="checkbox"
                    id="gdprConsent"
                    name="gdprConsent"
                    checked={formData.gdprConsent}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="gdprConsent">
                    Zgadzam się na przetwarzanie danych osobowych w celu odpowiedzi na wiadomość.
                  </label>
                </div>

                <button type="submit" className="btn btn-dark">
                  <Send size={20} />
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GDZIE PRZYJMUJĘ */}
      <section className="location-section section-dark" data-testid="location-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Lokalizacja</span>
            <div className="section-line"></div>
          </div>
          <h2>Gdzie przyjmuję</h2>
          <div className="location-map">
            <iframe
              title="Lokalizacja — Warszawa, ul. Cybernetyki 10"
              src="https://www.google.com/maps?q=ul.%20Cybernetyki%2010,%20Warszawa,%20Polska&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
          <div className="location-grid">
            <div className="location-item" data-testid="location-miasto">
              <h3>Miasto</h3>
              <p><strong>Warszawa</strong>Sesje stacjonarne</p>
            </div>
            <div className="location-item" data-testid="location-online">
              <h3>Online</h3>
              <p><strong>Cała Polska</strong>Diagnostyka i konsultacje</p>
            </div>
            <div className="location-item" data-testid="location-dojazd">
              <h3>Dojazd</h3>
              <p><strong>Dokładna lokalizacja</strong>Podawana po umówieniu wizyty</p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTO EMAIL INFO */}
      <section className="auto-email-info section-dark">
        <div className="section-container">
          <div className="auto-email-box">
            <Mail size={32} />
            <h3>Co się stanie po wysłaniu formularza?</h3>
            <p>Otrzymasz automatyczny email z potwierdzeniem — sprawdź skrzynkę (również spam). Odezwę się osobiście w ciągu 24 godzin. W międzyczasie możesz pobrać darmowy rozdział eBooka.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-box">HS</div>
              <span className="logo-text">hstrener.pl</span>
            </div>
            <p className="footer-tagline">System Staniszewskiego™</p>
            <p className="footer-motto">Ruch który działa. Ciało które nie boli.</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Strona</h4>
              <Link to="/">Home</Link>
              <Link to="/o-mnie">O mnie</Link>
              <Link to="/oferta">Oferta</Link>
            </div>
            <div className="footer-col">
              <h4>Zasoby</h4>
              <Link to="/ebook">eBook</Link>
              <Link to="/kontakt">Kontakt</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 hstrener.pl — Hubert Staniszewski. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

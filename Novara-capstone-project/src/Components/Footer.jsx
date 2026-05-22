import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>About</h3>
          <p>Josh, Mildred, Lekan, Ifeanyi, Olawale, Adebayo, Daniel, Divine</p>
        </div>

        <div className="footer-line"></div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <p>©2026 Designed by the Techy-Nerds</p>

            <p>
              Built by{' '}
              <a
                href="https://github.com/M-rick-34/Techy-Nerds.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Techy-Nerds
              </a>
              . All rights reserved
            </p>
          </div>

          <a
            className="footer-tsacademy"
            href="https://tsacademyonline.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TSAcademy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
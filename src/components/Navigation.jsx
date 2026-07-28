import { useState } from 'react';
import './Navigation.css';

function ArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 13L13 5M13 5H6M13 5V12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="logo-wrapper">
        <div className="inner">
          <a href="/" aria-label="Home">
            <img src="https://framerusercontent.com/images/VMcS7YYTM5PXfXvlHc9u3hSCMM.svg" alt="" />
          </a>
        </div>
      </div>

      <div className="burger-wrapper">
        <div className="inner">
          <button
            className={`burger-btn${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      <div className={`menu-panel${menuOpen ? ' open' : ''}`}>
        <nav>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#blog" onClick={() => setMenuOpen(false)}>
            Blog
          </a>
        </nav>
        <div className="menu-contact">
          <a href="mailto:studio@norakessler.com" className="menu-email">
            studio@norakessler.com
          </a>
          <div className="menu-socials">
            <a href="#">Pinterest</a>
            <a href="#">Behance</a>
            <a href="#">Letterboxd</a>
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <button className="menu-cta-btn">
            <span className="menu-cta-bg" />
            <span className="menu-cta-text">Let's talk</span>
            <span className="menu-cta-circle">
              <ArrowIcon size={14} />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

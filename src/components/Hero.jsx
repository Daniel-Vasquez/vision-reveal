import { useRef } from 'react';
import useSpotlightReveal from '../hooks/useSpotlightReveal';
import './Hero.css';

const HEADLINE = 'Creo historias visuales y animaciones cautivadoras que hacen que las ideas brillen.';
const BASE_IMAGE_URL = './public/dani-light.jpeg';
const REVEAL_IMAGE_URL = './public/dani-dark.jpeg';

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

export default function Hero() {
  const canvasRef = useRef(null);
  const revealImgRef = useRef(null);
  useSpotlightReveal(canvasRef, revealImgRef, 260);

  const words = HEADLINE.split(' ');

  return (
    <main className="hero">
      <div className="hero-big-text creator-text-animate">
        <h2>Visuals</h2>
      </div>

      <div className="hero-base-img hero-image-animate" style={{ backgroundImage: `url('${BASE_IMAGE_URL}')` }} />

      <canvas ref={canvasRef} id="reveal-canvas" />
      <div
        ref={revealImgRef}
        className="hero-reveal-img"
        style={{ backgroundImage: `url('${REVEAL_IMAGE_URL}')` }}
      />

      <div className="hero-content">
        <div className="hero-content-inner">
          <h1 className="hero-headline">
            {words.map((word, i) => (
              <span
                key={i}
                className="word-reveal"
                style={{ animationDelay: `${1 + i * 0.05}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
          <button className="cta-btn cta-animate">
            <span className="cta-btn-bg" />
            <span className="cta-btn-text">Start a project now</span>
            <span className="cta-btn-circle">
              <ArrowIcon />
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}

import { useEffect, useState } from 'react';
import './Splash.css';

const BOX_COUNT = 5;

export default function Splash() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1650);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="splash">
      <div className="splash-row splash-row-top">
        {Array.from({ length: BOX_COUNT }).map((_, i) => (
          <div key={i} className="splash-box" style={{ animationDelay: `${i * 0.05}s` }} />
        ))}
      </div>
      <div className="splash-row splash-row-bottom">
        {Array.from({ length: BOX_COUNT }).map((_, i) => (
          <div key={i} className="splash-box" style={{ animationDelay: `${i * 0.05}s` }} />
        ))}
      </div>
    </div>
  );
}

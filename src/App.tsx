import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    setClickCount((prev) => prev + 1);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    document.title = isOn ? "💡 Just Click — ON!" : "🌑 Just Click — OFF";
  }, [isOn]);

  return (
    <div
      className="root-bg"
      style={{
        background: isOn
          ? "radial-gradient(ellipse at center, #fff9c4 0%, #ffe066 30%, #ffb800 60%, #6E54FF 100%)"
          : "#6E54FF",
        transition: "background 0.6s ease",
      }}
    >
      {isOn && <div className="glow-ring" />}

      <a
        href="https://nad.fun/tokens/0x7B2728c04aD436153285702e969e6EfAc3a97777"
        target="_blank"
        rel="noopener noreferrer"
        className="buy-link"
      >
        Buy here
      </a>

      <div className="content">
        <h1 className={`title ${isOn ? "title-on" : "title-off"}`}>
          Just Click
        </h1>

        <div className="switch-wrapper">
          <div className={`switch-plate ${isOn ? "plate-on" : "plate-off"}`}>
            <button
              className={`switch-btn ${isOn ? "btn-on" : "btn-off"} ${isAnimating ? "btn-click" : ""}`}
              onClick={handleToggle}
              aria-label={isOn ? "Turn off the light" : "Turn on the light"}
            >
              <div className={`switch-lever ${isOn ? "lever-up" : "lever-down"}`} />
            </button>
          </div>

          <div className="bulb-wrap">
            <svg
              className={`bulb ${isOn ? "bulb-on" : "bulb-off"}`}
              viewBox="0 0 80 110"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="bulbGlow" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor={isOn ? "#fff9c4" : "#555"} />
                  <stop offset="100%" stopColor={isOn ? "#ffcc00" : "#333"} />
                </radialGradient>
              </defs>
              <ellipse cx="40" cy="44" rx="28" ry="30" fill="url(#bulbGlow)" />
              <path
                d="M26 72 Q24 82 30 86 L50 86 Q56 82 54 72 Z"
                fill={isOn ? "#e8d000" : "#444"}
              />
              <rect x="30" y="86" width="20" height="5" rx="2" fill={isOn ? "#d4bc00" : "#333"} />
              <rect x="30" y="91" width="20" height="5" rx="2" fill={isOn ? "#c4ac00" : "#2a2a2a"} />
              {isOn && (
                <>
                  <line x1="40" y1="5" x2="40" y2="0" stroke="#ffe066" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="10" y1="15" x2="6" y2="11" stroke="#ffe066" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="70" y1="15" x2="74" y2="11" stroke="#ffe066" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="2" y1="44" x2="-3" y2="44" stroke="#ffe066" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="78" y1="44" x2="83" y2="44" stroke="#ffe066" strokeWidth="2.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </div>
        </div>

        {clickCount > 0 && (
          <p className={`counter ${isOn ? "counter-on" : "counter-off"}`}>
            You've clicked <strong>{clickCount}x</strong>
            {clickCount >= 20 ? " 🤯 maniac!" : clickCount >= 10 ? " 😅 quite a lot!" : ""}
          </p>
        )}
      </div>
    </div>
  );
}

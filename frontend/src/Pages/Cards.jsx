// src/Pages/Cards.jsx
import React from "react";
import { useCardContext } from "../Context/CardContext";
import "./Cards.css";

// Basic Card Components
const PrimaryCard = ({ children, onClick }) => (
  <div className="card card-primary" onClick={onClick}>
    <div className="card-content">
      <h3 className="card-title">Primary Card</h3>
      <p className="card-text">{children}</p>
      <button className="card-btn">Learn More</button>
    </div>
  </div>
);

const SecondaryCard = ({ children, onClick }) => (
  <div className="card card-secondary" onClick={onClick}>
    <div className="card-content">
      <h3 className="card-title">Secondary Card</h3>
      <p className="card-text">{children}</p>
      <button className="card-btn">Explore</button>
    </div>
  </div>
);

const OutlineCard = ({ children, onClick }) => (
  <div className="card card-outline" onClick={onClick}>
    <div className="card-content">
      <h3 className="card-title">Outline Card</h3>
      <p className="card-text">{children}</p>
      <button className="card-btn">Discover</button>
    </div>
  </div>
);

// Animated Card Components
const NeonCard = ({ children, onClick }) => (
  <div className="card neon-card" onClick={onClick}>
    <div className="card-content">
      <h3 className="card-title">Neon Card</h3>
      <p className="card-text">{children}</p>
      <button className="card-btn">Access</button>
    </div>
  </div>
);

const ShineCard = ({ children, onClick }) => (
  <div className="card shine-card" onClick={onClick}>
    <div className="card-content">
      <h3 className="card-title">Shine Card</h3>
      <p className="card-text">{children}</p>
      <button className="card-btn">Shine</button>
    </div>
  </div>
);

const PulseCard = ({ children, onClick }) => (
  <div className="card pulse-card" onClick={onClick}>
    <div className="card-content">
      <h3 className="card-title">Pulse Card</h3>
      <p className="card-text">{children}</p>
      <button className="card-btn">Pulse</button>
    </div>
  </div>
);

// Interactive Card Components
const LoadingCard = ({ children }) => {
  const { cardStates, handleLoading } = useCardContext();

  return (
    <div
      className={`card loading-card ${cardStates.loading ? "loading" : ""}`}
      onClick={handleLoading}
    >
      <div className="card-content">
        <h3 className="card-title">Loading Card</h3>
        <p className="card-text">{children}</p>
        <button className="card-btn" disabled={cardStates.loading}>
          {cardStates.loading && <div className="spinner"></div>}
          <span>{cardStates.loading ? "Loading..." : "Click to Load"}</span>
        </button>
      </div>
    </div>
  );
};

const ToggleCard = ({ children }) => {
  const { cardStates, handleToggle } = useCardContext();

  return (
    <div
      className={`card toggle-card ${cardStates.toggle ? "active" : ""}`}
      onClick={handleToggle}
    >
      <div className="card-content">
        <h3 className="card-title">Toggle Card</h3>
        <p className="card-text">{children}</p>
        <button className="card-btn">
          {cardStates.toggle ? "✓ Active" : "Toggle Me"}
        </button>
      </div>
    </div>
  );
};

const CounterCard = ({ children }) => {
  const { cardStates, handleCounter } = useCardContext();

  return (
    <div className="card counter-card" onClick={handleCounter}>
      <div className="card-content">
        <h3 className="card-title">Counter Card</h3>
        <p className="card-text">{children}</p>
        <button className="card-btn">Clicks: {cardStates.counter}</button>
      </div>
    </div>
  );
};

// Special Effect Cards
const GlassCard = ({ children, onClick }) => (
  <div className="card glass-card" onClick={onClick}>
    <div className="card-content">
      <h3 className="card-title">Glass Card</h3>
      <p className="card-text">{children}</p>
      <button className="card-btn">Glass Effect</button>
    </div>
  </div>
);

const Card3D = ({ children, onClick }) => (
  <div className="card card-3d" onClick={onClick}>
    <div className="card-content">
      <h3 className="card-title">3D Card</h3>
      <p className="card-text">{children}</p>
      <button className="card-btn">3D Effect</button>
    </div>
  </div>
);

const LiquidCard = ({ children, onClick }) => (
  <div className="card liquid-card" onClick={onClick}>
    <div className="card-content">
      <h3 className="card-title">Liquid Card</h3>
      <p className="card-text">{children}</p>
      <button className="card-btn">
        <span>Liquid Effect</span>
      </button>
    </div>
  </div>
);

// Code Block Component
const CodeBlock = ({ code, cardId }) => {
  const { copiedCode, copyToClipboard } = useCardContext();

  return (
    <div className="code-block-container">
      <div className="code-header">
        <span className="code-title">Code Example</span>
        <button
          className={`copy-btn ${copiedCode === cardId ? "copied" : ""}`}
          onClick={() => copyToClipboard(code, cardId)}
        >
          {copiedCode === cardId ? "✓ Copied!" : "📋 Copy"}
        </button>
      </div>
      <div className="code-block">
        <pre>{code}</pre>
      </div>
    </div>
  );
};

// Demo Box Component
const DemoBox = ({ children, description, cardId, code }) => {
  const { showCode, toggleCode } = useCardContext();

  return (
    <div className="demo-box">
      <div className="demo-content">{children}</div>
      <p className="demo-description">{description}</p>

      {code && (
        <button
          className={`code-toggle-btn ${showCode[cardId] ? "active" : ""}`}
          onClick={() => toggleCode(cardId)}
        >
          {showCode[cardId] ? "🙈 Hide Code" : "👁️ Show Code"}
        </button>
      )}

      {showCode[cardId] && code && <CodeBlock code={code} cardId={cardId} />}
    </div>
  );
};

// Code Examples
const codeExamples = {
  primary: `/* Primary Card */
.card-primary {
  background: linear-gradient(135deg, #64F7ED 0%, #202833 100%);
  color: #000000;
  box-shadow: 0 4px 15px rgba(100, 247, 237, 0.4);
}
.card-primary:hover {
  transform: translateY(-5px) rotateY(5deg);
  box-shadow: 0 15px 40px rgba(100, 247, 237, 0.6);
}`,

  secondary: `/* Secondary Card */
.card-secondary {
  background: linear-gradient(135deg, #202833 0%, #0B0C10 100%);
  color: #64F7ED;
  border: 1px solid rgba(100, 247, 237, 0.3);
}
.card-secondary:hover {
  box-shadow: 0 15px 40px rgba(100, 247, 237, 0.3);
  border-color: rgba(100, 247, 237, 0.5);
}`,

  outline: `/* Outline Card */
.card-outline {
  background: transparent;
  color: #64F7ED;
  border: 2px solid #64F7ED;
  backdrop-filter: blur(10px);
}
.card-outline:hover {
  background: rgba(100, 247, 237, 0.1);
  box-shadow: 0 8px 25px rgba(100, 247, 237, 0.3);
}`,

  neon: `/* Neon Card */
.neon-card {
  background: #000;
  color: #64F7ED;
  border: 1px solid #64F7ED;
  box-shadow: 0 0 20px #64F7ED, inset 0 0 20px rgba(100, 247, 237, 0.1);
}
.neon-card:hover {
  box-shadow: 0 0 30px #64F7ED, 0 0 40px #64F7ED, inset 0 0 30px rgba(100, 247, 237, 0.2);
}`,

  shine: `/* Shine Card */
.shine-card {
  background: linear-gradient(135deg, #202833 0%, #0B0C10 100%);
  color: #64F7ED;
  position: relative;
  overflow: hidden;
}
.shine-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(100, 247, 237, 0.4), transparent);
  transition: left 0.5s;
}
.shine-card:hover::after {
  left: 100%;
}`,

  pulse: `/* Pulse Card */
.pulse-card {
  background: linear-gradient(135deg, #64F7ED 0%, #202833 100%);
  color: #000000;
  animation: cyber-pulse-animation 2s infinite;
}
@keyframes cyber-pulse-animation {
  0% { box-shadow: 0 0 0 0 rgba(100, 247, 237, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(100, 247, 237, 0); }
  100% { box-shadow: 0 0 0 0 rgba(100, 247, 237, 0); }
}`,

  loading: `/* Loading Card */
.loading-card .spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid #64F7ED;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,

  toggle: `/* Toggle Card */
.toggle-card {
  border: 2px solid rgba(100, 247, 237, 0.5);
  background: rgba(0, 0, 0, 0.3);
  color: #64F7ED;
}
.toggle-card.active {
  background: linear-gradient(135deg, #64F7ED, #202833);
  color: #000000;
  box-shadow: 0 8px 25px rgba(100, 247, 237, 0.4);
}`,

  counter: `/* Counter Card */
.counter-card {
  background: linear-gradient(135deg, #202833 0%, #0B0C10 100%);
  color: #64F7ED;
  border: 1px solid rgba(100, 247, 237, 0.3);
}
.counter-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 40px rgba(100, 247, 237, 0.4);
}`,

  glass: `/* Glass Card */
.glass-card {
  background: rgba(100, 247, 237, 0.05);
  backdrop-filter: blur(15px);
  color: #64F7ED;
  border: 1px solid rgba(100, 247, 237, 0.3);
}`,

  card3d: `/* 3D Card */
.card-3d {
  background: linear-gradient(145deg, #64F7ED, #202833);
  color: #000000;
  box-shadow: 0 15px 0 #0B0C10, 0 25px 30px rgba(0, 0, 0, 0.4);
}
.card-3d:hover {
  transform: translateY(-5px) rotateX(10deg);
}`,

  liquid: `/* Liquid Card */
.liquid-card {
  background: linear-gradient(135deg, #64F7ED 0%, #202833 100%);
  color: #000000;
  position: relative;
  overflow: hidden;
}
.liquid-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(100, 247, 237, 0.3) 20%, transparent 70%);
  animation: cyber-wave 4s linear infinite;
}`,
};

// Main Cards Component
const Cards = () => {
  return (
    <div className="cards-page">
      <div className="page-header">
        <h1>🃏 Card Components</h1>
        <p>Beautiful, interactive cards with modern animations and effects</p>
        <div className="stats">
          <span className="stat">10+ Card Types</span>
          <span className="stat">Pure CSS</span>
          <span className="stat">Copy-Paste Ready</span>
        </div>
      </div>

      <div className="components-section">
        <h2>🎨 Basic Cards</h2>
        <div className="components-grid">
          <DemoBox
            description="Primary card with gradient background and hover effects"
            cardId="primary"
            code={codeExamples.primary}
          >
            <PrimaryCard>Modern design with sleek animations</PrimaryCard>
          </DemoBox>

          <DemoBox
            description="Secondary card with dark theme design"
            cardId="secondary"
            code={codeExamples.secondary}
          >
            <SecondaryCard>Dark theme with cyan accents</SecondaryCard>
          </DemoBox>

          <DemoBox
            description="Outline card with transparent background"
            cardId="outline"
            code={codeExamples.outline}
          >
            <OutlineCard>Transparent with glass effect</OutlineCard>
          </DemoBox>
        </div>

        <h2>✨ Animated Cards</h2>
        <div className="components-grid">
          <DemoBox
            description="Cyberpunk neon glow effect with pulsing animation"
            cardId="neon"
            code={codeExamples.neon}
          >
            <NeonCard>Cyberpunk style with neon glow</NeonCard>
          </DemoBox>

          <DemoBox
            description="Shimmering light sweep animation effect"
            cardId="shine"
            code={codeExamples.shine}
          >
            <ShineCard>Light sweep animation effect</ShineCard>
          </DemoBox>

          <DemoBox
            description="Continuous pulsing shadow effect"
            cardId="pulse"
            code={codeExamples.pulse}
          >
            <PulseCard>Continuous pulsing animation</PulseCard>
          </DemoBox>
        </div>

        <h2>🎮 Interactive Cards</h2>
        <div className="components-grid">
          <DemoBox
            description="Loading card with spinner animation and async action"
            cardId="loading"
            code={codeExamples.loading}
          >
            <LoadingCard>Interactive loading state</LoadingCard>
          </DemoBox>

          <DemoBox
            description="Toggle card with state management and visual feedback"
            cardId="toggle"
            code={codeExamples.toggle}
          >
            <ToggleCard>State management toggle</ToggleCard>
          </DemoBox>

          <DemoBox
            description="Counter card that tracks clicks with smooth animations"
            cardId="counter"
            code={codeExamples.counter}
          >
            <CounterCard>Click counter with animations</CounterCard>
          </DemoBox>
        </div>

        <h2>🌟 Special Effects</h2>
        <div className="components-grid">
          <DemoBox
            description="Glassmorphism effect with backdrop blur"
            cardId="glass"
            code={codeExamples.glass}
          >
            <GlassCard>Glassmorphism with backdrop blur</GlassCard>
          </DemoBox>

          <DemoBox
            description="3D depth effect with realistic press animation"
            cardId="card3d"
            code={codeExamples.card3d}
          >
            <Card3D>3D depth with realistic shadows</Card3D>
          </DemoBox>

          <DemoBox
            description="Liquid effect card with flowing animation"
            cardId="liquid"
            code={codeExamples.liquid}
          >
            <LiquidCard>Liquid animation with flow effect</LiquidCard>
          </DemoBox>
        </div>
      </div>

      <div className="usage-section">
        <h2>📖 How to Use</h2>
        <div className="usage-grid">
          <div className="usage-card">
            <h3>1. Copy CSS</h3>
            <p>Click "Show Code" on any card to see the CSS styles</p>
          </div>
          <div className="usage-card">
            <h3>2. Add to Project</h3>
            <p>Copy the CSS classes to your stylesheet</p>
          </div>
          <div className="usage-card">
            <h3>3. Use in JSX</h3>
            <p>Apply the class names to your card elements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

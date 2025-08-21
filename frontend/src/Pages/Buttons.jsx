// src/Pages/Buttons.jsx
import React from "react";
import { useButtonContext } from "../context/ButtonContext";
import "./Buttons.css";

// Basic Button Components
const PrimaryButton = ({ children, onClick }) => (
  <button className="btn btn-primary" onClick={onClick}>
    {children}
  </button>
);

const SecondaryButton = ({ children, onClick }) => (
  <button className="btn btn-secondary" onClick={onClick}>
    {children}
  </button>
);

const OutlineButton = ({ children, onClick }) => (
  <button className="btn btn-outline" onClick={onClick}>
    {children}
  </button>
);

// Animated Button Components
const NeonButton = ({ children, onClick }) => (
  <button className="neon-btn" onClick={onClick}>
    {children}
  </button>
);

const ShineButton = ({ children, onClick }) => (
  <button className="shine-btn" onClick={onClick}>
    {children}
  </button>
);

const PulseButton = ({ children, onClick }) => (
  <button className="pulse-btn" onClick={onClick}>
    {children}
  </button>
);

// Interactive Button Components
const LoadingButton = ({ children }) => {
  const { buttonStates, handleLoading } = useButtonContext();

  return (
    <button
      className={`loading-btn ${buttonStates.loading ? "loading" : ""}`}
      onClick={handleLoading}
      disabled={buttonStates.loading}
    >
      {buttonStates.loading && <div className="spinner"></div>}
      <span>{buttonStates.loading ? "Loading..." : children}</span>
    </button>
  );
};

const ToggleButton = ({ children }) => {
  const { buttonStates, handleToggle } = useButtonContext();

  return (
    <button
      className={`toggle-btn ${buttonStates.toggle ? "active" : ""}`}
      onClick={handleToggle}
    >
      {buttonStates.toggle ? "✓ Active" : children}
    </button>
  );
};

const CounterButton = ({ children }) => {
  const { buttonStates, handleCounter } = useButtonContext();

  return (
    <button className="counter-btn" onClick={handleCounter}>
      {children} ({buttonStates.counter})
    </button>
  );
};

// Special Effect Buttons
const GlassButton = ({ children, onClick }) => (
  <button className="glass-btn" onClick={onClick}>
    {children}
  </button>
);

const Button3D = ({ children, onClick }) => (
  <button className="btn-3d" onClick={onClick}>
    {children}
  </button>
);

// Liquid Button Component
const LiquidButton = ({ children, onClick }) => (
  <button className="liquid-btn" onClick={onClick}>
    <span>{children}</span>
  </button>
);

// Code Block Component
const CodeBlock = ({ code, buttonId }) => {
  const { copiedCode, copyToClipboard } = useButtonContext();

  return (
    <div className="code-block-container">
      <div className="code-header">
        <span className="code-title">Code Example</span>
        <button
          className={`copy-btn ${copiedCode === buttonId ? "copied" : ""}`}
          onClick={() => copyToClipboard(code, buttonId)}
        >
          {copiedCode === buttonId ? "✓ Copied!" : "📋 Copy"}
        </button>
      </div>
      <div className="code-block">
        <pre>{code}</pre>
      </div>
    </div>
  );
};

// Updated Demo Box Component with buttonType prop
const DemoBox = ({ children, description, buttonId, code, buttonType }) => {
  const { showCode, toggleCode } = useButtonContext();

  return (
    <div className="demo-box" data-button-type={buttonType}>
      <div className="demo-content">{children}</div>
      <p className="demo-description">{description}</p>

      {code && (
        <button
          className={`code-toggle-btn ${showCode[buttonId] ? "active" : ""}`}
          onClick={() => toggleCode(buttonId)}
        >
          {showCode[buttonId] ? "🙈 Hide Code" : "👁️ Show Code"}
        </button>
      )}

      {showCode[buttonId] && code && (
        <CodeBlock code={code} buttonId={buttonId} />
      )}
    </div>
  );
};

// Code Examples
const codeExamples = {
  primary: `/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, #64F7ED 0%, #202833 100%);
  color: #000000;
  box-shadow: 0 4px 15px rgba(100, 247, 237, 0.4);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(100, 247, 237, 0.6);
}`,

  secondary: `/* Secondary Button */
.btn-secondary {
  background: linear-gradient(135deg, #202833 0%, #0B0C10 100%);
  color: #64F7ED;
  box-shadow: 0 4px 15px rgba(32, 40, 51, 0.4);
  border: 1px solid rgba(100, 247, 237, 0.3);
}
.btn-secondary:hover {
  box-shadow: 0 8px 25px rgba(100, 247, 237, 0.3);
}`,

  outline: `/* Outline Button */
.btn-outline {
  background: transparent;
  color: #64F7ED;
  border: 2px solid #64F7ED;
  backdrop-filter: blur(10px);
}
.btn-outline:hover {
  background: rgba(100, 247, 237, 0.1);
  box-shadow: 0 4px 15px rgba(100, 247, 237, 0.3);
}`,

  neon: `/* Neon Button */
.neon-btn {
  background: #000;
  color: #00ff88;
  text-shadow: 0 0 10px #00ff88;
  box-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88;
  border: 1px solid #00ff88;
}
.neon-btn:hover {
  box-shadow: 0 0 20px #00ff88, 0 0 30px #00ff88, 0 0 40px #00ff88;
  transform: scale(1.05);
}`,

  shine: `/* Shine Button */
.shine-btn {
  background: linear-gradient(135deg, #202833 0%, #0B0C10 100%);
  color: #4facfe;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(79, 172, 254, 0.3);
}
.shine-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(79, 172, 254, 0.4), transparent);
  transition: left 0.5s;
}
.shine-btn:hover::after {
  left: 100%;
}`,

  pulse: `/* Pulse Button */
.pulse-btn {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  animation: cyber-pulse-animation 2s infinite;
}
@keyframes cyber-pulse-animation {
  0% {
    box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(231, 76, 60, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(231, 76, 60, 0);
  }
}`,

  loading: `/* Loading Button */
.loading-btn {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  color: #000000;
  display: flex;
  align-items: center;
  gap: 10px;
}
.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid #000000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,

  toggle: `/* Toggle Button */
.toggle-btn {
  border: 2px solid rgba(155, 89, 182, 0.5);
  background: rgba(0, 0, 0, 0.3);
  color: #9b59b6;
  backdrop-filter: blur(10px);
}
.toggle-btn:hover {
  border-color: #9b59b6;
  background: rgba(155, 89, 182, 0.1);
}
.toggle-btn.active {
  background: linear-gradient(135deg, #9b59b6, #8e44ad);
  color: white;
}`,

  counter: `/* Counter Button */
.counter-btn {
  background: linear-gradient(135deg, #e91e63 0%, #ad1457 100%);
  color: white;
  border: 1px solid rgba(233, 30, 99, 0.3);
}
.counter-btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(233, 30, 99, 0.4);
}`,

  glass: `/* Glass Button */
.glass-btn {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
.glass-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 40px rgba(255, 255, 255, 0.2);
}`,

  btn3d: `/* 3D Button */
.btn-3d {
  background: linear-gradient(145deg, #667eea, #5a67d8);
  color: white;
  box-shadow: 0 9px 0 #0B0C10, 0 15px 20px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(102, 126, 234, 0.3);
}
.btn-3d:active {
  transform: translateY(4px);
  box-shadow: 0 5px 0 #0B0C10, 0 8px 15px rgba(0, 0, 0, 0.3);
}`,

  liquid: `/* Liquid Button */
.liquid-btn {
  position: relative;
  background: linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%);
  color: white;
  border-radius: 50px;
  overflow: hidden;
  border: 1px solid rgba(0, 201, 255, 0.3);
}
.liquid-btn::before {
  content: '';
  position: absolute;
  background: radial-gradient(circle, rgba(0, 201, 255, 0.3) 20%, transparent 70%);
  animation: cyber-wave 4s linear infinite;
}
@keyframes cyber-wave {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(30%, 30%) rotate(180deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}`,
};

// Main Buttons Component
const Buttons = () => {
  return (
    <div className="buttons-page">
      <div className="page-header">
        <h1>🎯 Button Components</h1>
        <p>Beautiful, interactive buttons with modern animations and effects</p>
        <div className="stats">
          <span className="stat">10+ Button Types</span>
          <span className="stat">Pure CSS</span>
          <span className="stat">Copy-Paste Ready</span>
        </div>
      </div>

      <div className="components-section">
        <h2>🎨 Basic Buttons</h2>
        <div className="components-grid">
          <DemoBox
            description="Primary button with gradient background and hover effects"
            buttonId="primary"
            code={codeExamples.primary}
            buttonType="primary"
          >
            <PrimaryButton>Primary Button</PrimaryButton>
          </DemoBox>

          <DemoBox
            description="Secondary button with cyberpunk gradient design"
            buttonId="secondary"
            code={codeExamples.secondary}
            buttonType="secondary"
          >
            <SecondaryButton>Secondary Button</SecondaryButton>
          </DemoBox>

          <DemoBox
            description="Outline button with transparent background and glow"
            buttonId="outline"
            code={codeExamples.outline}
            buttonType="outline"
          >
            <OutlineButton>Outline Button</OutlineButton>
          </DemoBox>
        </div>

        <h2>✨ Animated Buttons</h2>
        <div className="components-grid">
          <DemoBox
            description="Cyberpunk neon glow effect with pulsing animation"
            buttonId="neon"
            code={codeExamples.neon}
            buttonType="neon"
          >
            <NeonButton>Neon Button</NeonButton>
          </DemoBox>

          <DemoBox
            description="Shimmering light sweep animation effect"
            buttonId="shine"
            code={codeExamples.shine}
            buttonType="shine"
          >
            <ShineButton>Shine Button</ShineButton>
          </DemoBox>

          <DemoBox
            description="Continuous pulsing shadow effect with red theme"
            buttonId="pulse"
            code={codeExamples.pulse}
            buttonType="pulse"
          >
            <PulseButton>Pulse Button</PulseButton>
          </DemoBox>
        </div>

        <h2>🎮 Interactive Buttons</h2>
        <div className="components-grid">
          <DemoBox
            description="Loading button with spinner animation and async action"
            buttonId="loading"
            code={codeExamples.loading}
            buttonType="loading"
          >
            <LoadingButton>Click to Load</LoadingButton>
          </DemoBox>

          <DemoBox
            description="Toggle button with state management and purple theme"
            buttonId="toggle"
            code={codeExamples.toggle}
            buttonType="toggle"
          >
            <ToggleButton>Toggle Me</ToggleButton>
          </DemoBox>

          <DemoBox
            description="Counter button that tracks clicks with pink theme"
            buttonId="counter"
            code={codeExamples.counter}
            buttonType="counter"
          >
            <CounterButton>Click Counter</CounterButton>
          </DemoBox>
        </div>

        <h2>🌟 Special Effects</h2>
        <div className="components-grid">
          <DemoBox
            description="Glassmorphism effect with backdrop blur and glow"
            buttonId="glass"
            code={codeExamples.glass}
            buttonType="glass"
          >
            <GlassButton>Glass Button</GlassButton>
          </DemoBox>

          <DemoBox
            description="3D depth effect with realistic press animation"
            buttonId="btn3d"
            code={codeExamples.btn3d}
            buttonType="btn3d"
          >
            <Button3D>3D Button</Button3D>
          </DemoBox>

          <DemoBox
            description="Liquid effect button with flowing wave animation"
            buttonId="liquid"
            code={codeExamples.liquid}
            buttonType="liquid"
          >
            <LiquidButton>Liquid Button</LiquidButton>
          </DemoBox>
        </div>
      </div>

      <div className="usage-section">
        <h2>📖 How to Use</h2>
        <div className="usage-grid">
          <div className="usage-card">
            <h3>1. Copy CSS</h3>
            <p>Click "Show Code" on any button to see the CSS styles</p>
          </div>
          <div className="usage-card">
            <h3>2. Add to Project</h3>
            <p>Copy the CSS classes to your stylesheet</p>
          </div>
          <div className="usage-card">
            <h3>3. Use in JSX</h3>
            <p>Apply the class names to your button elements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;

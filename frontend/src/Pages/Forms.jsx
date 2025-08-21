// src/Pages/Forms.jsx
import React, { useState } from "react";
import "./Forms.css";

// Form Components
const BasicForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form className="form form-basic" onSubmit={handleSubmit}>
      <div className="form-content">
        <h3 className="form-title">Basic Form</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="form-textarea"
            rows="3"
          />
        </div>
        <button type="submit" className="form-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

const GradientForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="form form-gradient">
      <div className="form-content">
        <h3 className="form-title">Gradient Form</h3>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="form-input"
          />
        </div>
        <button type="submit" className="form-btn">
          Sign In
        </button>
      </div>
    </form>
  );
};

const OutlineForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="form form-outline">
      <div className="form-content">
        <h3 className="form-title">Outline Form</h3>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://example.com"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your company"
            className="form-textarea"
            rows="3"
          />
        </div>
        <button type="submit" className="form-btn">
          Register
        </button>
      </div>
    </form>
  );
};

const GlassForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="form form-glass">
      <div className="form-content">
        <h3 className="form-title">Glass Form</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="form-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="form-input"
          />
        </div>
        <button type="submit" className="form-btn">
          Contact Me
        </button>
      </div>
    </form>
  );
};

const AnimatedForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "medium",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="form form-animated">
      <div className="form-content">
        <h3 className="form-title">Animated Form</h3>
        <div className="form-group">
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select category</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
        <div className="form-group">
          <label>Priority</label>
          <div className="radio-group">
            {["low", "medium", "high"].map((priority) => (
              <label key={priority} className="radio-label">
                <input
                  type="radio"
                  name="priority"
                  value={priority}
                  checked={formData.priority === priority}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span className="radio-custom"></span>
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="form-btn">
          Create Task
        </button>
      </div>
    </form>
  );
};

const LoadingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Subscription submitted:", formData);
    }, 2000);
  };

  return (
    <form
      className={`form form-loading ${isLoading ? "loading" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="form-content">
        <h3 className="form-title">Loading Form</h3>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="form-input"
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="checkbox-input"
              disabled={isLoading}
            />
            <span className="checkbox-custom"></span>
            Subscribe to newsletter
          </label>
        </div>
        <button type="submit" className="form-btn" disabled={isLoading}>
          {isLoading && <div className="spinner"></div>}
          <span>{isLoading ? "Subscribing..." : "Subscribe"}</span>
        </button>
      </div>
    </form>
  );
};

// Code Block Component
const CodeBlock = ({ code, cardId }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="code-block-container">
      <div className="code-header">
        <span className="code-title">Code Example</span>
        <button
          className={`copy-btn ${copied ? "copied" : ""}`}
          onClick={() => copyToClipboard(code)}
        >
          {copied ? "✓ Copied!" : "📋 Copy"}
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
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="demo-box">
      <div className="demo-content">{children}</div>
      <p className="demo-description">{description}</p>

      {code && (
        <button
          className={`code-toggle-btn ${showCode ? "active" : ""}`}
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "🙈 Hide Code" : "👁️ Show Code"}
        </button>
      )}

      {showCode && code && <CodeBlock code={code} cardId={cardId} />}
    </div>
  );
};

// Code Examples
const codeExamples = {
  basic: `/* Basic Form */
.form-basic {
  background: #FFFFFF;
  color: #111827;
  border: 1px solid #E5E7EB;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.form-basic:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.1);
  border-color: rgba(37, 99, 235, 0.2);
}`,

  gradient: `/* Gradient Form */
.form-gradient {
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
  color: #FFFFFF;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.2);
}
.form-gradient:hover {
  transform: translateY(-6px) rotateY(3deg);
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.3);
}`,

  outline: `/* Outline Form */
.form-outline {
  background: #FFFFFF;
  color: #2563EB;
  border: 2px solid #2563EB;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.form-outline:hover {
  background: rgba(37, 99, 235, 0.02);
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.15);
}`,

  glass: `/* Glass Form */
.form-glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  color: #111827;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
.form-glass:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-8px) rotateX(3deg);
}`,

  animated: `/* Animated Form */
.form-animated {
  background: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%);
  color: #111827;
  position: relative;
  overflow: hidden;
}
.form-animated::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent);
  transition: left 0.5s;
}
.form-animated:hover::after {
  left: 100%;
}`,

  loading: `/* Loading Form */
.form-loading .spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
};

// Main Forms Component
const Forms = () => {
  return (
    <div className="forms-page">
      <div className="page-header">
        <h1>📝 Form Components</h1>
        <p>Beautiful, interactive forms with modern styling and validation</p>
        <div className="stats">
          <span className="stat">6+ Form Types</span>
          <span className="stat">Pure CSS</span>
          <span className="stat">Copy-Paste Ready</span>
        </div>
      </div>

      <div className="components-section">
        <h2>📋 Basic Forms</h2>
        <div className="components-grid">
          <DemoBox
            description="Standard form with clean white background and blue accents"
            cardId="basic"
            code={codeExamples.basic}
          >
            <BasicForm />
          </DemoBox>

          <DemoBox
            description="Gradient form with modern blue theme design"
            cardId="gradient"
            code={codeExamples.gradient}
          >
            <GradientForm />
          </DemoBox>

          <DemoBox
            description="Outline form with transparent background and blue borders"
            cardId="outline"
            code={codeExamples.outline}
          >
            <OutlineForm />
          </DemoBox>
        </div>

        <h2>✨ Special Effects</h2>
        <div className="components-grid">
          <DemoBox
            description="Glassmorphism effect with backdrop blur and transparency"
            cardId="glass"
            code={codeExamples.glass}
          >
            <GlassForm />
          </DemoBox>

          <DemoBox
            description="Animated form with shimmering light sweep effect"
            cardId="animated"
            code={codeExamples.animated}
          >
            <AnimatedForm />
          </DemoBox>

          <DemoBox
            description="Loading form with spinner animation and disabled states"
            cardId="loading"
            code={codeExamples.loading}
          >
            <LoadingForm />
          </DemoBox>
        </div>
      </div>

      <div className="usage-section">
        <h2>📖 How to Use</h2>
        <div className="usage-grid">
          <div className="usage-card">
            <h3>1. Copy CSS</h3>
            <p>Click "Show Code" on any form to see the CSS styles</p>
          </div>
          <div className="usage-card">
            <h3>2. Add to Project</h3>
            <p>Copy the CSS classes to your stylesheet</p>
          </div>
          <div className="usage-card">
            <h3>3. Use in JSX</h3>
            <p>Apply the class names to your form elements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;

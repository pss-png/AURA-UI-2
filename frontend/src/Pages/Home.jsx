import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

export default function Home() {
  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Aura UI</h1>
            <p>
              Build beautiful, responsive React applications with our
              comprehensive component library. Design faster, code smarter, and
              create amazing user experiences.
            </p>
            <div className="cta-buttons">
              <Link to="/docs" className="btn-primary">
                Get Started
              </Link>
              <Link to="/docs" className="btn-secondary">
                View Components
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Aura UI?</h2>
          <p className="section-subtitle">
            Everything you need to build modern React applications with
            confidence and speed.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>
                Optimized components built for performance. Tree-shakable
                imports and minimal bundle size ensure your apps load quickly.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>
                Professional, modern components that follow Material Design
                principles. Consistent styling across all elements.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Fully Responsive</h3>
              <p>
                Every component works perfectly on desktop, tablet, and mobile.
                Built with mobile-first responsive design.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3>Developer Friendly</h3>
              <p>
                Comprehensive documentation, TypeScript support, and intuitive
                APIs make development a joy.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Highly Customizable</h3>
              <p>
                Theme your components with CSS variables, custom styling, and
                flexible configuration options.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">♿</div>
              <h3>Accessible</h3>
              <p>
                Built with accessibility in mind. ARIA labels, keyboard
                navigation, and screen reader support included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Trusted by Developers</h2>
          <p className="section-subtitle">
            Join thousands of developers who are building amazing applications
            with Aura UI.
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <h4>50+</h4>
              <p>Components</p>
            </div>
            <div className="stat-item">
              <h4>10K+</h4>
              <p>Downloads</p>
            </div>
            <div className="stat-item">
              <h4>500+</h4>
              <p>Projects</p>
            </div>
            <div className="stat-item">
              <h4>99%</h4>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Get Started in Minutes</h2>
          <p className="section-subtitle">
            Install Aura UI and start building beautiful applications right
            away.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">1</div>
              <h3>Install</h3>
              <p>
                <code
                  style={{
                    background: "#f5f5f5",
                    padding: "4px 8px",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  npm install Aura UI
                </code>
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">2</div>
              <h3>Import</h3>
              <p>
                Import the components you need and start using them in your
                React application.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">3</div>
              <h3>Build</h3>
              <p>
                Create beautiful, responsive user interfaces with our
                comprehensive component library.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link
              to="/docs"
              className="btn-primary"
              style={{ marginRight: "16px" }}
            >
              Read Documentation
            </Link>
            <Link to="/aboutUs" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

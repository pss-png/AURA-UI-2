import React, { useState } from "react";
import "./Docs.css";

export default function Docs() {
  const [activeSection, setActiveSection] = useState("getting-started");

  const sections = [
    { id: "getting-started", title: "Getting Started", icon: "🚀" },
    { id: "installation", title: "Installation", icon: "⚡" },
    { id: "buttons", title: "Buttons", icon: "🔘" },
    { id: "cards", title: "Cards", icon: "📄" },
    { id: "customization", title: "Customization", icon: "🎨" },
    { id: "examples", title: "Examples", icon: "💡" },
    { id: "api", title: "API Reference", icon: "📚" },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="docs-container">
      {/* Table of Contents */}
     
      {/* Main Content */}
      <div className="docs-content">
        {/* Header */}
        <div className="docs-header">
          <h1>Aura UI Documentation</h1>
          <p>Beautiful, modern React components for your next project</p>
          <div className="docs-version">
            <span className="version-badge">v1.0.0</span>
            <span className="status-badge">Stable</span>
          </div>
        </div>

        {/* Getting Started Section */}
        <section id="getting-started" className="docs-section">
          <div className="section-header">
            <h2>🚀 Getting Started</h2>
            <div className="section-divider"></div>
          </div>
          <p>
            Aura UI is a modern React component library designed to help you
            build beautiful user interfaces quickly and efficiently. Our
            components are built with performance, accessibility, and
            customization in mind.
          </p>

          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h4>Fast & Lightweight</h4>
              <p>Optimized for performance with minimal bundle size</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h4>Highly Customizable</h4>
              <p>Easy theming and styling options</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">♿</div>
              <h4>Accessible</h4>
              <p>Built with accessibility best practices</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h4>Responsive</h4>
              <p>Mobile-first design approach</p>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="installation" className="docs-section">
          <div className="section-header">
            <h2>⚡ Installation</h2>
            <div className="section-divider"></div>
          </div>

          <h3>Clone Repository</h3>
          <div className="code-block">
            <div className="code-header">
              <span>Terminal</span>
              <button className="copy-btn">Copy</button>
            </div>
            <pre>
              <code>
                git clone https://github.com/your-username/reactify-ui.git
              </code>
            </pre>
          </div>

          <h3>Install Dependencies</h3>
          <div className="code-block">
            <div className="code-header">
              <span>Terminal</span>
              <button className="copy-btn">Copy</button>
            </div>
            <pre>
              <code>cd reactify-ui && npm install</code>
            </pre>
          </div>

          <h3>Import Components</h3>
          <div className="code-block">
            <div className="code-header">
              <span>JavaScript</span>
              <button className="copy-btn">Copy</button>
            </div>
            <pre>
              <code>{`import Button from './Components/Button';
import Card from './Components/Card';
import './App.css';`}</code>
            </pre>
          </div>
        </section>

        {/* Buttons Section */}
        <section id="buttons" className="docs-section">
          <div className="section-header">
            <h2>🔘 Buttons</h2>
            <div className="section-divider"></div>
          </div>

          <p>Versatile button components with multiple variants and sizes.</p>

          <h3>Basic Usage</h3>
          <div className="component-preview">
            <div className="preview-area">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
            </div>
            <div className="code-block">
              <div className="code-header">
                <span>JSX</span>
                <button className="copy-btn">Copy</button>
              </div>
              <pre>
                <code>{`import React from 'react';
import './Button.css';

function Button({ children, variant = 'primary', size = 'medium', ...props }) {
  return (
    <button 
      className={\`btn-\${variant} btn-\${size}\`} 
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;`}</code>
              </pre>
            </div>
          </div>

          <h3>Button Props</h3>
          <div className="props-table">
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>variant</code>
                  </td>
                  <td>string</td>
                  <td>'primary'</td>
                  <td>Button style variant</td>
                </tr>
                <tr>
                  <td>
                    <code>size</code>
                  </td>
                  <td>string</td>
                  <td>'medium'</td>
                  <td>Button size (small, medium, large)</td>
                </tr>
                <tr>
                  <td>
                    <code>disabled</code>
                  </td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Disable button interaction</td>
                </tr>
                <tr>
                  <td>
                    <code>loading</code>
                  </td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Show loading state</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cards Section */}
        <section id="cards" className="docs-section">
          <div className="section-header">
            <h2>📄 Cards</h2>
            <div className="section-divider"></div>
          </div>

          <p>
            Flexible card components for displaying content in a structured way.
          </p>

          <h3>Basic Usage</h3>
          <div className="component-preview">
            <div className="preview-area">
              <div className="sample-card">
                <div className="card-header">Card Title</div>
                <div className="card-content">
                  <p>This is a sample card component with some content.</p>
                </div>
                <div className="card-footer">
                  <button className="btn-primary">Action</button>
                </div>
              </div>
            </div>
            <div className="code-block">
              <div className="code-header">
                <span>JSX</span>
                <button className="copy-btn">Copy</button>
              </div>
              <pre>
                <code>{`import React from 'react';
import './Card.css';

function Card({ children, elevation = 1, hoverable = false, ...props }) {
  return (
    <div 
      className={\`card elevation-\${elevation} \${hoverable ? 'hoverable' : ''}\`}
      {...props}
    >
      {children}
    </div>
  );
}

Card.Header = ({ children }) => (
  <div className="card-header">{children}</div>
);

Card.Content = ({ children }) => (
  <div className="card-content">{children}</div>
);

Card.Footer = ({ children }) => (
  <div className="card-footer">{children}</div>
);

export default Card;`}</code>
              </pre>
            </div>
          </div>

          <h3>Card Props</h3>
          <div className="props-table">
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>elevation</code>
                  </td>
                  <td>number</td>
                  <td>1</td>
                  <td>Card shadow elevation (0-5)</td>
                </tr>
                <tr>
                  <td>
                    <code>hoverable</code>
                  </td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Add hover effects</td>
                </tr>
                <tr>
                  <td>
                    <code>padding</code>
                  </td>
                  <td>string</td>
                  <td>'medium'</td>
                  <td>Card padding size</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Customization Section */}
        <section id="customization" className="docs-section">
          <div className="section-header">
            <h2>🎨 Customization</h2>
            <div className="section-divider"></div>
          </div>

          <p>
            Customize the appearance of components using CSS variables and
            themes.
          </p>

          <h3>CSS Variables</h3>
          <div className="code-block">
            <div className="code-header">
              <span>CSS</span>
              <button className="copy-btn">Copy</button>
            </div>
            <pre>
              <code>{`:root {
  --primary-color: #2563EB;
  --secondary-color: #9333EA;
  --text-color: #111827;
  --background-color: #FFFFFF;
  --border-radius: 8px;
  --shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
}`}</code>
            </pre>
          </div>

          <h3>Theme Override</h3>
          <div className="code-block">
            <div className="code-header">
              <span>CSS</span>
              <button className="copy-btn">Copy</button>
            </div>
            <pre>
              <code>{`.custom-theme {
  --primary-color: #FF6B6B;
  --secondary-color: #4ECDC4;
}

.custom-theme .btn-primary {
  background: var(--primary-color);
}`}</code>
            </pre>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="docs-section">
          <div className="section-header">
            <h2>💡 Examples</h2>
            <div className="section-divider"></div>
          </div>

          <h3>Login Form</h3>
          <div className="code-block">
            <div className="code-header">
              <span>JSX</span>
              <button className="copy-btn">Copy</button>
            </div>
            <pre>
              <code>{`import React, { useState } from 'react';
import Button from '../Components/Button';
import Card from '../Components/Card';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card>
      <Card.Header>
        <h2>Login</h2>
      </Card.Header>
      <Card.Content>
        <input 
          placeholder="Email" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          placeholder="Password" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Card.Content>
      <Card.Footer>
        <Button variant="primary">
          Sign In
        </Button>
      </Card.Footer>
    </Card>
  );
}`}</code>
            </pre>
          </div>

          <h3>Dashboard Grid</h3>
          <div className="code-block">
            <div className="code-header">
              <span>JSX</span>
              <button className="copy-btn">Copy</button>
            </div>
            <pre>
              <code>{`import React from 'react';
import Card from '../Components/Card';

function Dashboard() {
  return (
    <div className="dashboard-grid">
      <Card>
        <Card.Content>
          <h3>Total Users</h3>
          <p className="stat-number">1,234</p>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <h3>Revenue</h3>
          <p className="stat-number">$12,345</p>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <h3>Growth</h3>
          <p className="stat-number">+15%</p>
        </Card.Content>
      </Card>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </section>

        {/* API Reference Section */}
        <section id="api" className="docs-section">
          <div className="section-header">
            <h2>📚 API Reference</h2>
            <div className="section-divider"></div>
          </div>

          <h3>Component List</h3>
          <div className="api-grid">
            <div className="api-item">
              <h4>Button</h4>
              <p>Interactive button component with multiple variants</p>
              <span className="api-status">Stable</span>
            </div>
            <div className="api-item">
              <h4>Card</h4>
              <p>Container component for grouping related content</p>
              <span className="api-status">Stable</span>
            </div>
            <div className="api-item">
              <h4>Input</h4>
              <p>Form input component with validation support</p>
              <span className="api-status coming-soon">Coming Soon</span>
            </div>
            <div className="api-item">
              <h4>Modal</h4>
              <p>Overlay component for displaying content above the page</p>
              <span className="api-status coming-soon">Coming Soon</span>
            </div>
          </div>

          <div className="support-section">
            <h3>Need Help?</h3>
            <p>
              If you need additional support or have questions about Reactify
              UI:
            </p>
            <ul>
              <li>📧 Email us at: support@reactify-ui.com</li>
              <li>💬 Join our Discord community</li>
              <li>🐛 Report issues on GitHub</li>
              <li>📖 Check out our blog for tutorials</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

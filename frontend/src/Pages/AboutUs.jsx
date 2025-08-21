import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  const values = [
    {
      title: "Code Excellence",
      description:
        "We believe in writing clean, maintainable, and efficient code that stands the test of time.",
      iconClass: "code",
      icon: "💻",
    },
    {
      title: "Performance First",
      description:
        "Lightning-fast applications that provide seamless user experiences across all devices.",
      iconClass: "performance",
      icon: "⚡",
    },
    {
      title: "Community Driven",
      description:
        "Built by developers, for developers. We listen to our community and evolve together.",
      iconClass: "community",
      icon: "👥",
    },
    {
      title: "Innovation Focus",
      description:
        "Every line of code is written with passion and dedication to make development easier.",
      iconClass: "innovation",
      icon: "💡",
    },
  ];

  const teamMembers = [
    {
      name: "Prabhanjan Singh Sikarwar",
      role: "Founder & Lead Developer",
      bio: "Passionate full-stack developer with expertise in React and modern web technologies.",
      initial: "P",
    },
    {
      name: "Team Member 2",
      role: "UI/UX Designer",
      bio: "Creative designer focused on creating intuitive and beautiful user experiences.",
      initial: "T",
    },
    {
      name: "Team Member 3",
      role: "Backend Developer",
      bio: "Expert in building scalable and robust backend systems and APIs.",
      initial: "D",
    },
  ];

  return (
    <div className="about-page">
      <div className="page-header">
        <h1 className="page-title">About Aura UI</h1>
        <p className="page-subtitle">
          Revolutionizing web development by making React components more
          accessible, powerful, and delightful to work with. Born from the
          passion of creating better development experiences.
        </p>
        <div className="stats">
          <div className="stat">50K+ Downloads</div>
          <div className="stat">5K+ GitHub Stars</div>
          <div className="stat">100+ Components</div>
          <div className="stat">24/7 Support</div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Our Story</h2>
        <div className="content-grid">
          <div className="content-box story-beginning">
            <h3 className="value-title">The Beginning</h3>
            <p className="value-description">
              It all started with a simple idea - what if React development
              could be faster, more efficient, and more enjoyable? From
              late-night coding sessions to building a comprehensive component
              library, Reactify was born.
            </p>
          </div>
          <div className="content-box story-mission">
            <h3 className="value-title">Our Mission</h3>
            <p className="value-description">
              We're on a mission to empower developers worldwide with tools that
              make React development smoother, faster, and more productive.
              Every component is crafted with care and attention to detail.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Our Values</h2>
        <div className="content-grid">
          {values.map((value, index) => (
            <div key={index} className="content-box">
              <div className={`value-icon ${value.iconClass}`}>
                {value.icon}
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="content-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="content-box team-member">
              <div className="member-image">{member.initial}</div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h2 className="cta-title">Ready to Transform Your Development?</h2>
        <p className="cta-description">
          Join thousands of developers who have already discovered the power of
          Aura UI. Start building better React applications today with our
          comprehensive component library.
        </p>
        <div className="button-group">
          <button className="primary-btn">Get Started Free</button>
          <button className="secondary-btn">View Documentation</button>
        </div>
      </div>
    </div>
  );
}

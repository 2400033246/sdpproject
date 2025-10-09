import React from 'react';

const services = [
  { icon: '🧠', title: 'Online Therapy', description: 'Connect with certified therapists from your home.' },
  { icon: '🧘', title: 'Mindfulness Guides', description: 'Access guided meditations and exercises to calm your mind.' },
  { icon: '💬', title: 'Support Groups', description: 'Join anonymous groups and share your journey with peers.' },
  { icon: '📝', title: 'Self-Assessments', description: 'Take confidential quizzes to understand your mental state.' },
];

// Notice the { onLogout } prop for the logout button
function HomePage({ onLogout }) {
  return (
    <div className="homepage">
      <header className="navbar">
        <div className="logo">MindWell Connect</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Articles</a>
          {/* This button will now log the user out */}
          <button onClick={onLogout} className="logout-button">Logout</button>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <h1>Your Journey to a Healthier Mind</h1>
          <p>Explore our resources and find the support you need, whenever you need it.</p>
        </section>

        <section className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 MindWell Connect. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
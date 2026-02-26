import './App.css'

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">LandingPage</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="nav-cta">Get Started</button>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-badge">Welcome to the Future</div>
          <h1>
            Build Something <span>Amazing</span> Today
          </h1>
          <p>
            A modern platform that helps you create, innovate, and grow.
            Everything you need to bring your ideas to life, all in one place.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started Free</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Powerful features designed to help you succeed</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#9889;</div>
            <h3>Lightning Fast</h3>
            <p>
              Optimized for speed and performance. Get results in milliseconds,
              not seconds.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#128274;</div>
            <h3>Secure by Default</h3>
            <p>
              Enterprise-grade security built in from day one. Your data is
              always protected.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#128640;</div>
            <h3>Easy to Scale</h3>
            <p>
              Start small and grow without limits. Our infrastructure scales
              with you.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#127912;</div>
            <h3>Beautiful Design</h3>
            <p>
              Stunning UI components and templates that make your product
              stand out.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#129302;</div>
            <h3>AI Powered</h3>
            <p>
              Smart automation and intelligent features that save you time
              and effort.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#128640;</div>
            <h3>24/7 Support</h3>
            <p>
              Our team is always here to help. Get support whenever you
              need it.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-image">&#128187;</div>
          <div className="about-text">
            <h2>About Our Platform</h2>
            <p>
              We are a team of passionate developers and designers who
              believe in creating tools that empower people to build
              amazing things.
            </p>
            <p>
              Our mission is to make technology accessible to everyone,
              regardless of their technical background.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>10K+</h3>
                <p>Active Users</p>
              </div>
              <div className="stat">
                <h3>99.9%</h3>
                <p>Uptime</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="contact">
        <div className="cta-box">
          <h2>Ready to Get Started?</h2>
          <p>
            Join thousands of users who are already building the future
            with our platform.
          </p>
          <button className="btn-white">Start for Free</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">LandingPage</div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <p>&copy; 2026 LandingPage. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App

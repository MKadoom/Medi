import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';

export default function Index() {
  return (
    <div className="home-container">
      <header>
        <h1>Health Diagnostics Platform</h1>
        <nav>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <h2>AI-Powered Health Analysis</h2>
          <Link to="/diagnosis" className="cta-btn">Start Diagnosis</Link>
        </section>
        
        <section className="features">
          <div className="feature-card">
            <h3>Instant Results</h3>
            <p>Get real-time health assessments using advanced AI algorithms</p>
          </div>
          <div className="feature-card">
            <h3>Medical History</h3>
            <p>Track and review your past diagnoses anytime</p>
          </div>
        </section>
      </main>
    </div>
  );
}

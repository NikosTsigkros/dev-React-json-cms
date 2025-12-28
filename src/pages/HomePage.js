import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      <h1>JSON Schema UI Prototype</h1>
      <p>This demonstrates how UI can be generated from JSON schema configurations.</p>
      
      <div className="card">
        <h2>Navigation</h2>
        <nav style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/users" style={{ padding: '10px 20px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
            Users Page
          </Link>
          <Link to="/products" style={{ padding: '10px 20px', background: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
            Products Page
          </Link>
        </nav>
      </div>

      <div className="card">
        <h2>About This System</h2>
        <p>
          This prototype demonstrates a declarative UI generation system where pages are defined
          through JSON/JavaScript configuration rather than writing React components for each page.
        </p>
        <p>
          Each module (Users, Products) defines its structure, fields, controls, and behavior
          through configuration, and the system automatically generates the UI.
        </p>
      </div>
    </div>
  );
}

export default HomePage;


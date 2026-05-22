import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>🚀</div>
        <h1 style={styles.title}>¡Despliegue Exitoso!</h1>
        <p style={styles.subtitle}>
          El pipeline de CI/CD está funcionando a la perfección. Cada cambio en la rama <strong>main</strong> se construye y se sube automáticamente a Amazon S3.
        </p>
        
        <div style={styles.divider}></div>
        
        <p style={styles.techText}>Tecnologías utilizadas en este laboratorio:</p>
        <div style={styles.badgeContainer}>
          <span style={styles.badge}>⚛️ React</span>
          <span style={styles.badge}>🐙 GitHub Actions</span>
          <span style={styles.badge}>☁️ AWS S3</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', // Fondo azul moderno
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '40px 30px',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
    textAlign: 'center',
    maxWidth: '550px',
    width: '100%',
  },
  icon: {
    fontSize: '70px',
    marginBottom: '10px',
    animation: 'bounce 2s infinite',
  },
  title: {
    color: '#2d3748',
    margin: '0 0 15px 0',
    fontSize: '32px',
    fontWeight: '800',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    color: '#4a5568',
    lineHeight: '1.6',
    fontSize: '18px',
    margin: '0 0 20px 0',
  },
  divider: {
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #e2e8f0, transparent)',
    margin: '25px 0',
  },
  techText: {
    color: '#718096',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '15px',
    fontWeight: '600',
  },
  badgeContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  badge: {
    background: '#edf2f7',
    color: '#2d3748',
    padding: '8px 16px',
    borderRadius: '30px',
    fontSize: '15px',
    fontWeight: '600',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  }
};

export default App;
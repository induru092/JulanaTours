import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const styles = {
  main: {
    minHeight: '70vh',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '1rem',
    borderRadius: 24,
    marginBottom: '2rem',
  },
  heroBackground: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/header.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(1px)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    minHeight: '70vh',
    padding: '4rem 2rem',
    maxWidth: 1200,
    margin: '0 auto',
  },
  heroText: {
    color: 'white',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: '1.5rem',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  },
  gradientText: {
    background: 'linear-gradient(45deg, #ffd700, #ff6b6b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'shimmer 3s ease-in-out infinite',
  },
  heroDescription: {
    fontSize: '1.25rem',
    lineHeight: 1.6,
    marginBottom: '2rem',
    opacity: 0.95,
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
  },
  
  heroStats: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '2.5rem',
    flexWrap: 'wrap',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'transform 0.3s ease',
    minWidth: '120px',
  },
  statNumber: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#ffd700',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
  },
  statLabel: {
    fontSize: '0.9rem',
    opacity: 0.9,
    marginTop: '0.25rem',
    textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)',
  },
  heroActions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  btnPrimaryModern: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: 50,
    fontWeight: 600,
    fontSize: '1.1rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 25px rgba(255, 107, 107, 0.4)',
    border: 'none',
    cursor: 'pointer',
  },
  btnSecondaryModern: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    borderRadius: 50,
    fontWeight: 600,
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  heroImage: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingCard: {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    maxWidth: 280,
  },
  card1: {
    top: '10%',
    right: '20%',
  },
  card2: {
    top: '45%',
    right: '5%',
  },
  card3: {
    bottom: '15%',
    right: '25%',
  },
  cardIcon: {
    fontSize: '2rem',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    borderRadius: 12,
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitle: {
    fontWeight: 700,
    color: '#2d3748',
    fontSize: '1.1rem',
  },
  cardSubtitle: {
    color: '#718096',
    fontSize: '0.9rem',
    marginTop: '0.25rem',
  },
};

export const Header = () => {
  return (
    <main style={styles.main}>
      <div style={styles.heroBackground}>
        <style>
          {`
            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            @keyframes shimmer {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.8; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              25% { transform: translateY(-10px) rotate(1deg); }
              50% { transform: translateY(-5px) rotate(0deg); }
              75% { transform: translateY(-15px) rotate(-1deg); }
            }
            
            /* Hover effects */
            .btn-primary-hover:hover {
              transform: translateY(-2px);
              box-shadow: 0 12px 35px rgba(255, 107, 107, 0.5);
            }
            
            .btn-secondary-hover:hover {
              background: rgba(255, 255, 255, 0.25);
              transform: translateY(-2px);
            }
            
            .stat-item-hover:hover {
              transform: translateY(-5px);
              background: rgba(255, 255, 255, 0.2);
            }
            
            @media (max-width: 768px) {
              .hero-content {
                grid-template-columns: 1fr !important;
                gap: 2rem !important;
                padding: 2rem 1rem !important;
              }
              .floating-card {
                display: none !important;
              }
              .hero-stats {
                justify-content: center !important;
              }
              .hero-actions {
                justify-content: center !important;
              }
            }
            
            @media (max-width: 480px) {
              .btn-primary-modern, .btn-secondary-modern {
                padding: 0.8rem 1.5rem !important;
                font-size: 1rem !important;
              }
            }
          `}
        </style>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent} className="hero-content">
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Find Your Perfect
              <span style={styles.gradientText}> Tour</span>
            </h1>
            <p style={styles.heroDescription}>
              Discover premium vehicles for every journey. From luxury vehicles, 
              we've got the perfect vehicle waiting for you.
            </p>
            <div style={styles.heroStats} className="hero-stats">
              <div 
                style={styles.statItem} 
                className="stat-item-hover"
              >
                <span style={styles.statNumber}>500+</span>
                <span style={styles.statLabel}>Vehicles</span>
              </div>
              <div 
                style={styles.statItem} 
                className="stat-item-hover"
              >
                <span style={styles.statNumber}>24/7</span>
                <span style={styles.statLabel}>Support</span>
              </div>
              <div 
                style={styles.statItem} 
                className="stat-item-hover"
              >
                <span style={styles.statNumber}>50+</span>
                <span style={styles.statLabel}>Locations</span>
              </div>
            </div>
            <div style={styles.heroActions} className="hero-actions">
              <Link 
                to="/explore" 
                style={styles.btnPrimaryModern}
                className="btn-primary-hover btn-primary-modern"
              >
                <span>Explore Vehicles</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link 
                to="/booking-vehicle" 
                style={styles.btnSecondaryModern}
                className="btn-secondary-hover btn-secondary-modern"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7"/>
                  <polygon points="1 5 1 19 15 12 1 5"/>
                </svg>
                <span>Book Your Vehicle!</span>
              </Link>
            </div>
          </div>
          <div style={styles.heroImage}>
            <div 
              style={{...styles.floatingCard, ...styles.card1, animation: 'float 6s ease-in-out infinite'}}
              className="floating-card"
            >
              <div style={styles.cardIcon}>🚗</div>
              <div>
                <div style={styles.cardTitle}>Premium Cars</div>
                <div style={styles.cardSubtitle}>Starting from Rs.2000/day</div>
              </div>
            </div>
            <div 
              style={{...styles.floatingCard, ...styles.card2, animation: 'float 6s ease-in-out infinite 2s'}}
              className="floating-card"
            >
              <div style={styles.cardIcon}>🚐</div>
              <div>
                <div style={styles.cardTitle}>Spacious Vans</div>
                <div style={styles.cardSubtitle}>Perfect for groups</div>
              </div>
            </div>
            <div 
              style={{...styles.floatingCard, ...styles.card3, animation: 'float 6s ease-in-out infinite 4s'}}
              className="floating-card"
            >
              <div style={styles.cardIcon}>🏆</div>
              <div>
                <div style={styles.cardTitle}>Top Rated</div>
                <div style={styles.cardSubtitle}>4.9/5 Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
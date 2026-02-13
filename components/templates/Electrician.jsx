export default function Electrician({ data }) {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header style={{ 
        background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)', 
        color: 'white', 
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 20
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
          <div style={{ 
            width: 50, 
            height: 50, 
            background: 'white', 
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24
          }}>⚡</div>
          <div>
            <h1 style={{ margin: 0, fontSize: 24 }}>{data.business_name}</h1>
            <p style={{ margin: 0, fontSize: 14, opacity: 0.9 }}>Licensed Electricians</p>
          </div>
        </div>
        <a href={`tel:${data.phone}`} style={{ 
          background: '#1e40af',
          color: 'white',
          padding: '12px 24px',
          borderRadius: 5,
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          📞 {data.phone}
        </a>
      </header>

      {/* Hero */}
      <section style={{ 
        background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center'
      }}>
        <p style={{ 
          background: 'rgba(255,255,255,0.2)',
          display: 'inline-block',
          padding: '8px 16px',
          borderRadius: 20,
          fontSize: 14,
          marginBottom: 20
        }}>
          ⚡ Certified Master Electricians
        </p>
        <h2 style={{ fontSize: 48, margin: '0 0 20px', fontWeight: 'bold' }}>
          Safe, Reliable<br/>
          <span style={{ color: '#1e40af' }}>Electrical Services</span>
        </h2>
        <p style={{ fontSize: 20, marginBottom: 40, maxWidth: 800, margin: '0 auto 40px' }}>
          Expert electrical repairs, installations & upgrades in {data.city}, {data.state}. Emergency service available.
        </p>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`tel:${data.phone}`} style={{ 
            background: '#1e40af',
            color: 'white',
            padding: '16px 32px',
            borderRadius: 5,
            textDecoration: 'none',
            fontSize: 18,
            fontWeight: 'bold'
          }}>
            📅 Book Service
          </a>
          <a href={`tel:${data.phone}`} style={{ 
            background: 'transparent',
            color: 'white',
            padding: '16px 32px',
            borderRadius: 5,
            textDecoration: 'none',
            fontSize: 18,
            border: '2px solid white',
            fontWeight: 'bold'
          }}>
            📞 Call {data.phone}
          </a>
        </div>

        {/* Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: 30,
          maxWidth: 1000,
          margin: '60px auto 0',
          padding: '0 20px'
        }}>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#1e40af' }}>18+</div>
            <div style={{ fontSize: 14 }}>Years Licensed</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#1e40af' }}>⭐ 5.0</div>
            <div style={{ fontSize: 14 }}>Average Rating</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#1e40af' }}>✓ Certified</div>
            <div style={{ fontSize: 14 }}>Master Electricians</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#1e40af' }}>🛡️ Insured</div>
            <div style={{ fontSize: 14 }}>Fully Licensed</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '80px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 36, textAlign: 'center', marginBottom: 40 }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30 }}>
          {[
            { icon: '💡', title: 'Lighting Installation', desc: 'Indoor & outdoor lighting solutions' },
            { icon: '🔌', title: 'Outlet & Switch Repair', desc: 'Safe electrical outlet installations' },
            { icon: '⚡', title: 'Panel Upgrades', desc: 'Circuit breaker & electrical panel services' },
            { icon: '🚨', title: 'Emergency Repairs', desc: '24/7 emergency electrical service' },
          ].map((service, i) => (
            <div key={i} style={{ 
              padding: 30, 
              border: '2px solid #f59e0b', 
              borderRadius: 10,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 48, marginBottom: 15 }}>{service.icon}</div>
              <h3 style={{ color: '#d97706', fontSize: 20, marginBottom: 10 }}>{service.title}</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f5f5f5', padding: '60px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, marginBottom: 20 }}>Need an Electrician?</h2>
        <p style={{ fontSize: 20, marginBottom: 30, color: '#666' }}>Licensed professionals ready to help</p>
        <a href={`tel:${data.phone}`} style={{ 
          background: '#f59e0b',
          color: 'white',
          padding: '16px 48px',
          fontSize: 24,
          textDecoration: 'none',
          borderRadius: 5,
          display: 'inline-block',
          fontWeight: 'bold'
        }}>
          📞 {data.phone}
        </a>
      </section>

      {/* Footer */}
      <footer style={{ background: '#d97706', color: 'white', padding: 30, textAlign: 'center' }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} {data.business_name}. Serving {data.city}, {data.state}</p>
      </footer>
    </div>
  );
}

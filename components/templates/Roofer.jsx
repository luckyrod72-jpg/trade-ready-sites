export default function Roofer({ data }) {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header style={{ 
        background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)', 
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
          }}>🏠</div>
          <div>
            <h1 style={{ margin: 0, fontSize: 24 }}>{data.business_name}</h1>
            <p style={{ margin: 0, fontSize: 14, opacity: 0.9 }}>Professional Roofing</p>
          </div>
        </div>
        <a href={`tel:${data.phone}`} style={{ 
          background: '#dc2626',
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
        background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
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
          🏆 Top-Rated Roofing Contractor
        </p>
        <h2 style={{ fontSize: 48, margin: '0 0 20px', fontWeight: 'bold' }}>
          Protect Your Home with<br/>
          <span style={{ color: '#dc2626' }}>Expert Roofing</span>
        </h2>
        <p style={{ fontSize: 20, marginBottom: 40, maxWidth: 800, margin: '0 auto 40px' }}>
          Professional roof repairs, replacements & inspections in {data.city}, {data.state}. Free estimates available.
        </p>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`tel:${data.phone}`} style={{ 
            background: '#dc2626',
            color: 'white',
            padding: '16px 32px',
            borderRadius: 5,
            textDecoration: 'none',
            fontSize: 18,
            fontWeight: 'bold'
          }}>
            📋 Free Estimate
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
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#dc2626' }}>25+</div>
            <div style={{ fontSize: 14 }}>Years in Business</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#dc2626' }}>⭐ 4.9</div>
            <div style={{ fontSize: 14 }}>Customer Rating</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#dc2626' }}>✓ Licensed</div>
            <div style={{ fontSize: 14 }}>& Insured</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#dc2626' }}>🛡️ Warranty</div>
            <div style={{ fontSize: 14 }}>All Work Guaranteed</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '80px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 36, textAlign: 'center', marginBottom: 40 }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30 }}>
          {[
            { icon: '🏠', title: 'Roof Repairs', desc: 'Fast leak repairs and damage restoration' },
            { icon: '🔨', title: 'Roof Replacement', desc: 'Complete roof replacement services' },
            { icon: '🔍', title: 'Roof Inspections', desc: 'Thorough roof condition assessments' },
            { icon: '⚡', title: 'Storm Damage', desc: 'Emergency storm damage repairs' },
          ].map((service, i) => (
            <div key={i} style={{ 
              padding: 30, 
              border: '2px solid #a78bfa', 
              borderRadius: 10,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 48, marginBottom: 15 }}>{service.icon}</div>
              <h3 style={{ color: '#7c3aed', fontSize: 20, marginBottom: 10 }}>{service.title}</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f5f5f5', padding: '60px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, marginBottom: 20 }}>Ready for a New Roof?</h2>
        <p style={{ fontSize: 20, marginBottom: 30, color: '#666' }}>Get your free estimate today</p>
        <a href={`tel:${data.phone}`} style={{ 
          background: '#7c3aed',
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
      <footer style={{ background: '#7c3aed', color: 'white', padding: 30, textAlign: 'center' }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} {data.business_name}. Serving {data.city}, {data.state}</p>
      </footer>
    </div>
  );
}

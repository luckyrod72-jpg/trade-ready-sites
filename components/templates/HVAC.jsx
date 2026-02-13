export default function HVAC({ data }) {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header style={{ 
        background: 'linear-gradient(135deg, #1e7a8c 0%, #2ca0b8 100%)', 
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
          }}>❄️</div>
          <div>
            <h1 style={{ margin: 0, fontSize: 24 }}>{data.business_name}</h1>
            <p style={{ margin: 0, fontSize: 14, opacity: 0.9 }}>HVAC Experts</p>
          </div>
        </div>
        <a href={`tel:${data.phone}`} style={{ 
          background: '#ff8c00',
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
        background: 'linear-gradient(135deg, #1e7a8c 0%, #2ca0b8 100%)',
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
          🏆 Trusted by 10,000+ Homeowners
        </p>
        <h2 style={{ fontSize: 48, margin: '0 0 20px', fontWeight: 'bold' }}>
          Your Comfort is Our<br/>
          <span style={{ color: '#ff8c00' }}>Top Priority</span>
        </h2>
        <p style={{ fontSize: 20, marginBottom: 40, maxWidth: 800, margin: '0 auto 40px' }}>
          Expert HVAC repair, installation & maintenance in {data.city}, {data.state}. 24/7 emergency service available.
        </p>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`tel:${data.phone}`} style={{ 
            background: '#ff8c00',
            color: 'white',
            padding: '16px 32px',
            borderRadius: 5,
            textDecoration: 'none',
            fontSize: 18,
            fontWeight: 'bold'
          }}>
            📅 Schedule Service
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
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#ff8c00' }}>🔧 15+</div>
            <div style={{ fontSize: 14 }}>Years Experience</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#ff8c00' }}>⭐ 4.9</div>
            <div style={{ fontSize: 14 }}>Google Rating</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#ff8c00' }}>✓ NATE</div>
            <div style={{ fontSize: 14 }}>Certified Techs</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#ff8c00' }}>⏰ 24/7</div>
            <div style={{ fontSize: 14 }}>Emergency Service</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '80px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 36, textAlign: 'center', marginBottom: 40 }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30 }}>
          {[
            { icon: '🔥', title: 'Heating Services', desc: 'Furnace repair, installation, and maintenance' },
            { icon: '❄️', title: 'Cooling Services', desc: 'AC repair, installation, and tune-ups' },
            { icon: '💨', title: 'Ventilation', desc: 'Ductwork installation and air quality solutions' },
            { icon: '🚨', title: 'Emergency Service', desc: '24/7 emergency HVAC repair available' },
          ].map((service, i) => (
            <div key={i} style={{ 
              padding: 30, 
              border: '2px solid #1e7a8c', 
              borderRadius: 10,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 48, marginBottom: 15 }}>{service.icon}</div>
              <h3 style={{ color: '#1e7a8c', fontSize: 20, marginBottom: 10 }}>{service.title}</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f5f5f5', padding: '60px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, marginBottom: 20 }}>Get a Free Quote</h2>
        <p style={{ fontSize: 20, marginBottom: 30, color: '#666' }}>Call us today for professional HVAC service</p>
        <a href={`tel:${data.phone}`} style={{ 
          background: '#1e7a8c',
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
      <footer style={{ background: '#1e7a8c', color: 'white', padding: 30, textAlign: 'center' }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} {data.business_name}. Serving {data.city}, {data.state}</p>
      </footer>
    </div>
  );
}

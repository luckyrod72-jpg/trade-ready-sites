export default function HomePage() {
  return (
    <div style={{ 
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
        Trade Ready Sites
      </h1>
      
      <p style={{ fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.6' }}>
        This is the main landing page. Access contractor sites via path:
      </p>
      
      <div style={{ 
        background: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>Example:</p>
        <a 
          href="/rod-test-hvac" 
          style={{ 
            color: '#0070f3', 
            textDecoration: 'none',
            fontSize: '1.1rem'
          }}
        >
          app.tradereadysites.com/rod-test-hvac
        </a>
      </div>

      <div style={{ 
        background: '#e8f4f8', 
        padding: '20px', 
        borderRadius: '8px',
        border: '1px solid #b3d9e8'
      }}>
        <h2 style={{ fontSize: '1.3rem', marginTop: '0', marginBottom: '15px' }}>
          How It Works
        </h2>
        <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
          <li>Each contractor gets a unique path (e.g., <code>/john-hvac</code>)</li>
          <li>The system looks up their business info in the database</li>
          <li>Displays a custom demo website with their branding</li>
          <li>All sites hosted under one domain - no DNS setup needed</li>
        </ul>
      </div>
    </div>
  );
}
'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import HVACTemplate from '@/components/templates/HVAC';
import PlumberTemplate from '@/components/templates/Plumber';
import ElectricianTemplate from '@/components/templates/Electrician';
import RooferTemplate from '@/components/templates/Roofer';

export default function HomePage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [contractor, setContractor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(`/api/contractor?slug=${slug}`)
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            setError(data.error);
          } else {
            setContractor(data);
          }
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!slug || !contractor) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h1 style={{ fontSize: '48px', color: '#333', marginBottom: '20px' }}>Trade Ready Sites</h1>
        <p style={{ fontSize: '20px', color: '#666', marginBottom: '10px' }}>
          Visit a contractor subdomain to see their site
        </p>
        <p style={{ fontSize: '16px', color: '#999' }}>
          Example: rod-test-hvac.tradereadysites.com
        </p>
      </div>
    );
  }

  // Render appropriate template based on trade
  const tradeUpper = contractor.trade?.toUpperCase();
  
  if (tradeUpper === 'HVAC') {
    return <HVACTemplate contractor={contractor} />;
  } else if (tradeUpper === 'PLUMBER' || tradeUpper === 'PLUMBING') {
    return <PlumberTemplate contractor={contractor} />;
  } else if (tradeUpper === 'ELECTRICIAN' || tradeUpper === 'ELECTRICAL') {
    return <ElectricianTemplate contractor={contractor} />;
  } else if (tradeUpper === 'ROOFER' || tradeUpper === 'ROOFING') {
    return <RooferTemplate contractor={contractor} />;
  } else {
    // Default template for unknown trades
    return <HVACTemplate contractor={contractor} />;
  }
}

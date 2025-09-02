import * as React from 'react';

interface WaitlistConfirmationProps {
  siteUrl: string;
}

export const WaitlistConfirmation: React.FC<WaitlistConfirmationProps> = ({
  siteUrl,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h1 style={{ color: '#1d1d1f', fontSize: '28px', marginBottom: '10px' }}>
        🎉 Welcome to the Aiva Waitlist!
      </h1>
      <p style={{ color: '#666', fontSize: '16px' }}>
        You're one step closer to intuitive productivity
      </p>
    </div>

    <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
      <h2 style={{ color: '#1d1d1f', fontSize: '20px', marginBottom: '15px' }}>
        What happens next?
      </h2>
      <ul style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '8px' }}>We'll keep you updated on our progress</li>
        <li style={{ marginBottom: '8px' }}>You'll be among the first to know when Aiva launches</li>
        <li style={{ marginBottom: '8px' }}>Get early access to exclusive features and updates</li>
      </ul>
    </div>

    <div style={{ textAlign: 'center', marginBottom: '25px' }}>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
        In the meantime, follow us for updates:
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a 
          href="https://www.instagram.com/arceusai/" 
          style={{ 
            color: '#007bff', 
            textDecoration: 'none', 
            fontSize: '14px',
            padding: '8px 16px',
            border: '1px solid #007bff',
            borderRadius: '4px'
          }}
        >
          Instagram
        </a>
        <a 
          href="https://www.linkedin.com/company/arceusai/" 
          style={{ 
            color: '#007bff', 
            textDecoration: 'none', 
            fontSize: '14px',
            padding: '8px 16px',
            border: '1px solid #007bff',
            borderRadius: '4px'
          }}
        >
          LinkedIn
        </a>
      </div>
    </div>

    <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
      <p style={{ color: '#999', fontSize: '12px', marginBottom: '5px' }}>
        Questions? Contact us at{' '}
        <a href="mailto:info@arceus.ca" style={{ color: '#007bff', textDecoration: 'none' }}>
          info@arceus.ca
        </a>
      </p>
      <p style={{ color: '#999', fontSize: '12px' }}>
        © 2025 Arceus Inc. All rights reserved.
      </p>
    </div>
  </div>
);

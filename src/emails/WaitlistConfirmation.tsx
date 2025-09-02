import * as React from 'react';

interface WaitlistConfirmationProps {
  siteUrl: string;
}

export const WaitlistConfirmation: React.FC<WaitlistConfirmationProps> = ({
  siteUrl,
}) => (
  <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '40px 20px', backgroundColor: '#ffffff' }}>
    {/* Centered Header with Aiva Logo */}
    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
      <div style={{ 
        width: '80px', 
        height: '80px', 
        borderRadius: '20px', 
        backgroundColor: '#f8f9fa',
        margin: '0 auto 30px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <img 
          src="https://www.arceus.ca/assets/aiva-app-icon.png" 
          alt="Aiva App Icon"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      <h1 style={{ color: '#1d1d1f', fontSize: '36px', marginBottom: '16px', fontWeight: '600', letterSpacing: '-0.02em' }}>
        Welcome to the Aiva Waitlist
      </h1>
      <p style={{ color: '#86868b', fontSize: '18px', lineHeight: '1.4', maxWidth: '400px', margin: '0 auto' }}>
        You&apos;re officially on the list. We&apos;ll email you when early access opens.
      </p>
    </div>

    {/* Centered content section */}
    <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
      {/* What happens next section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#1d1d1f', fontSize: '24px', marginBottom: '20px', fontWeight: '600', letterSpacing: '-0.01em' }}>
          What happens next
        </h2>
        <ul style={{ color: '#515154', fontSize: '16px', lineHeight: '1.6', paddingLeft: '0', margin: '0', listStyle: 'none' }}>
          <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
            <span style={{ 
              position: 'absolute', 
              left: '0', 
              top: '8px', 
              width: '6px', 
              height: '6px', 
              borderRadius: '50%', 
              backgroundColor: '#000000' 
            }}></span>
            We&apos;ll keep you updated on our progress
          </li>
          <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
            <span style={{ 
              position: 'absolute', 
              left: '0', 
              top: '8px', 
              width: '6px', 
              height: '6px', 
              borderRadius: '50%', 
              backgroundColor: '#000000' 
            }}></span>
            You&apos;ll be among the first to know when Aiva launches
          </li>
          <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
            <span style={{ 
              position: 'absolute', 
              left: '0', 
              top: '8px', 
              width: '6px', 
              height: '6px', 
              borderRadius: '50%', 
              backgroundColor: '#000000' 
            }}></span>
            Get early access to exclusive features and updates
          </li>
        </ul>
      </div>

      {/* Divider above contact section */}
      <div style={{ borderTop: '1px solid #e5e7eb', marginBottom: '40px' }}></div>

      {/* Contact info above social icons */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <p style={{ color: '#515154', fontSize: '16px', margin: '0' }}>
          Contact us at{' '}
          <a href="mailto:info@arceus.ca" style={{ color: '#007AFF', textDecoration: 'none', fontWeight: '500' }}>
            info@arceus.ca
          </a>
        </p>
      </div>

      {/* Social Media Icons - Centered */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
          {/* YouTube */}
          <a 
            href="https://www.youtube.com/@ArceusAI" 
            style={{ 
              color: '#FF0000', 
              textDecoration: 'none'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/arceusai/" 
            style={{ 
              color: '#E4405F', 
              textDecoration: 'none'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/company/arceusai/" 
            style={{ 
              color: '#0077B5', 
              textDecoration: 'none'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          {/* Discord */}
          <a 
            href="https://discord.com/channels/1379314631037816852/1379317472817319986" 
            style={{ 
              color: '#5865F2', 
              textDecoration: 'none'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    {/* Light gray bottom section */}
    <div style={{ backgroundColor: '#f8f9fa', marginTop: '60px', padding: '40px 20px', textAlign: 'center' }}>
      <div style={{ 
        width: '40px', 
        height: '40px', 
        borderRadius: '10px', 
        backgroundColor: '#ffffff',
        margin: '0 auto 16px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        overflow: 'hidden'
      }}>
        <img 
          src="https://www.arceus.ca/assets/arceus-logo-glass.png" 
          alt="Arceus Logo"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <p style={{ color: '#86868b', fontSize: '14px', margin: '0' }}>
        © 2025 Arceus Inc. All rights reserved.
      </p>
    </div>
  </div>
);

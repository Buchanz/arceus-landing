"use client";

import { useState } from "react";

export default function EmailSimulator() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Email Simulator</h1>
        
        {/* Toggle for mobile/desktop view */}
        <div className="mb-6 text-center">
          <button
            onClick={() => setIsMobile(!isMobile)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isMobile 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            {isMobile ? '📱 Mobile View' : '💻 Desktop View'}
          </button>
        </div>

        {/* Email Preview */}
        <div className={`bg-white rounded-lg shadow-lg ${
          isMobile ? 'max-w-md mx-auto' : 'max-w-2xl mx-auto'
        }`}>
          <div 
            className={`font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff ${
              isMobile ? '!p-5' : ''
            }`}
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              maxWidth: isMobile ? '100%' : '600px',
              margin: '0 auto',
              padding: isMobile ? '25px 20px' : '40px 20px',
              backgroundColor: '#ffffff'
            }}
          >
            {/* Centered Header with Aiva Logo */}
            <div 
              className={`text-center ${isMobile ? 'mb-8' : 'mb-12'}`}
              style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}
            >
              <div 
                className={`mx-auto mb-8 flex items-center justify-center rounded-2xl bg-gray-100 shadow-lg overflow-hidden ${
                  isMobile ? 'w-16 h-16 mb-5' : 'w-20 h-20 mb-8'
                }`}
                style={{ 
                  width: isMobile ? '60px' : '80px', 
                  height: isMobile ? '60px' : '80px',
                  borderRadius: '20px',
                  backgroundColor: '#f8f9fa',
                  margin: '0 auto',
                  marginBottom: isMobile ? '20px' : '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src="/assets/aiva-app-icon.png" 
                  alt="Aiva App Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h1 
                className={`font-semibold text-gray-900 mb-4 ${
                  isMobile ? 'text-3xl' : 'text-4xl'
                }`}
                style={{ 
                  color: '#1d1d1f', 
                  fontSize: isMobile ? '28px' : '36px', 
                  marginBottom: '16px', 
                  fontWeight: '600', 
                  letterSpacing: '-0.02em' 
                }}
              >
                Welcome to the Aiva Waitlist
              </h1>
              <p 
                className={`text-gray-500 mx-auto ${
                  isMobile ? 'text-base max-w-full' : 'text-lg max-w-md'
                }`}
                style={{ 
                  color: '#86868b', 
                  fontSize: isMobile ? '16px' : '18px', 
                  lineHeight: '1.4', 
                  maxWidth: isMobile ? '100%' : '400px', 
                  margin: '0 auto' 
                }}
              >
                    You&apos;re officially on the list. We&apos;ll email you when early access opens.
              </p>
            </div>

            {/* Centered content section */}
            <div 
              className={`mx-auto text-center ${isMobile ? 'max-w-full' : 'max-w-lg'}`}
              style={{ 
                maxWidth: isMobile ? '100%' : '480px', 
                margin: '0 auto', 
                textAlign: 'center' 
              }}
            >
              {/* What happens next section */}
              <div className={isMobile ? 'mb-8' : 'mb-10'}>
                <h2 
                  className={`font-semibold text-gray-900 mb-5 ${
                    isMobile ? 'text-xl' : 'text-2xl'
                  }`}
                  style={{ 
                    color: '#1d1d1f', 
                    fontSize: isMobile ? '20px' : '24px', 
                    marginBottom: '20px', 
                    fontWeight: '600', 
                    letterSpacing: '-0.01em' 
                  }}
                >
                  What happens next
                </h2>
                <div className="text-left">
                  <ul className="text-gray-600 space-y-4" style={{ color: '#515154', fontSize: '16px', lineHeight: '1.6', paddingLeft: '0', margin: '0', listStyle: 'none' }}>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-black rounded-full"></span>
                        We&apos;ll keep you updated on our progress
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-black rounded-full"></span>
                      You&apos;ll be among the first to know when Aiva launches
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-black rounded-full"></span>
                      Get early access to exclusive features and updates
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Light gray bottom section */}
            <div 
              className={`bg-gray-50 mt-16 text-center ${
                isMobile ? 'p-6' : 'p-10'
              }`}
              style={{ 
                backgroundColor: '#f8f9fa', 
                marginTop: '60px', 
                padding: isMobile ? '30px 15px' : '40px 20px', 
                textAlign: 'center' 
              }}
            >
              {/* Social Links - Above the divider */}
              <div className="text-center mb-8 flex justify-center items-center flex-nowrap w-full">
                <a 
                  href="https://www.youtube.com/@ArceusAI" 
                  className={`text-red-600 hover:text-red-700 transition-colors font-medium ${
                    isMobile ? 'mx-1 text-xs' : 'mx-3 text-base'
                  }`}
                  style={{ color: '#FF0000', textDecoration: 'none' }}
                >
                  YouTube
                </a>
                <span className={`text-gray-300 ${isMobile ? 'mx-0.5' : 'mx-2'}`}>|</span>
                <a 
                  href="https://www.instagram.com/arceusai/" 
                  className={`text-pink-600 hover:text-pink-700 transition-colors font-medium ${
                    isMobile ? 'mx-1 text-xs' : 'mx-3 text-base'
                  }`}
                  style={{ color: '#E4405F', textDecoration: 'none' }}
                >
                  Instagram
                </a>
                <span className={`text-gray-300 ${isMobile ? 'mx-0.5' : 'mx-2'}`}>|</span>
                <a 
                  href="https://www.linkedin.com/company/arceusai/" 
                  className={`text-blue-600 hover:text-blue-700 transition-colors font-medium ${
                    isMobile ? 'mx-1 text-xs' : 'mx-3 text-base'
                  }`}
                  style={{ color: '#0077B5', textDecoration: 'none' }}
                >
                  LinkedIn
                </a>
                <span className={`text-gray-300 ${isMobile ? 'mx-0.5' : 'mx-2'}`}>|</span>
                <a 
                  href="https://discord.com/channels/1379314631037816852/1379317472817319986" 
                  className={`text-indigo-600 hover:text-indigo-700 transition-colors font-medium ${
                    isMobile ? 'mx-1 text-xs' : 'mx-3 text-base'
                  }`}
                  style={{ color: '#5865F2', textDecoration: 'none' }}
                >
                  Discord
                </a>
              </div>

              {/* Divider above contact section */}
              <div className="border-t border-gray-300 mb-8"></div>

              {/* Contact info */}
              <div className="text-center mb-6">
                <p className="text-gray-600" style={{ color: '#515154', fontSize: '16px', margin: '0' }}>
                  Contact us at{' '}
                  <a 
                    href="mailto:info@arceus.ca" 
                    className="text-blue-600 hover:text-blue-700 font-medium"
                    style={{ color: '#007AFF', textDecoration: 'none', fontWeight: '500' }}
                  >
                    info@arceus.ca
                  </a>
                </p>
              </div>

              {/* Arceus Logo - Centered */}
              <div className="flex justify-center items-center mb-4 w-full">
                <div 
                  className="flex items-center justify-center rounded-lg bg-white shadow-sm overflow-hidden"
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '10px', 
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    overflow: 'hidden'
                  }}
                >
                  <img 
                    src="/assets/arceus-logo-glass.png" 
                    alt="Arceus Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-gray-500 text-sm" style={{ color: '#86868b', fontSize: '14px', margin: '0' }}>
                © 2025 Arceus Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

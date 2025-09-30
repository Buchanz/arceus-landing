"use client";

import { useState } from "react";

export default function EmailDesign() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Email Design Preview</h1>
          <p className="text-gray-600 mb-6">This is exactly how your waitlist confirmation email will look</p>
          
          {/* Toggle for mobile/desktop view */}
          <button
            onClick={() => setIsMobile(!isMobile)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              isMobile 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            {isMobile ? '📱 Mobile View' : '💻 Desktop View'}
          </button>
        </div>

        {/* Email Preview Container */}
        <div className="flex justify-center">
          <div className={`bg-white rounded-lg shadow-2xl overflow-hidden ${
            isMobile ? 'max-w-sm' : 'max-w-4xl w-full'
          }`}>
            {/* Email Content */}
            <div 
              className="font-sans"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                maxWidth: isMobile ? '100%' : '100%',
                margin: '0 auto',
                padding: isMobile ? '20px 15px' : '40px 30px',
                backgroundColor: '#ffffff'
              }}
            >
              {/* Centered Header with Aiva Logo */}
              <div 
                className="text-center"
                style={{ 
                  textAlign: 'center', 
                  marginBottom: isMobile ? '30px' : '50px' 
                }}
              >
                <div 
                  className="mx-auto flex items-center justify-center rounded-2xl bg-gray-100 shadow-lg overflow-hidden"
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
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1)',
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
                  className="font-semibold text-gray-900 mb-4"
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
                  className="text-gray-500 mx-auto"
                  style={{ 
                    color: '#86868b', 
                    fontSize: isMobile ? '16px' : '18px', 
                    lineHeight: '1.4', 
                    maxWidth: isMobile ? '100%' : '400px', 
                    margin: '0 auto' 
                  }}
                >
                  You're officially on the list. We'll email you when early access opens.
                </p>
              </div>

              {/* Centered content section */}
              <div 
                className="mx-auto text-center"
                style={{ 
                  maxWidth: isMobile ? '100%' : '600px', 
                  margin: '0 auto', 
                  textAlign: 'center' 
                }}
              >
                {/* What happens next section */}
                <div className={isMobile ? 'mb-8' : 'mb-10'}>
                  <h2 
                    className="font-semibold text-gray-900 mb-5"
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
                        We'll keep you updated on our progress
                      </li>
                      <li className="relative pl-6">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-black rounded-full"></span>
                        You'll be among the first to know when Aiva launches
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
                className="bg-gray-50 mt-16 text-center"
                style={{ 
                  backgroundColor: '#f8f9fa', 
                  marginTop: '60px', 
                  padding: isMobile ? '30px 15px' : '40px 20px', 
                  textAlign: 'center' 
                }}
              >
                {/* Social Icons - Above the divider */}
                <div className={`flex justify-center items-center mb-8 ${
                  isMobile ? 'flex-row gap-4' : 'flex-row gap-6'
                }`}>
                  {/* YouTube */}
                  <a 
                    href="https://www.youtube.com/@ArceusAI" 
                    className="text-red-600 hover:text-red-700 transition-colors p-2"
                    style={{ color: '#FF0000', textDecoration: 'none' }}
                  >
                    <svg width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/arceusai/" 
                    className="text-pink-600 hover:text-pink-700 transition-colors p-2"
                    style={{ color: '#E4405F', textDecoration: 'none' }}
                  >
                    <svg width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/arceusai/" 
                    className="text-blue-600 hover:text-blue-700 transition-colors p-2"
                    style={{ color: '#0077B5', textDecoration: 'none' }}
                  >
                    <svg width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  {/* Discord */}
                  <a 
                    href="https://discord.com/channels/1379314631037816852/1379317472817319986" 
                    className="text-indigo-600 hover:text-indigo-700 transition-colors p-2"
                    style={{ color: '#5865F2', textDecoration: 'none' }}
                  >
                    <svg width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                    </svg>
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
                <div className="flex justify-center mb-4">
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

        {/* Instructions */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            This is exactly how your waitlist confirmation email will look to users.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Back to Landing Page
            </a>
            <a 
              href="/email-simulator" 
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              View Simulator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import NavBar from "../../components/NavBar";
import BottomCTA from "../../components/BottomCTA";

export default function Contact() {
  return (
    <main className="min-h-screen relative antialiased overflow-x-hidden flex flex-col">
      {/* Full-screen background */}
      <div className="fixed inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-blue-900 via-purple-900 to-blue-800">
          {/* Background image will be added here */}
        </div>
      </div>

      <NavBar />
      
      {/* Content Section */}
      <section className="relative z-10 flex-1 pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left text-white">
            <h1 className="text-4xl sm:text-5xl font-medium mb-8">Contact Us</h1>
            
            <div className="prose prose-lg max-w-none text-white/90">
              <p className="mb-8 text-lg">
                We&apos;d love to hear from you! Whether you have questions about Aiva, need support, or want to get in touch with our team, we&apos;re here to help.
              </p>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Email Us</h2>
                <p className="mb-4">
                  For general inquiries, support, or business opportunities, please reach out to us at:
                </p>
                <p className="text-lg mb-6">
                  <a href="mailto:info@arceus.ca" className="text-white/90 hover:text-white underline transition-colors">
                    info@arceus.ca
                  </a>
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Support</h2>
                <p className="mb-4">
                  If you need technical support or have questions about using Aiva, our support team is ready to assist you. Please include as much detail as possible about your question or issue.
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Business Inquiries</h2>
                <p className="mb-4">
                  For partnership opportunities, media inquiries, or other business-related questions, please contact us at the email address above.
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Response Time</h2>
                <p className="mb-4">
                  We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate &ldquo;Urgent&rdquo; in your subject line.
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Follow Us</h2>
                <p className="mb-4">Stay connected with us on social media:</p>
                <ul className="list-none space-y-2">
                  <li>
                    <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white underline transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/arceusai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white underline transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white underline transition-colors">
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.com/channels/1379314631037816852/1379317472817319986" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white underline transition-colors">
                      Discord
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to ensure content is fully visible before bottom CTA */}
      <div className="hidden md:block h-32"></div>

      <BottomCTA />
    </main>
  );
}


"use client";

import NavBar from "../../components/NavBar";
import BottomCTA from "../../components/BottomCTA";
import Image from "next/image";

export default function TermsOfUse() {
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <main className="min-h-screen relative antialiased overflow-x-hidden flex flex-col">
      {/* Full-screen background */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Image
          src="/assets/Banner-Image.heic"
          alt="Banner Background"
          fill
          className="object-cover object-bottom w-full h-full"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      <NavBar />
      
      {/* Content Section */}
      <section className="relative z-10 flex-1 pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left text-white">
            <h1 className="text-4xl sm:text-5xl font-medium mb-8">Terms of Use for Aiva</h1>
            
            <p className="text-lg mb-8 text-white/90">
              <strong>Effective Date:</strong> {today}
            </p>

            <div className="prose prose-lg max-w-none text-white/90">
              <p className="mb-6">
                This Terms of Use describes how Arceus Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares information in connection with your use of our Aiva product and any associated services (collectively, the &ldquo;Service&rdquo;).
              </p>

              <p className="mb-8">
                By using Aiva, you acknowledge that you have read, understood, and agree to the practices described in this policy.
              </p>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
                <p className="mb-4">
                  When you use Aiva, we collect information you provide directly to us, including your name, email address, and password when creating an account. You may also upload profile images, files, or photos. We collect usage data related to your interactions with Aiva, such as the projects you create, tasks you complete, and apps you connect. Payment details are handled securely through Stripe; we do not store your credit card information. We do not currently use cookies.
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
                <p className="mb-4">
                  We use your information to provide and operate Aiva, deliver AI-powered productivity and automation features, and process subscription payments. We may use it to send you service-related updates and marketing emails, which you can opt out of at any time. We also use information to improve the reliability, functionality, and security of the Service, and to provide support and troubleshooting.
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">How We Share Your Information</h2>
                <p className="mb-4">
                  We do not sell your personal information. We share your information only with trusted third-party service providers. This includes Supabase for hosting, authentication, and storage, and Stripe for payment processing. We may also share information when required by law or in connection with a business transfer such as a merger, acquisition, or sale of assets.
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Data Storage and Retention</h2>
                <p className="mb-4">
                  All data is stored securely in Supabase with encryption. We retain information as long as your account is active or as needed to provide the Service. You may request deletion of your account and data at any time.
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
                <p className="mb-4">
                  We take industry-standard measures to protect your information, including encryption and access controls. However, no system can be guaranteed to be fully secure, and you acknowledge that you provide your data at your own risk.
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Your Choices</h2>
                <p className="mb-4">
                  You have the right to request access to or deletion of your personal information. You may unsubscribe from marketing emails at any time, and you may close your account if you no longer wish to use Aiva.
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Children&apos;s Privacy</h2>
                <p className="mb-4">
                  Aiva is not intended for children under 13 years of age, and we do not knowingly collect personal information from children. If we discover that data has been collected from a child under 13, we will promptly delete it.
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">International Users</h2>
                <p className="mb-4">
                  While Aiva is primarily intended for use in North America, the Service is accessible globally. By using Aiva, you consent to your data being stored and processed in Canada.
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Policy</h2>
                <p className="mb-4">
                  We may update this Terms of Use periodically. Any changes will be reflected in a revised &ldquo;Effective Date&rdquo; and posted on our website.
                </p>
              </section>

              <hr className="my-8 border-white/20" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
                <p className="mb-4">If you have any questions about this Terms of Use, please contact us at:</p>
                <p className="text-lg">
                  <a href="mailto:info@arceus.ca" className="text-white/90 hover:text-white underline transition-colors">
                    info@arceus.ca
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA />
    </main>
  );
}

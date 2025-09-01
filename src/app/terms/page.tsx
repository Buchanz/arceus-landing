"use client";

import NavBar from "../../components/NavBar";
import BottomCTA from "../../components/BottomCTA";

export default function TermsOfUse() {
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <main className="min-h-screen bg-white text-[#1d1d1f] antialiased overflow-x-hidden flex flex-col">
      <NavBar />
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">Terms of Use for Aiva</h1>
            
            <p className="text-lg mb-8">
              <strong>Effective Date:</strong> {today}
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                This Terms of Use describes how Arceus Inc. ("we," "us," or "our") collects, uses, and shares information in connection with your use of our Aiva product and any associated services (collectively, the "Service").
              </p>

              <p className="mb-8">
                By using Aiva, you acknowledge that you have read, understood, and agree to the practices described in this policy.
              </p>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="mb-4">
                  When you use Aiva, we collect information you provide directly to us, including your name, email address, and password when creating an account. You may also upload profile images, files, or photos. We collect usage data related to your interactions with Aiva, such as the projects you create, tasks you complete, and apps you connect. Payment details are handled securely through Stripe; we do not store your credit card information. We do not currently use cookies.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                  We use your information to provide and operate Aiva, deliver AI-powered productivity and automation features, and process subscription payments. We may use it to send you service-related updates and marketing emails, which you can opt out of at any time. We also use information to improve the reliability, functionality, and security of the Service, and to provide support and troubleshooting.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How We Share Your Information</h2>
                <p className="mb-4">
                  We do not sell your personal information. We share your information only with trusted third-party service providers. This includes Supabase for hosting, authentication, and storage, and Stripe for payment processing. We may also share information when required by law or in connection with a business transfer such as a merger, acquisition, or sale of assets.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Storage and Retention</h2>
                <p className="mb-4">
                  All data is stored securely in Supabase with encryption. We retain information as long as your account is active or as needed to provide the Service. You may request deletion of your account and data at any time.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="mb-4">
                  We take industry-standard measures to protect your information, including encryption and access controls. However, no system can be guaranteed to be fully secure, and you acknowledge that you provide your data at your own risk.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
                <p className="mb-4">
                  You have the right to request access to or deletion of your personal information. You may unsubscribe from marketing emails at any time, and you may close your account if you no longer wish to use Aiva.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p className="mb-4">
                  Aiva is not intended for children under 13 years of age, and we do not knowingly collect personal information from children. If we discover that data has been collected from a child under 13, we will promptly delete it.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">International Users</h2>
                <p className="mb-4">
                  While Aiva is primarily intended for use in North America, the Service is accessible globally. By using Aiva, you consent to your data being stored and processed in Canada.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="mb-4">
                  We may update this Terms of Use periodically. Any changes will be reflected in a revised "Effective Date" and posted on our website.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">If you have any questions about this Terms of Use, please contact us at:</p>
                <p className="text-lg">
                  <a href="mailto:info@arceus.ca" className="text-blue-600 hover:text-blue-800 underline">
                    info@arceus.ca
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <BottomCTA />
    </main>
  );
}

"use client";

import NavBar from "../../components/NavBar";
import BottomCTA from "../../components/BottomCTA";

export default function PrivacyPolicy() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy Policy for Aiva</h1>
            
            <p className="text-lg mb-8">
              <strong>Effective Date:</strong> {today}
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                This Privacy Policy describes how Arceus Inc. ("we," "us," or "our") collects, uses, and shares information in connection with your use of our Aiva product and any associated services (collectively, the "Service").
              </p>

              <p className="mb-8">
                Please read this Privacy Policy carefully. By using Aiva, you acknowledge that you have read, understood, and agree to the practices described in this policy.
              </p>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="mb-4">When you use Aiva, we collect the following types of information:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Account Information:</strong> Name, email address, and password when you register for an account.</li>
                  <li><strong>Uploaded Content:</strong> Profile images, files, photos, and other content you choose to upload to the Service.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with Aiva, such as tasks created, projects managed, connected apps, and session activity.</li>
                  <li><strong>Payment Information:</strong> Subscription and billing details processed securely through Stripe. We do not store credit card numbers on our servers.</li>
                </ul>
                <p>We do not use cookies at this time.</p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>To Provide and Operate the Service:</strong> To create and maintain accounts, deliver Aiva's productivity and AI automation features, and support integrations.</li>
                  <li><strong>To Improve Aiva:</strong> To analyze app performance, monitor reliability, and improve user experience.</li>
                  <li><strong>To Communicate With You:</strong> To send important updates, service notifications, and marketing emails (with the option to opt out).</li>
                  <li><strong>To Process Payments:</strong> To manage subscriptions and payments via Stripe.</li>
                  <li><strong>For Support & Troubleshooting:</strong> To diagnose and resolve technical issues.</li>
                </ul>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How We Share Your Information</h2>
                <p className="mb-4">We do not sell your personal information. We may share your information in the following cases:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Service Providers:</strong> With trusted third parties who perform services on our behalf, such as Supabase (for hosting, storage, and authentication) and Stripe (for payment processing).</li>
                  <li><strong>Legal Requirements:</strong> If required by law, regulation, or legal process.</li>
                  <li><strong>Business Transfers:</strong> If Arceus is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                </ul>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Storage & Retention</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>All user data is securely stored on Supabase servers and protected with encryption.</li>
                  <li>We retain personal data for as long as your account is active or as needed to provide services.</li>
                  <li>You may request permanent deletion of your account and all associated data at any time.</li>
                </ul>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p>
                  We use industry-standard security measures, including encryption and access controls, to protect your information. However, no system is completely secure, and we cannot guarantee absolute protection against unauthorized access or breaches.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
                <p className="mb-4">You have the following rights and options:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Access & Deletion:</strong> You may request access to or deletion of your personal data.</li>
                  <li><strong>Marketing Opt-Out:</strong> You may opt out of receiving marketing emails at any time by following the unsubscribe link in the email.</li>
                  <li><strong>Account Closure:</strong> You may close your account at any time, and we will delete your associated data.</li>
                </ul>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p>
                  Aiva is not intended for children under the age of 13 (or the minimum legal age in your jurisdiction). We do not knowingly collect data from children. If we learn we have collected personal data from a child under 13, we will delete it promptly.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">International Users</h2>
                <p>
                  Although Aiva is primarily intended for users in North America, it is available worldwide. By using Aiva, you consent to your information being processed and stored in Canada.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. If we make material changes, we will update the "Effective Date" above and post the revised policy on our website.
                </p>
              </section>

              <hr className="my-8 border-gray-300" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
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

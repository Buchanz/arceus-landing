"use client";

import NavBar from "@/components/NavBar";
import BottomCTA from "@/components/BottomCTA";
import Image from "next/image";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen relative antialiased overflow-x-hidden">
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
      <section className="relative z-10 flex-1 pt-24 pb-0">
        <div className="max-w-6xl mx-auto px-8">
          {/* Apps Section */}
          <div id="apps" className="mb-0 scroll-mt-24 md:scroll-mt-0">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              {/* Apps Image - Left */}
              <div className="order-2 md:order-1 flex justify-center -mt-8 md:mt-0">
                <div className="w-80">
                  <Image 
                    src="/assets/Apps-Image.png" 
                    alt="Apps Interface" 
                    width={320}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Text Content - Right */}
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-80">
                  <h2 className="text-4xl font-bold text-white mb-6">Apps</h2>
                  <p className="text-xl text-white/90 mb-8">
                    Aiva connects to the apps and services you already use.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-white/90">Browse the App Library and add to Library</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-white/90">Log in once. Adjust preferences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-white/90">Complete actions seamlessly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Mobile divider */}
            <div className="md:hidden border-t border-white/20 my-12"></div>
          </div>

          {/* Contacts Section */}
          <div id="contacts" className="mb-0 scroll-mt-24 md:scroll-mt-0">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              {/* Text Content - Left */}
              <div className="flex justify-center">
                <div className="w-80">
                  <h2 className="text-4xl font-bold text-white mb-6">Contacts</h2>
                  <p className="text-xl text-white/90 mb-8">
                    Manage and connect with all your important people in one place.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-white/90">Sync contacts from all your connected apps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-white/90">Quick access to contact information and communication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-white/90">Aiva helps you stay connected with the people that matter</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Contacts Image - Right */}
              <div className="flex justify-center -mt-8 md:mt-0">
                <div className="w-80">
                  <Image 
                    src="/assets/Contacts-Image.png" 
                    alt="Contacts Interface" 
                    width={320}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            {/* Mobile divider */}
            <div className="md:hidden border-t border-white/20 my-12"></div>
          </div>

          {/* Projects Section */}
          <div id="projects" className="mb-0 scroll-mt-24 md:scroll-mt-0">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              {/* Projects Image - Left */}
              <div className="order-2 md:order-1 flex justify-center -mt-8 md:mt-0">
                <div className="w-80">
                  <Image 
                    src="/assets/Projects-Image.png" 
                    alt="Projects Interface" 
                    width={320}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Text Content - Right */}
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-80">
                  <h2 className="text-4xl font-bold text-white mb-6">Projects</h2>
                  <p className="text-xl text-white/90 mb-8">
                    Use Projects to group tasks, tools, people and content - all in one place
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-white/90">Start new project</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-white/90">Aiva links docs, messages, emails, reminders and people</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-white/90">As context changes, Aiva adapts and knows whats next</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Mobile divider */}
            <div className="md:hidden border-t border-white/20 my-12"></div>
          </div>

          {/* Actions Section */}
          <div id="actions" className="mb-0 scroll-mt-24 md:scroll-mt-0">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              {/* Text Content - Left */}
              <div className="flex justify-center">
                <div className="w-80">
                  <h2 className="text-4xl font-bold text-white mb-6">Actions</h2>
                  <p className="text-xl text-white/90 mb-8">
                    Complete actions across all your favourite apps just by asking.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-white/90">Send request to Aiva</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-white/90">Aiva navigates the connected applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-white/90">Tasks are ready for completion and presented to the user to accept, edit or cancel.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Actions Image - Right */}
              <div className="flex justify-center -mt-8 md:mt-0">
                <div className="w-80">
                  <Image 
                    src="/assets/Action-Image.png" 
                    alt="Actions Interface" 
                    width={320}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Spacer to push bottom CTA down - below background image */}
          <div className="h-[200vh] md:h-[300vh]"></div>
        </div>
      </section>

      <BottomCTA />
    </main>
  );
}


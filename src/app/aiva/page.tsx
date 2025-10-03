import NavBar from "@/components/NavBar";
import BottomCTA from "@/components/BottomCTA";

export default function AivaPage() {
  return (
    <main className="min-h-screen bg-white text-[#1d1d1f] antialiased overflow-x-hidden flex flex-col">
      <NavBar />
      <div className="transition-all duration-300 flex-1">
        <div className="pt-20">
        {/* Gray Header Section */}
        <div className="bg-gray-50 py-8 -mt-20 pt-28">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-center min-h-[120px] -mt-24">
              {/* Text and Logo - Side by Side */}
              <div className="flex items-center gap-8">
                {/* Left Side - Text Only */}
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    How Aiva works
                  </h1>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">For iOS only</p>
                    <p className="text-sm text-gray-600 mb-1">Coming soon to other platforms...</p>
                    <a href="https://apps.apple.com/ca/app/testflight/id899247664" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-500">
                      Download TestFlight
                    </a>
                  </div>
                </div>
                
                {/* Right Side - Aiva Logo */}
                <div className="w-32 h-32 rounded-[36px] overflow-hidden shadow-lg">
                  <img 
                    src="/assets/aiva-app-icon.png" 
                    alt="Aiva App Icon" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-8 py-16">
                 {/* Apps Section */}
                 <div id="apps" className="mb-32">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              {/* Apps Image - Left */}
              <div className="order-2 md:order-1 flex justify-center">
                <div className="w-80">
                  <img 
                    src="/assets/Apps Landing Image.png" 
                    alt="Apps Interface" 
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Text Content - Right */}
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-80">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Apps</h2>
                  <p className="text-xl text-gray-500 mb-8">
                    Aiva connects to the apps and services you already use.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">Browse the App Library and add to Library</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">Log in once. Adjust preferences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">Complete actions seamlessly</span>
                    </li>
                  </ul>
                  <a href="#" className="text-blue-400 text-base font-medium">
                    See App Library
                  </a>
                </div>
              </div>
            </div>
            {/* Divider from left edge of left images to right edge of Projects image */}
            <div className="mt-0 border-t border-gray-200" style={{width: 'calc(100% - 4rem - 120px)', marginLeft: 'calc(2rem + 60px)'}}></div>
          </div>

                 {/* Projects Section */}
                 <div id="projects" className="mb-32">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              {/* Text Content - Left */}
              <div className="flex justify-center">
                <div className="w-80">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Projects</h2>
                  <p className="text-xl text-gray-500 mb-8">
                    Use Projects to group tasks, tools, people and content - all in one place
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">Start new project</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">Aiva links docs, messages, emails, reminders and people</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">As context changes, Aiva adapts and knows whats next</span>
                    </li>
                  </ul>
                  <a href="#" className="text-blue-400 text-base font-medium">
                    Learn how Projects work
                  </a>
                </div>
              </div>
              
              {/* Projects Image - Right */}
              <div className="flex justify-center">
                <div className="w-80">
                  <img 
                    src="/assets/Projects Image.png" 
                    alt="Projects Interface" 
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            {/* Divider from left edge of left images to right edge of Projects image */}
            <div className="mt-0 border-t border-gray-200" style={{width: 'calc(100% - 4rem - 120px)', marginLeft: 'calc(2rem + 60px)'}}></div>
          </div>

                 {/* Actions Section */}
                 <div id="actions" className="mb-32">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              {/* Tasks Image - Left */}
              <div className="order-2 md:order-1 flex justify-center">
                <div className="w-80">
                  <img 
                    src="/assets/Tasks Image.png" 
                    alt="Tasks Interface" 
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Text Content - Right */}
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-80">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Actions</h2>
                  <p className="text-xl text-gray-500 mb-8">
                    Complete actions across all your favourite apps just by asking.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">Send request to Aiva</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">Aiva navigates the connected applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">Tasks are ready for completion and presented to the user to accept, edit or cancel.</span>
                    </li>
                  </ul>
                  <a href="#" className="text-blue-400 text-base font-medium">
                    Learn how Actions work
                  </a>
                </div>
              </div>
            </div>
            {/* Divider from left edge of left images to right edge of Projects image */}
            <div className="mt-0 border-t border-gray-200" style={{width: 'calc(100% - 4rem - 120px)', marginLeft: 'calc(2rem + 60px)'}}></div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-500 mb-6">
              You do less while Aiva does more.
            </h2>
            <a href="#" className="text-blue-400 text-lg font-medium">
              Get Started with Aiva
            </a>
          </div>
        </div>
        </div>
      </div>
      <BottomCTA />
    </main>
  );
}
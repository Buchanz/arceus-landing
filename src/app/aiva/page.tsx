import NavBar from "@/components/NavBar";
import BottomCTA from "@/components/BottomCTA";

export default function AivaPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <main className="pt-20">
        {/* Gray Header Section */}
        <div className="bg-gray-50 py-8 -mt-20 pt-28">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-center min-h-[120px] -mt-24">
              {/* Combined Text and Logo */}
              <div className="flex items-center gap-8">
                {/* Left Side - Text and Search */}
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    How Aiva works
                  </h1>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">For iOS only</p>
                    <p className="text-sm text-gray-600">Coming soon to other platforms...</p>
                  </div>
                  
                  {/* Search Bar - White background */}
                  <div className="max-w-xs">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search this guide"
                        className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white shadow-sm"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                        {/* Aiva Logo - Aligned with text and search bar */}
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

        {/* Main Content Sections */}
        <div className="max-w-7xl mx-auto px-8 py-24">
          {/* Plugins Section */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              {/* iPhone Mockup - Left */}
              <div className="order-2 md:order-1 flex justify-center md:justify-start md:ml-32">
                <div className="bg-black rounded-3xl p-2 w-80 mx-auto">
                  <div className="bg-white rounded-2xl h-96 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                      <button className="text-blue-600 font-medium">← Back</button>
                      <h3 className="font-semibold">Plugin Configuration</h3>
                    </div>
                    
                    {/* Search */}
                    <div className="p-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Q Search"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                    
                    {/* Plugin List */}
                    <div className="px-4 flex-1">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-sm font-bold">M</div>
                            <span className="text-sm">Gmail</span>
                          </div>
                          <span className="text-gray-400">↑</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-sm font-bold">A</div>
                            <span className="text-sm">account@email.com</span>
                          </div>
                          <span className="text-gray-400">↓</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-sm font-bold">G</div>
                            <span className="text-sm">Google Drive</span>
                          </div>
                          <span className="text-gray-400">+</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm font-bold">G</div>
                            <span className="text-sm">Google Docs</span>
                          </div>
                          <span className="text-gray-400">+</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center text-white text-sm font-bold">I</div>
                            <span className="text-sm">Instagram</span>
                          </div>
                          <span className="text-gray-400">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Right */}
              <div className="order-1 md:order-2 flex justify-center md:justify-start md:ml-16">
                <div className="w-80">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Plugins</h2>
                  <p className="text-xl text-gray-500 mb-8">
                    Aiva connects to the apps and services you already use.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">Browse the Plugin Gallery and add to Library</span>
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
                    Explore plugin Gallery
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Workflows Section */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              {/* Text Content - Left */}
              <div className="flex justify-center md:justify-start md:ml-48">
                <div className="w-80">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Workflows</h2>
                  <p className="text-xl text-gray-500 mb-8">
                    Create custom workflows for anything.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">Build new workflow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">Add your plugins & contacts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-lg text-gray-500">Select actions and Aiva does the rest</span>
                    </li>
                  </ul>
                  <a href="#" className="text-blue-400 text-base font-medium">
                    Learn about Workflows
                  </a>
                </div>
              </div>
              
              {/* iPhone Mockup - Right */}
              <div className="flex justify-center md:justify-start">
                <div className="bg-black rounded-3xl p-2 w-80">
                  <div className="bg-white rounded-2xl h-96 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                      <button className="text-blue-600 font-medium">← Back</button>
                      <h3 className="font-semibold">Create Workflow</h3>
                    </div>
                    
                    {/* Form Fields */}
                    <div className="p-4 space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Task name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                      </div>
                      
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="*Plugin Name*"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                        <button className="px-3 py-2 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="*Action*"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                        <button className="px-3 py-2 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Add Contact"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                        <button className="px-3 py-2 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="*Details*"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                        <button className="px-3 py-2 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* Create Button */}
                    <div className="p-4 pt-0">
                      <button className="w-full bg-blue-600 text-white rounded-full py-3 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              {/* iPhone Mockup - Left */}
              <div className="order-2 md:order-1 flex justify-center md:justify-start md:ml-48">
                <div className="bg-black rounded-3xl p-2 w-80">
                  <div className="bg-white rounded-2xl h-96 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                      <button className="text-blue-600 font-medium">← Back</button>
                      <h3 className="font-semibold">Plugin Configuration</h3>
                    </div>
                    
                    {/* Search */}
                    <div className="p-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Q Search"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                    
                    {/* Plugin List */}
                    <div className="px-4 flex-1">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-sm font-bold">M</div>
                            <span className="text-sm">Gmail</span>
                          </div>
                          <span className="text-gray-400">↑</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-sm font-bold">A</div>
                            <span className="text-sm">account@email.com</span>
                          </div>
                          <span className="text-gray-400">↓</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-sm font-bold">G</div>
                            <span className="text-sm">Google Drive</span>
                          </div>
                          <span className="text-gray-400">+</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm font-bold">G</div>
                            <span className="text-sm">Google Docs</span>
                          </div>
                          <span className="text-gray-400">+</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center text-white text-sm font-bold">I</div>
                            <span className="text-sm">Instagram</span>
                          </div>
                          <span className="text-gray-400">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Right */}
              <div className="order-1 md:order-2 flex justify-center md:justify-start md:ml-16">
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
                    Learn how plugins work
                  </a>
                </div>
              </div>
            </div>
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
      </main>
      
      <BottomCTA />
    </div>
  );
}

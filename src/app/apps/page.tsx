'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import BottomCTA from '@/components/BottomCTA';

export default function AppsPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery] = useState('');

  // App categories with real apps organized alphabetically
  const appCategories = {
    'All': {
      title: "All Apps",
      subtitle: "Discover all our powerful applications.",
      apps: [
        // Productivity Apps (36)
        { name: "Adobe Acrobat Sign", description: "Digital document signing and workflow automation", icon: "/assets/Adobe-Sign.jpg.webp" },
        { name: "Airtable", description: "Database and spreadsheet hybrid for organizing anything", icon: "/assets/Air table .webp" },
        { name: "Asana", description: "Team collaboration and project management platform", icon: "/assets/asana-logo-logo-svg-vector.svg" },
        { name: "Atlassian Confluence", description: "Team workspace for knowledge sharing and collaboration", icon: "/assets/confluence logo.webp" },
        { name: "Atlassian Jira", description: "Issue tracking and project management for software teams", icon: "/assets/jira-1.svg" },
        { name: "Bitbucket", description: "Git repository management and collaboration platform", icon: "/assets/bitbucket logo.png" },
        { name: "Box", description: "Cloud content management and file sharing platform", icon: "/assets/Box,_Inc._logo.svg.png" },
        { name: "Calendly", description: "Scheduling automation and calendar management", icon: "/assets/calendly logo.png" },
        { name: "ClickUp", description: "All-in-one productivity platform for teams", icon: "/assets/clickup logo.png" },
        { name: "DocuSign", description: "Electronic signature and document management", icon: "/assets/Docusign logo.png" },
        { name: "Dropbox", description: "Cloud storage and file synchronization", icon: "/assets/dropbox logo.png" },
        { name: "Dropbox Sign", description: "Electronic signature and document workflow", icon: "/assets/dropbox sign logo.png" },
        { name: "Figma", description: "Collaborative interface design and prototyping tool", icon: "/assets/Figma-logo.svg.png" },
        { name: "GitHub", description: "Code repository hosting and collaboration platform", icon: "/assets/github logo.png" },
        { name: "GitLab", description: "DevOps platform with integrated CI/CD", icon: "/assets/gitlab logo.png" },
        { name: "Gmail", description: "Email integration and automation services", icon: "/assets/Gmail_icon_(2020).svg.png" },
        { name: "Google Calendar", description: "Cloud-based calendar and scheduling service", icon: "/assets/google calendar logo.png" },
        { name: "Google Docs", description: "Online word processor and collaboration tool", icon: "/assets/Google-Docs-Logo.png" },
        { name: "Google Drive", description: "Cloud storage and file sharing service", icon: "/assets/Google_Drive_icon_(2020).svg.png" },
        { name: "Google Sheets", description: "Online spreadsheet and data analysis tool", icon: "/assets/Google_Sheets_logo_(2014-2020).svg.png" },
        { name: "HubSpot", description: "Customer relationship management and marketing automation", icon: "/assets/hubspot logo.png" },
        { name: "Intercom", description: "Customer messaging and support platform", icon: "/assets/intercom logo.svg" },
        { name: "Microsoft OneDrive", description: "Cloud storage and file synchronization", icon: "/assets/microsoft one drive logo.png" },
        { name: "Microsoft OneNote", description: "Digital note-taking and organization app", icon: "/assets/microsoft onenote logo.png" },
        { name: "Microsoft Teams", description: "Collaboration and communication platform", icon: "/assets/teams logo.png" },
        { name: "Microsoft To Do", description: "Task management and productivity app", icon: "/assets/to do logo.png" },
        { name: "Miro", description: "Visual collaboration and whiteboarding platform", icon: "/assets/miro logo.png" },
        { name: "monday.com", description: "Work operating system for team management", icon: "/assets/monday.com logo" },
        { name: "Notion", description: "All-in-one workspace for notes, docs, and collaboration", icon: "/assets/Notion-Logo.png" },
        { name: "Salesforce", description: "Customer relationship management platform", icon: "/assets/salesforce logo.png" },
        { name: "Slack", description: "Team communication and collaboration platform", icon: "/assets/slack logo.png" },
        { name: "Smartsheet", description: "Work management and collaboration platform", icon: "/assets/smartsheet logo.png" },
        { name: "Trello", description: "Visual project management and collaboration tool", icon: "/assets/trello logo.png" },
        { name: "Webex", description: "Video conferencing and collaboration platform", icon: "/assets/webex logo.png" },
        { name: "Zoom", description: "Video communications and collaboration platform", icon: "/assets/zoom logo.png" },
        { name: "Airtable", description: "Database and spreadsheet hybrid for organizing anything", icon: "/assets/Air table .webp" },
        { name: "DocuSign", description: "Electronic signature and document management", icon: "/assets/Docusign logo.png" },
        { name: "Dropbox Sign", description: "Electronic signature and document workflow", icon: "/assets/dropbox sign logo.png" },
        { name: "Adobe Acrobat Sign", description: "Digital document signing and workflow automation", icon: "/assets/Adobe-Sign.jpg.webp" },
        { name: "Calendly", description: "Scheduling automation and calendar management", icon: "/assets/calendly logo.png" },
        { name: "Salesforce", description: "Customer relationship management platform", icon: "/assets/salesforce logo.png" },
        { name: "HubSpot", description: "Customer relationship management and marketing automation", icon: "/assets/hubspot logo.png" },
        { name: "Intercom", description: "Customer messaging and support platform", icon: "/assets/intercom logo.svg" }
      ]
    },
    'Productivity': {
      title: "Productivity",
      subtitle: "Boost your efficiency and get things done.",
      apps: [
        { name: "Google Drive", description: "Cloud storage and file sharing service", icon: "/assets/Google_Drive_icon_(2020).svg.png" },
        { name: "Google Docs", description: "Online word processor and collaboration tool", icon: "/assets/Google-Docs-Logo.png" },
        { name: "Google Sheets", description: "Online spreadsheet and data analysis tool", icon: "/assets/Google_Sheets_logo_(2014-2020).svg.png" },
        { name: "Google Calendar", description: "Cloud-based calendar and scheduling service", icon: "/assets/google calendar logo.png" },
        { name: "Gmail", description: "Email integration and automation services", icon: "/assets/Gmail_icon_(2020).svg.png" },
        { name: "Slack", description: "Team communication and collaboration platform", icon: "/assets/slack logo.png" },
        { name: "Asana", description: "Team collaboration and project management platform", icon: "/assets/asana-logo-logo-svg-vector.svg" },
        { name: "Trello", description: "Visual project management and collaboration tool", icon: "/assets/trello logo.png" },
        { name: "Notion", description: "All-in-one workspace for notes, docs, and collaboration", icon: "/assets/Notion-Logo.png" },
        { name: "Atlassian Jira", description: "Issue tracking and project management for software teams", icon: "/assets/jira-1.svg" },
        { name: "Atlassian Confluence", description: "Team workspace for knowledge sharing and collaboration", icon: "/assets/confluence logo.webp" },
        { name: "Dropbox", description: "Cloud storage and file synchronization", icon: "/assets/dropbox logo.png" },
        { name: "Box", description: "Cloud content management and file sharing platform", icon: "/assets/Box,_Inc._logo.svg.png" },
        { name: "Microsoft OneDrive", description: "Cloud storage and file synchronization", icon: "/assets/microsoft one drive logo.png" },
        { name: "Microsoft Teams", description: "Collaboration and communication platform", icon: "/assets/teams logo.png" },
        { name: "Microsoft To Do", description: "Task management and productivity app", icon: "/assets/to do logo.png" },
        { name: "Microsoft OneNote", description: "Digital note-taking and organization app", icon: "/assets/microsoft onenote logo.png" },
        { name: "Zoom", description: "Video communications and collaboration platform", icon: "/assets/zoom logo.png" },
        { name: "Webex", description: "Video conferencing and collaboration platform", icon: "/assets/webex logo.png" },
        { name: "Airtable", description: "Database and spreadsheet hybrid for organizing anything", icon: "/assets/Air table .webp" },
        { name: "monday.com", description: "Work operating system for team management", icon: "/assets/monday.com logo" },
        { name: "ClickUp", description: "All-in-one productivity platform for teams", icon: "/assets/clickup logo.png" },
        { name: "Smartsheet", description: "Work management and collaboration platform", icon: "/assets/smartsheet logo.png" },
        { name: "Miro", description: "Visual collaboration and whiteboarding platform", icon: "/assets/miro logo.png" },
        { name: "Figma", description: "Collaborative interface design and prototyping tool", icon: "/assets/Figma-logo.svg.png" },
        { name: "GitHub", description: "Code repository hosting and collaboration platform", icon: "/assets/github logo.png" },
        { name: "GitLab", description: "DevOps platform with integrated CI/CD", icon: "/assets/gitlab logo.png" },
        { name: "Bitbucket", description: "Git repository management and collaboration platform", icon: "/assets/bitbucket logo.png" },
        { name: "DocuSign", description: "Electronic signature and document management", icon: "/assets/Docusign logo.png" },
        { name: "Dropbox Sign", description: "Electronic signature and document workflow", icon: "/assets/dropbox sign logo.png" },
        { name: "Adobe Acrobat Sign", description: "Digital document signing and workflow automation", icon: "/assets/Adobe-Sign.jpg.webp" },
        { name: "Calendly", description: "Scheduling automation and calendar management", icon: "/assets/calendly logo.png" },
        { name: "Salesforce", description: "Customer relationship management platform", icon: "/assets/salesforce logo.png" },
        { name: "HubSpot", description: "Customer relationship management and marketing automation", icon: "/assets/hubspot logo.png" },
        { name: "Intercom", description: "Customer messaging and support platform", icon: "/assets/intercom logo.svg" }
      ]
    },
    'Travel': {
      title: "Travel",
      subtitle: "Navigate and explore the world.",
      apps: [
        { name: "Uber", description: "Ridesharing and delivery services", icon: "/assets/uber logo.png" },
        { name: "Lyft", description: "Ridesharing and transportation services", icon: "/assets/lyft logo.png" },
        { name: "Waze", description: "Community-based traffic and navigation app", icon: "/assets/waze logo.png" },
        { name: "Google Maps", description: "Navigation and location services", icon: "/assets/Google_Maps_icon_(2020).svg.png" }
      ]
    },
    'Food Ordering': {
      title: "Food Ordering",
      subtitle: "Order food and manage deliveries.",
      apps: [
        { name: "DoorDash", description: "Food delivery and pickup services", icon: "/assets/door dash logo.jpg" },
        { name: "Uber Eats", description: "Food delivery via Uber platform", icon: "/assets/uber eats logo.png" },
        { name: "Toast", description: "Restaurant management and ordering platform", icon: "/assets/toast logo.png" }
      ]
    },
    'Ridesharing': {
      title: "Ridesharing",
      subtitle: "Get around with ride services.",
      apps: [
        { name: "Uber", description: "Ridesharing and delivery services", icon: "/assets/uber logo.png" },
        { name: "Lyft", description: "Ridesharing and transportation services", icon: "/assets/lyft logo.png" }
      ]
    },
    'Email': {
      title: "Email",
      subtitle: "Manage your email communications.",
      apps: [
        { name: "Gmail", description: "Email integration and automation services", icon: "/assets/Gmail_icon_(2020).svg.png" },
        { name: "Microsoft Outlook", description: "Email and calendar management", icon: "/assets/microsoft outlook logo.png" },
        { name: "Fastmail", description: "Privacy-focused email service", icon: "/assets/fastmail logo.png" },
        { name: "Zoho Mail", description: "Business email and collaboration", icon: "/assets/Zoho-Mail-Symbol.png" },
        { name: "Yahoo Mail", description: "Email and news service", icon: "/assets/yahoo mail logo.png" },
        { name: "Proton Mail", description: "Secure email with end-to-end encryption", icon: "/assets/proton mail logo.png" },
        { name: "Mailgun", description: "Email API for developers", icon: "/assets/mail gun logo.png" },
        { name: "SendGrid", description: "Email delivery and marketing platform", icon: "/assets/sendgrid logo.png" },
        { name: "Postmark", description: "Transactional email delivery service", icon: "/assets/postmark logo.png" }
      ]
    }
  };

  const [activeCategory, setActiveCategory] = useState<keyof typeof appCategories>('All');

  // Get all apps for search
  const allApps = Object.values(appCategories).flatMap(category => category.apps);

  // Filter apps based on search query
  const filteredApps = allApps.filter(app =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="pt-14 transition-all duration-300 flex-1">
        {!isSearchOpen ? (
          // Main Apps Page - Apple Style with Category Tabs
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Active Category Content */}
            <div className="mb-16">
              <div className="text-left mb-8">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                  App Library
                </h2>
                <p className="text-xl text-gray-600">
                  Connect, create and get things done with the powerful and intuitive apps you already know and love!
                </p>
              </div>

              {/* Category Tabs */}
              <div className="flex mb-8">
                <div className="flex space-x-2">
                  {(Object.keys(appCategories) as Array<keyof typeof appCategories>).map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        activeCategory === category
                          ? 'bg-gray-900 text-white shadow-lg'
                          : 'bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section Description - Same line, different colors */}
              <div className="mb-8">
                <div className="flex items-center space-x-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {appCategories[activeCategory].title}
                  </h3>
                  <span className="text-2xl text-gray-400">•</span>
                  <p className="text-2xl text-gray-400">
                    {appCategories[activeCategory].subtitle}
                  </p>
                </div>
              </div>

              {/* App Cards Carousel - Much Taller Cards */}
              <div className="overflow-x-auto">
                <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
                  {appCategories[activeCategory].apps.map((app, appIndex) => (
                    <div
                      key={appIndex}
                      className="bg-gray-100 border border-gray-200 rounded-[40px] p-8 hover:shadow-lg transition-shadow cursor-pointer min-w-[420px] max-w-[420px] h-[600px]"
                    >
                      <div className="relative h-full">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                            {app.icon.startsWith('/') ? (
                              <img src={app.icon} alt={app.name} className={`${app.name === 'Adobe Acrobat Sign' || app.name === 'Miro' || app.name === 'Uber Eats' || app.name === 'Postmark' ? 'w-full h-full object-cover' : app.name === 'Yahoo Mail' ? 'w-24 h-24 object-cover' : app.name === 'Google Docs' || app.name === 'Dropbox Sign' || app.name === 'Trello' || app.name === 'Uber' || app.name === 'DoorDash' || app.name === 'Zoho Mail' ? 'w-20 h-20 object-contain' : 'w-12 h-12 object-contain'}`} />
                            ) : (
                              <span className="text-3xl">{app.icon}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{app.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{app.description}</p>
                          </div>
                        </div>
                        
                        {/* Visual Content Area - Extended to fill space */}
                        <div className="absolute top-32 left-0 right-0 bottom-0">
                          <div className="w-full h-full bg-white rounded-xl flex items-center justify-center text-gray-400">
                            <div className="text-center">
                              {app.icon.startsWith('/') ? (
                                <img src={app.icon} alt={app.name} className={`${app.name === 'Google Docs' || app.name === 'Dropbox Sign' || app.name === 'Trello' || app.name === 'Uber' || app.name === 'DoorDash' || app.name === 'Zoho Mail' ? 'w-48 h-48 mb-4 object-contain' : app.name === 'Uber Eats' ? 'w-48 h-48 mb-4 object-cover' : app.name === 'Yahoo Mail' ? 'w-32 h-32 mb-4 object-cover' : app.name === 'Postmark' ? 'w-24 h-24 mb-4 object-cover' : 'w-32 h-32 mb-4 object-contain'}`} />
                              ) : (
                                <div className="text-6xl mb-4">{app.icon}</div>
                              )}
                              <div className="text-lg">App Preview</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Search Results Section
          <div className="min-h-screen bg-gray-50 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              {/* Search Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Search Results
                </h2>
                <p className="text-gray-600">
                  Found {filteredApps.length} apps matching &quot;{searchQuery}&quot;
                </p>
              </div>

              {/* Search Results */}
              {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredApps.map((app, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                          {app.icon.startsWith('/') ? (
                            <img src={app.icon} alt={app.name} className="w-8 h-8 object-contain" />
                          ) : (
                            <span className="text-xl">{app.icon}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.name}</h3>
                          <p className="text-gray-600 text-sm">{app.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No apps found</h3>
                  <p className="text-gray-600">Try searching with different keywords</p>
                </div>
              )}

              {/* Back Button */}
              <div className="text-center mt-12">
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  Back to Apps
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <BottomCTA />
    </div>
  );
}




import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>Adrian Odira | IT Specialist & Engineer</title>
        <meta name="description" content="Professional Engineer and IT Specialist with expertise in mechanical engineering and software development" />
      </Head>

      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-mono font-bold text-gray-900 dark:text-white">
                adrian_odira
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                about
              </Link>
              <Link href="#experience" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                experience
              </Link>
              <Link href="#projects" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                projects
              </Link>
              <Link href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section with Window-Style Image */}
        <section id="about" className="mb-24">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Image Window */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <Image
                  src="/profile.jpg"
                  alt="Adrian Odira"
                  width={400}
                  height={400}
                  className="rounded-md object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Adrian Odira, PE
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
                IT Specialist | Mechanical Engineer | ACCA Candidate
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Summa Cum Laude Penn State Engineering graduate with professional licenses in PA/NY. 
                Bridging engineering, tech, and finance to solve complex problems across industries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-sm rounded-full">ASME Member</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-sm rounded-full">Tau Beta Pi</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-sm rounded-full">30+ Countries</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24">
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-gray-900 dark:text-white mb-8">
            $ experience --timeline
          </h2>
          
          <div className="space-y-8">
            {/* Rio Fish */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold">IT Support Specialist</h3>
              <p className="text-gray-600 dark:text-gray-400">Rio Fish Limited • Jan 2021–Present</p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Increased market share from 3% to 10% via targeted campaigns</li>
                <li>Optimized web app metrics driving 30% social media growth</li>
              </ul>
            </div>

            {/* Onyx Engineering */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-semibold">Junior Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">Onyx Design and Consulting • 2018</p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Identified critical design flaws saving $100K+</li>
                <li>Reduced CAD iteration time by 20%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-gray-900 dark:text-white mb-8">
            $ projects --list
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-mono font-semibold text-blue-600 dark:text-blue-400 mb-2">
                mowet.co.ke
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Modern agricultural technology platform connecting farmers with markets and resources.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">TypeScript</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">Tailwind CSS</span>
              </div>
              <a 
                href="https://mowet.co.ke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-mono text-blue-600 dark:text-blue-400 hover:underline"
              >
                $ visit_site --live
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-gray-900 dark:text-white mb-8">
            $ connect --social
          </h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://x.com/adrian_irl_"
                className="flex items-center justify-center px-4 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X (Twitter)
              </a>
              
              <a
                href="https://www.linkedin.com/in/adrian-odira/"
                className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              
              <a
                href="https://github.com/ako5117"
                className="flex items-center justify-center px-4 py-3 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
              
              <a
                href="mailto:aodira63@gmail.com"
                className="flex items-center justify-center px-4 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-4 font-mono text-sm">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Adrian Odira | Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}


'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// SVG Icons
const TerminalIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M4 17l6-6-6-6M12 19h8"/>
  </svg>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-screen items-center justify-center">
        <TerminalIcon className="h-12 w-12 animate-pulse text-green-400" />
      </div>
    );
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Cover Photo Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/cover.jpg"
          alt="Professional Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center p-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Adrian Odira, PE</h1>
            <p className="text-xl md:text-2xl text-green-400 mb-8">
              IT Specialist | Mechanical Engineer | ACCA Candidate
            </p>
            <div className="animate-bounce">
              <svg className="w-8 h-8 mx-auto text-white" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Profile Section */}
        <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <Image
                src="/profile.jpg"
                alt="Adrian Odira"
                fill
                className="rounded-xl object-cover border-4 border-green-400"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Personal Statement</h2>
              <p className="mb-4">
                Summa Cum Laude graduate from Pennsylvania State University with a major in Mechanical Engineering and minor in Computer Science. Licensed Professional Engineer in PA/NY and ACCA candidate at Strathmore University.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Languages</h3>
                  <ul className="space-y-1">
                    {['English (Native)', 'Spanish (Advanced)', 'Portuguese (Advanced)', 'Swahili (Elementary)'].map(lang => (
                      <li key={lang}>{lang}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                  <ul className="space-y-1">
                    {['PE License (PA/NY)', 'ACCA (In Progress)', 'ASME Member', 'Tau Beta Pi'].map(cert => (
                      <li key={cert}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-2">Pennsylvania State University</h3>
                <p className="text-green-400 mb-4">BSc Mechanical Engineering, 2020</p>
                <ul className="space-y-2">
                  <li>• Summa Cum Laude (3.97 GPA)</li>
                  <li>• Schreyer Honors College</li>
                  <li>• Minor in Computer Science</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-2">Strathmore University</h3>
                <p className="text-green-400 mb-4">ACCA Certification, 2024</p>
                <ul className="space-y-2">
                  <li>• Applied Skills Completed</li>
                  <li>• Financial Expertise</li>
                  <li>• International Certification</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Professional Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "IT Support Specialist",
                company: "Rio Fish Limited",
                period: "2021 - Present",
                achievements: [
                  "Increased market share from 3% to 10% through digital campaigns",
                  "Optimized web metrics driving 30% social media growth",
                  "Implemented automation reducing manual processes by 40%"
                ]
              },
              {
                title: "Junior Engineer",
                company: "Onyx Design and Consulting",
                period: "2018",
                achievements: [
                  "Identified design flaws saving $100K+",
                  "Reduced CAD iteration time by 20%",
                  "Collaborated on multi-disciplinary projects"
                ]
              }
            ].map((job, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-green-400">{job.title}</h3>
                  <span className="text-gray-400">{job.period}</span>
                </div>
                <p className="text-blue-300 mb-3 font-medium">{job.company}</p>
                <ul className="space-y-2">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3 text-green-400">mowet.co.ke</h3>
                <p className="mb-4">Agricultural technology platform connecting farmers with markets.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Next.js', 'TypeScript', 'Tailwind CSS'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <a href="https://mowet.co.ke" target="_blank" className="text-green-400 hover:underline">
                  Visit Project →
                </a>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-400/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Engineering Calculator Suite</h3>
                <p className="mb-4">Professional tools for structural and fluid dynamics calculations.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'NumPy', 'Matplotlib'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Get In Touch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <a href="mailto:aodira63@gmail.com" className="bg-gray-800/50 p-4 rounded-lg text-center hover:bg-green-400/10 transition-colors">
              Email
            </a>
            <a href="https://linkedin.com/in/adrian-odira" target="_blank" className="bg-gray-800/50 p-4 rounded-lg text-center hover:bg-blue-400/10 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/ako5117" target="_blank" className="bg-gray-800/50 p-4 rounded-lg text-center hover:bg-gray-400/10 transition-colors">
              GitHub
            </a>
            <a href="https://x.com/adrian_irl_" target="_blank" className="bg-gray-800/50 p-4 rounded-lg text-center hover:bg-black/20 transition-colors">
              Twitter/X
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
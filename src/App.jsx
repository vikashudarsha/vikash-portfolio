import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, ChevronRight, Cpu, Award, Globe, User } from 'lucide-react';

// --- 1. Custom Cursor Component ---
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-8 h-8 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference blur-[1px] transition-transform duration-150 ease-out hidden md:block"
      style={{ transform: `translate(${mousePos.x - 16}px, ${mousePos.y - 16}px)` }}
    />
  );
};

// --- 2. Project Card Component ---
const ProjectCard = ({ title, desc, tags, link, type }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-[#112240] p-6 rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all shadow-xl group flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-start">
        <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold bg-cyan-950/50 px-2 py-1 rounded">{type}</span>
        <div className="flex gap-3 text-gray-400">
          <a href={link} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" title="Source Code"><Code size={18} /></a>
          <a href={link} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" title="Live Link"><ExternalLink size={18} /></a>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mt-4 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mt-3 leading-relaxed min-h-[60px]">{desc}</p>
    </div>
    <div className="flex flex-wrap gap-2 mt-6">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] font-mono text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded">#{tag}</span>
      ))}
    </div>
  </motion.div>
);

// --- 3. Certificate Card Component ---
const CertificateCard = ({ title, platform, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="block group">
    <div className="bg-[#112240] p-4 rounded-lg border border-gray-800 group-hover:border-cyan-400/50 transition-all flex items-center gap-4">
      <div className="bg-cyan-950/50 p-3 rounded-full text-cyan-400 group-hover:scale-110 transition-transform">
        <Award size={20} />
      </div>
      <div>
        <h4 className="text-white text-sm font-bold group-hover:text-cyan-400 transition-colors">{title}</h4>
        <p className="text-gray-500 text-xs mt-1">{platform}</p>
      </div>
    </div>
  </a>
);

// --- 4. Main App Component ---
export default function App() {
  const [isAI, setIsAI] = useState(false);

  const projects = [
    // --- Hackathon Projects ---
    {
      title: "TechPrep LK",
      type: "Hackathon",
      desc: "AI-powered career assistant for SE students featuring real-time Mock Interviews and a CV-to-Cover-Letter generator.",
      tags: ["React", "MeDo", "AI API", "Code-Free"],
      link: "https://youtu.be/U_-EDIVBby8?si=7qSFHwo4yTd9OKpt"
    },
    {
      title: "LifeOps AI",
      type: "Hackathon",
      desc: "Autonomous mission planning and reflection system. Uses AI to analyze logs and adapt future strategies automatically.",
      tags: ["Gemini 3 API", "FastAPI", "React", "AI"],
      link: "https://www.linkedin.com/in/vikash-udarsha" // (YouTube link එකක් නොතිබුණි, අවශ්‍ය නම් වෙනස් කරන්න)
    },
    {
      title: "ThinkSummary-AI",
      type: "Hackathon",
      desc: "Instant article summarizer powered by AI. Generates brief, detailed, or bulleted key points for research and study.",
      tags: ["AI", "Summarization", "Web", "API"],
      link: "https://youtu.be/JNPR10VeIvE?si=0ozSGz2kFGgpZgBg"
    },

    // --- Academic Projects ---
    {
      title: "Ceyloan Public Transit",
      type: "Academic",
      desc: "Smart Digital Transit Solution featuring dynamic fare calculation, real-time tracking, and QR digital ticketing.",
      tags: ["Android", "Firebase", "Google Maps API"],
      link: "https://github.com/vikashudarsha/cpt"
    },
    {
      title: "UniLink Chat Application",
      type: "Academic",
      desc: "Secure real-time messaging platform exclusively for verified university students using WebSockets.",
      tags: ["React Native", "Java", "WebSocket"],
      link: "https://www.linkedin.com/posts/vikash-udarsha_unilink-chatapp-universityapp-activity-7383378880994148352-nENO"
    },
    {
      title: "Interactive 2D Game",
      type: "Academic",
      desc: "Interactive 2D web-based game built from scratch as an academic assignment at Java Institute.",
      tags: ["HTML", "CSS", "JavaScript", "Game Dev"],
      link: "https://youtu.be/nbqwNtu_KgY?si=ehBjPnP8FPK_4fja"
    },
    {
      title: "Arduino Smart Car",
      type: "Academic",
      desc: "Hardware programming project involved in building and coding a smart car using Arduino microcontrollers.",
      tags: ["Arduino", "C++", "Hardware", "Robotics"],
      link: "https://youtu.be/NdT2RWJZfyY?si=Pr42JHeQ8jAHWk6Z"
    },

    // --- Self Learning Projects ---
    {
      title: "Intelligent Analytics Dashboard",
      type: "Self Learning",
      desc: "The Pulse of Operations: A comprehensive data visualization and analytics dashboard for system monitoring.",
      tags: ["Analytics", "Dashboard", "Data Vis"],
      link: "https://www.youtube.com/playlist?list=PLcqWG-baBw2HHWlj46yzCcaMicO49zgi0"
    },
    {
      title: "Uni Assistant AI",
      type: "Self Learning",
      desc: "A sleek web interface for local LLM interaction built with React and Tailwind v4, ensuring privacy and speed.",
      tags: ["React.js", "Ollama", "Qwen2.5", "Tailwind v4"],
      link: "https://www.linkedin.com/posts/vikash-udarsha_reactjs-tailwindcss-generativeai-activity-7448355062638243840-HKNK"
    },
    {
      title: "FuelGuardian AI",
      type: "Self Learning",
      desc: "Machine learning system utilizing the Random Forest algorithm to effectively predict fuel risk levels.",
      tags: ["Python", "Machine Learning", "Random Forest"],
      link: "https://www.linkedin.com/posts/vikash-udarsha_fuelguardianai-artificialintelligence-machinelearning-activity-7434667580960858113-S9is"
    },
    {
      title: "Laptop Price Predictor",
      type: "Self Learning",
      desc: "Machine learning web application built from scratch to predict laptop prices using trained models.",
      tags: ["Python", "Flask", "Machine Learning"],
      link: "https://youtube.com/shorts/xFqqmO2BdJk?si=PUYzxjqEDuIUYFwa"
    },
    {
      title: "Cross-Platform To-Do App",
      type: "Self Learning",
      desc: "Modern cross-platform mobile application with secure backend authentication and database integration.",
      tags: ["React Native", "Expo", "Java Servlets", "Hibernate"],
      link: "https://youtube.com/shorts/tfUS0T7B0Ak?si=mi-84yeYU_lVJpS5"
    },

    // --- Real Client Projects ---
    {
      title: "Invoice Generator System",
      type: "Real Client",
      desc: "Automated and comprehensive invoicing solution for streamlined business billing and records management.",
      tags: ["React", "State Management", "PDF Engine"],
      link: "#" 
    },
    {
      title: "Delivery Note System",
      type: "Real Client",
      desc: "Real-time delivery note generation and tracking system designed for local distribution businesses.",
      tags: ["Full Stack", "Business Logic", "Dashboard"],
      link: "#"
    }
  ];

  const certificates = [
    { title: "SLIIT Certificate AI/ML Stage 1", platform: "Code.sliit.org", link: "https://code.sliit.org/certificates/fsdsvwjbgd" },
    { title: "SLIIT Certificate AI/ML Stage 2", platform: "Code.sliit.org", link: "https://code.sliit.org/certificates/bg5avfavvo" },
    { title: "Stay Ahead of the AI Curve", platform: "Google", link: "https://coursera.org/share/041cec0a5af37ce01da7e6572e085a12" },
    { title: "Use AI Responsibly", platform: "Google", link: "https://coursera.org/share/b451029e9d939cb75f6726d8af384883" },
    { title: "Discover the Art of Prompting", platform: "Google", link: "https://coursera.org/share/f1471580ebda0b998c985c4b71b1dcc3" },
    { title: "Maximize Productivity With AI Tools", platform: "Google", link: "https://coursera.org/share/fb0ea9a1c0e20051ec5a18fd7c883fcc" },
    { title: "Introduction to AI", platform: "Google", link: "https://coursera.org/share/566c665a931e65e88bcc339cae4f8564" },
    { title: "Foundations of Project Management", platform: "Google", link: "https://coursera.org/share/08d53b92e82c3ae09d663a205f247d9b" },
    { title: "Python and Data Analyst", platform: "Udemy(CodeProLK)", link: "http://ude.my/UC-06f0b9d8-79dc-42d9-be74-34ba5e9f5e8b" },
    { title: "GitHub Models & Vision AI with Azure", platform: "LinkedIn", link: "https://www.linkedin.com/posts/vikash-udarsha_im-truly-grateful-to-have-been-a-part-of-activity-7434453310155255809-RXwc" },
    { title: "MS Champs Participation", platform: "LinkedIn", link: "https://www.linkedin.com/posts/vikash-udarsha_certificate-of-participation-ms-champs-activity-7406902300746842112-jtzX" }

   
  
  ];

  return (
    <div className="bg-[#0a192f] min-h-screen text-gray-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed w-full p-6 flex justify-between items-center z-40 bg-[#0a192f]/90 backdrop-blur-md border-b border-gray-800/50">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-cyan-400 font-mono font-bold text-2xl">VU</motion.div>
        <div className="flex gap-6 md:gap-8 text-[10px] md:text-xs font-mono tracking-widest uppercase">
          <a href="#about" className="hover:text-cyan-400 transition-colors">01. About</a>
          <a href="#work" className="hover:text-cyan-400 transition-colors">02. Work</a>
          <a href="#certificates" className="hover:text-cyan-400 transition-colors hidden md:block">03. Certs</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center pt-24">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative mb-10 cursor-pointer"
          onClick={() => setIsAI(!isAI)}
          title="Click to toggle AI mode"
        >
          <div className="absolute -inset-4 bg-cyan-400/20 rounded-full blur-2xl group-hover:bg-cyan-400/40 transition-all duration-500" />
          <img
            src={isAI ? "/ai-photo.jpg" : "/real-photo.jpg"} 
            alt="Vikash Udarsha"
            className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border-2 border-cyan-400/50 object-cover shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500"
          />
          <div className="absolute -bottom-2 -right-2 bg-cyan-500 text-navy-900 p-3 rounded-full shadow-lg">
             <Cpu size={20} className={isAI ? "animate-pulse" : ""} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-mono text-cyan-400 mb-4 tracking-[0.2em] text-xs md:text-sm">FINAL YEAR SOFTWARE ENGINEERING STUDENT</p>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tight">Vikash Udarsha</h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mt-2">Problem Solving Enthusiast.</h2>
          <p className="mt-6 max-w-xl mx-auto text-gray-400 leading-relaxed px-4">
            Passionate about solving problems and building digital solutions that bridge modern technology with real-world impact. Always eager to learn and explore new architectures.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6 items-center">
            <a href="#work" className="px-8 py-3 border border-cyan-400 text-cyan-400 font-mono text-sm rounded hover:bg-cyan-400/10 transition-all">
              View My Work
            </a>
            <div className="flex gap-5 items-center">
               <a href="https://github.com/vikashudarsha" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all">
                 <Globe size={24} /> <span className="text-sm">GitHub</span>
               </a>
               <a href="https://linkedin.com/in/vikash-udarsha" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all">
                 <User size={24} /> <span className="text-sm">LinkedIn</span>
               </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="work" className="max-w-6xl mx-auto py-24 px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap"><span className="text-cyan-400 font-mono text-xl tracking-tighter">01. </span> Featured Projects</h2>
          <div className="h-[1px] bg-gray-800 w-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </section>

      {/* Education & Skills Section */}
      <section id="about" className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">Education Journey</h2>
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-cyan-400/30">
              <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-1.5" />
              <h3 className="text-white font-bold text-lg">B.Eng in Software Engineering</h3>
              <p className="text-cyan-400 text-sm mt-1">IIC University of Technology (via Java Institute)</p>
              <p className="text-gray-500 text-xs mt-2 italic font-mono">Present (Final Year)</p>
            </div>
            <div className="relative pl-6 border-l-2 border-gray-700">
              <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[7px] top-1.5" />
              <h3 className="text-white font-bold text-lg">Higher Diploma in Software Engineering</h3>
              <p className="text-gray-400 text-sm mt-1">Java Institute for Advanced Technology</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">Technical Stack</h2>
          <div className="grid grid-cols-2 gap-4 font-mono text-sm">
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> React / Native</li>
              <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> Java / Spring Boot</li>
              <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> Node.js / Flask</li>
              <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> Python (ML)</li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> Tailwind CSS v4</li>
              <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> Firebase</li>
              <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> MySQL / PostgreSQL</li>
              <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> Ollama / Local LLMs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="max-w-6xl mx-auto py-12 px-6 mb-24">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold text-white whitespace-nowrap"><span className="text-cyan-400 font-mono text-xl tracking-tighter">02. </span> Certifications & Courses</h2>
          <div className="h-[1px] bg-gray-800 w-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => <CertificateCard key={i} {...cert} />)}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-900 bg-[#0a192f] text-center">
        <p className="font-mono text-[10px] md:text-xs text-gray-500 tracking-widest hover:text-cyan-400 transition-colors cursor-default">
          DESIGNED & DEVELOPED BY VIKASH UDARSHA © 2026
        </p>
      </footer>
    </div>
  );
}

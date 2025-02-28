import React, { useRef, useState, useEffect } from 'react';

import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Terminal, Filter, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
// import {Typed }from 'react-typed';
import { Typewriter } from 'react-simple-typewriter';

const AppLayout = () => {
 
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const awardsContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 {/* Category Color Mapping */}
const categoryColors: Record<"fullstack" | "ai" | "uiux" | "backend" | "mobile", { 
    border: string; 
    tag: string; 
    hover: string; 
    filter: string; 
    fill?: string;
  }> = {
    
  fullstack: {
    border: "border-pink-300",
    tag: "text-pink-300 border-pink-300",
    hover: "hover:border-pink-400 hover:shadow-pink-500/50",
    filter: "bg-pink-500 hover:bg-pink-500",
    fill:"bg-pink-800"
  },
  ai: {
    border: "border-yellow-200",
    tag: "text-yellow-200 border-yellow-200",
    hover: "hover:border-yellow-400 hover:shadow-yellow-500/50",
    filter: "bg-yellow-600 hover:bg-yellow-500",
    fill:"bg-yellow-800"

  },
 
  uiux: {
    border: "border-blue-300",
    tag: "text-blue-300 border-blue-300",
    hover: "hover:border-blue-400 hover:shadow-blue-500/50",
    filter: "bg-blue-600 hover:bg-blue-500",
    fill:"bg-blue-800"

  },
  backend: {
    border: "border-purple-500",
    tag: "text-purple-400 border-purple-500",
    hover: "hover:border-purple-400 hover:shadow-purple-500/50",
    filter: "bg-purple-600 hover:bg-purple-500",
    fill:"bg-purple-800"

  },
  mobile: {
    border: "border-green-300",
    tag: "text-green-300 border-green-300",
    hover: "hover:border-green-400 hover:shadow-green-500/50",
    filter: "bg-green-600 hover:bg-green-500",
    fill:"bg-green-800"

  }
};
  
const filterColors = {
  all: "bg-indigo-600 hover:bg-indigo-500 text-white",
  fullstack: "bg-pink-600 hover:bg-pink-500 text-white",
  ai: "bg-gray-600 hover:bg-gray-500 text-white",
  uiux: "bg-blue-600 hover:bg-blue-500 text-white",
  backend: "bg-purple-600 hover:bg-purple-500 text-white",
  mobile: "bg-green-600 hover:bg-green-500 text-white",
};


  

  useEffect(() => {
    const handleScroll = () => {
      if (experiencesRef.current) {
        const experiences = experiencesRef.current.querySelectorAll('.experience-card');
        experiences.forEach((exp, index) => {
          const rect = exp.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          
          if (isVisible && !visibleExperiences.includes(index)) {
            setVisibleExperiences(prev => [...prev, index]);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleExperiences]);

  const projects = [
    {
      title: "SkyPulse [Ongoing]",
      description: "A web app to monitor battery health metrics ensuring optimized performance and routing along with flight safety.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
      tags: ["React", "Node.js", "PostgreSQL","SUAVE","Python","FastAPI"],
      category: "fullstack",
      link: "/check-back-later"
    },
    {
      title: "Voluntr",
      description: "An Android app to make volunteering easy and accessible for the youths of Singapore, enhancing collaboration between respective organizations and volunteers.",
      image: "https://images.unsplash.com/photo-1675466583534-1755fbb2793b?auto=format&fit=crop&q=80&w=1600",
      tags: ["Java", "Firebase"],
      category: "mobile",
      link: "https://github.com/vanyaayy/Voluntr"
    },
    {
      title: "FoodWise",
      description: "A mobile app that helps university students make healthier food choices with budget-friendly meal planning, grocery management, and food recommendations.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
      tags: ["Figma"],
      category: "uiux",
      link: "https://youtu.be/emEebvrX19g"
    },
    
    {
      title: "Rentomatic",
      description: "A web app for the tenant-landlord service and request system, streamlining communication and digital tracking of requests in a centralized database, resulting in improved user experience and efficiency.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
      category: "fullstack",
      link: "#"
    },
    {
      title: "Sentiment Analysis Machine Learning Model",
      description: "Built a sequence labeling system using the Hidden Markov Model (HMM) for sentiment analysis in Spanish and Russian.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1600",
      tags: ["Python"],
      category: "ai",
      link: "https://github.com/vanyaayy/Sentiment-Analysis-ML-50.007"
    },
    {
      title: "Brewlogi (HackSingapore 2023)",
      description: "An Android app for Heineken to streamline ordering, optimize inventory, and reduce queues, promoting eco-friendly practices.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600",
      tags: ["Java", "Firebase"],
      category: "mobile",
      link: "https://github.com/vanyaayy/BrewLogi"
    },
    {
      title: "Blood Sugar Spike Prediction App [Ongoing] ",
      description: "A blood sugar spike prediction app using LSTM models to analyze glucose data and predict spikes in real time. Aims to help diabetic patients manage their blood sugar levels effectively.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      tags: ["Python", "PyTorch", "Streamlit"],
      category: "ai",
      link: "/check-back-later"
    },
    {
      title: "Database Management System ",
      description: "DBMS with optimized disk-stored data access, query processing, and transaction management. Designed core components like Heaps, Pages, and BufferPool, improved performance with caching strategies, and automated builds using Apache Ant.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      tags: ["Java", "Apache Ant", "DBMS"],
      category: "backend",
      link: "/check-back-later"
    },
    {
      title: "Web Proxy Server with Caching",
      description: "A functional web proxy server, forwarding client requests and relaying server responses. Implemented caching to improve response times and reduce bandwidth usage.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1600",
      tags: ["Python"],
      category: "backend",
      link: "/check-back-later"
    },
    
    {
      title: "Student Database Application",
      description: "A student database application implementing a REST-over-HTTP API for efficient data management and accessibility.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600",
      tags: ["Python", "FastAPI", "REST", "Docker","Postman"],
      category: "backend",
      link: "/check-back-later"
    }


  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  const experiences = [
    {
      year: "2024",
      summary: "Full Stack",
      role: "Software Engineer Intern",
      company: "Hope Technik",
      description: "Developed a web application with real-time video recording and streaming, integrated sensor data for live visualization, and optimized a robotic farm assistant with batch editing and workflow improvements.",
      skills: ["React", "TypeScript", "Chart.js", "Node.js", "PostgreSQL","FastAPI","Python" ],
      logo: "/hope.png",
      color: "from-blue-500 to-indigo-500"
    },
    {
      year: "2023",
      summary: ["Machine Learning", "Data Analysis"],
      role: "Digital Manufacturing Intern",
      company: "Rolls Royce",
      description: "Reduced errors by 25% with automation, deployed an 85% accurate ML model, optimized certification tracking, and enhanced shopfloor UI/UX.",
      skills: ["Python", "Pandas", "Numpy", "Scikit-learn"],
      logo: "/rr.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2022",
      summary: ["UI/UX", "Frontend Development"],
      role: "Software Engineer Intern",
      company: "Alok Leasings Pte Ltd",
      description: "Enhanced the website with new features, improved performance, and refined designs for a better user experience.",
      skills: ["Figma","React","JavaScript" ],
      logo: "/alok.png",
      color: "from-indigo-500 to-violet-500"
    },
    {
      year: "2022",
      summary: ["UI/UX"],
      role: "Design and Content Intern",
      company: "Uncommon Humans",
      description: "Enhanced the website with new features, improved performance, and refined designs for a better user experience.",
      skills: ["Figma","Adobe Photoshop"],
      logo: "/uncommon.jpeg",
      color: "from-amber-500 to-yellow-400"
    }
  ];

  const awards = [
    {
      title: "Honorable Mention",
      organization: "Singtel",
      date: "2023",
      description: "Received a cash prize of $1000 at the Singtel Information Systems Award Ceremony for outstanding achievement in creating the Voluntr Android application.",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1600"
    },
    {
      title: "Best Machine Learning Project",
      organization: "Singapore University of Technology & Design",
      date: "2023",
      description: "Achieved the highest accuracy across all cohorts in developing a bilingual sentiment analysis system (Spanish & Russian) using Hidden Markov Models in Python.",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1600"
    },
    {
      title: "Scholar's Award",
      organization: "Chief Minister of UP, India",
      date: "2021",
      description: "Received a cash prize of $2000 for securing All India Rank 4 competing against 50,000 students all over the country, achieving a score of 495/500.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1600"
    },
    
    
  ];

  const scrollAwards = (direction: "left" | "right") => {
    if (!awardsContainerRef.current) return;
  
    const container = awardsContainerRef.current;
    const itemWidth = container.clientWidth; // One full award at a time
    const maxScroll = container.scrollWidth - itemWidth; // Maximum scroll position
  
    let newScrollPosition =
      direction === "left"
        ? Math.max(container.scrollLeft - itemWidth, 0)
        : Math.min(container.scrollLeft + itemWidth, maxScroll);
  
    container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
  };
  
  
  

 

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
            >
              Vanya Jalan
            </button>
            <div className="flex gap-8">
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('awards')}
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Awards
              </button>
            </div>
          </div>
        </div>
      </nav>

    



{/* Hero Section */}
{/* Hero Section */}
<section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

  {/* Background Grid Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '60px 60px' }}></div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.2)_0,transparent_70%)]"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900"></div>

  {/* Subtle Tech Icons in Background */}
  <div className="absolute inset-0">
  {[
  { src: "/react.svg", size: "w-16 h-16", position: "top-[10%] left-[15%]" },
  { src: "/javascript.svg", size: "w-16 h-16", position: "top-[10%] left-[80%]" },
  { src: "/typescript.svg", size: "w-16 h-16", position: "top-[35%] left-[10%]" },
  { src: "/python.svg", size: "w-18 h-18", position: "top-[20%] left-[70%]" },
  { src: "/nodejs.svg", size: "w-16 h-16", position: "top-[85%] left-[20%]" },
  { src: "/tailwind.svg", size: "w-14 h-14", position: "top-[85%] left-[80%]" },
  { src: "/docker.svg", size: "w-14 h-14", position: "top-[50%] left-[40%]" },
  { src: "/nextjs.svg", size: "w-14 h-14", position: "top-[20%] left-[40%]" },
  { src: "/mongodb.svg", size: "w-16 h-16", position: "top-[85%] left-[50%]" },
  { src: "/postgresql.svg", size: "w-16 h-16", position: "top-[70%] left-[10%]" },
  { src: "/aws.svg", size: "w-14 h-14", position: "top-[15%] left-[55%]" },
].map((tech, index) => (
  <img 
    key={index} 
    src={tech.src} 
    alt="tech-logo"
    className={`absolute opacity-60 ${tech.size} ${tech.position} filter transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] z-30`}
  />
))}

  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      
      {/* Left Side - Name Card */}
      <div className="hero-content order-2 md:order-1">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30 animate-pulse"></div>
          <div className="hero-card p-8 rounded-2xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm relative">
            
            {/* Name and Typing Animation */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Vanya Jalan
            </h1>

            <p className="text-4xl md:text-3xl font-semibold text-gray-300">
              <Typewriter
                words={["Full Stack Developer", "UI/UX Designer", "Tech Enthusiast"]}
                loop={0}
                cursor={true}
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>

            <div className="flex gap-6 mt-4 mb-6">
              <a href="https://github.com/vanyaayy" className="hover:text-indigo-400 transition-transform transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vanyajalan" className="hover:text-indigo-400 transition-transform transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:vanyajalan02@gmail.com" className="hover:text-indigo-400 transition-transform transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>

            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Circular Image with Floating Animation */}
      <div className="hidden md:flex justify-center items-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gray-800 shadow-lg overflow-hidden animate-float">
          <img 
            src="/vanya.png" 
            alt="Vanya Jalan" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>









{/* Experience Timeline Section */}
<section 
  id="experience" 
  className="py-20 px-4 bg-gray-900/50 relative overflow-hidden before:absolute before:inset-0 
  before:bg-[radial-gradient(circle_at_30%_40%,rgba(79,70,229,0.15)_0,transparent_70%)] 
  before:opacity-50 before:pointer-events-none"
>
<div className="absolute inset-0 pointer-events-none">
{/* Generate multiple glowing dots */}
{[...Array(30)].map((_, index) => (
      <div
        key={index}
        className="absolute w-3 h-3 bg-indigo-500 rounded-full opacity-80 blur-sm animate-pulse"
        style={{
          top: `${10 + Math.random() * 80}%`, // Ensures dots stay between 10% - 90% of section height
          left: `${5 + Math.random() * 90}%`, 
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>

  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
      My Journey
    </h2>
    <div className="relative" ref={experiencesRef}>
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent"></div>

      {experiences.map((exp, index) => (
        <div 
          key={index} 
          className={`relative mb-16 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2 experience-card`}
        >
          <div 
            className={`p-6 bg-gray-800/50 rounded-lg border border-gray-700/30 backdrop-blur-sm transform transition-all duration-500 ${
              visibleExperiences.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            } hover:scale-105 hover:bg-gradient-to-br ${exp.color} relative`}
          >
            <div className="absolute inset-0 bg-gray-900/90 rounded-lg transition-opacity duration-300 group-hover:opacity-0"></div>
            
            {/* Company Logo - Positioned at Top Right */}
            {exp.logo && (
              <div className="absolute top-4 right-4 w-12 h-12">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`} 
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            )}

            <div className="relative z-10">
              {/* Year and Summary Tags (Now Inline) */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-indigo-400/10 text-indigo-200 rounded-full text-sm">
                  {exp.year}
                </span>
                
                {/* Summary as Tags */}
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(exp.summary) ? (
                    exp.summary.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gradient-to-r from-indigo-400 to-purple-400 text-white rounded-full text-sm">
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-400 to-purple-400 text-white rounded-full text-sm">
                      {exp.summary}
                    </span>
                  )}
                </div>
              </div>

              {/* Role, Company, and Description */}
              <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-gray-400 mb-2">{exp.company}</p>
              <p className="text-gray-500 mb-4">{exp.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm border border-indigo-700/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Skills Section */}
      <section className=" py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center -mt-20 mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="skill-card p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 backdrop-blur-sm">
              <Code2 className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold mb-2 text-center">Web Development</h3>
              <p className="text-gray-400 text-center">Building responsive and performant web applications using modern technologies.</p>
            </div>
            <div className="skill-card p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 backdrop-blur-sm">
              <Palette className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold mb-2 text-center">UI/UX Design</h3>
              <p className="text-gray-400 text-center">Creating intuitive and beautiful user interfaces with attention to detail.</p>
            </div>
            <div className="skill-card p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 backdrop-blur-sm">
              <Terminal className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold mb-2 text-center">Backend Development</h3>
              <p className="text-gray-400 text-center">Developing robust and scalable server-side solutions.</p>
            </div>
          </div>
        </div>
      </section>
  {/* Tech Stack Scrolling Carousel */}
<div className="relative  bg-gray-900 py-6">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15)_0,transparent_70%)]"></div>

  {/* Scrolling Wrapper */}
  <div className="flex gap-12 animate-scroll">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="flex gap-12 min-w-max">
        {[
          { src: "/react.svg", name: "React" },
          { src: "/javascript.svg", name: "JavaScript" },
          { src: "/typescript.svg", name: "TypeScript" },
          { src: "/python.svg", name: "Python" },
          { src: "/java.svg", name: "Java" },
          { src: "/nodejs.svg", name: "Node.js" },
          { src: "/nextjs.svg", name: "Next.js" },
          { src: "/tailwind.svg", name: "Tailwind CSS" },
          { src: "/docker.svg", name: "Docker" },
          { src: "/mongodb.svg", name: "MongoDB" },
          { src: "/postgresql.svg", name: "PostgreSQL" },
          { src: "/aws.svg", name: "AWS" },
          { src: "/pytorch.svg", name: "PyTorch" },
        ].map((tech, index) => (
          <div key={index} className="relative group">
            {/* Logo */}
            <img 
              src={tech.src} 
              alt={tech.name} 
              className="h-12 w-auto transition-transform duration-300 transform group-hover:scale-110" 
            />
            
            {/* Tooltip - Higher, Visible, and No Cut-Off */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg backdrop-blur-sm z-50">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
</div>





      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Featured Projects
          </h2>
          
          {/* Project Filters */}
        
{/* Project Filters */}
<div className="flex flex-wrap justify-center gap-4 mb-12">
  <button 
    onClick={() => setActiveFilter('all')}
    className={`px-4 py-2 rounded-full flex items-center gap-2 border border-gray-400 
      ${activeFilter === 'all' ? 'bg-gray-700 text-white' : 'bg-transparent text-gray-300'} 
      transition-all duration-300 ease-in-out transform hover:bg-gray-600 hover:text-white 
      hover:scale-105 hover:shadow-lg`}
    >
      <Filter size={16} />
      All Projects
    </button>

  {Object.entries(categoryColors).map(([category, colors]) => (
    <button 
      key={category}
      onClick={() => setActiveFilter(category)}
      className={`px-4 py-2 rounded-full flex items-center gap-2 border transition-all 
        duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg
        ${colors.border} ${colors.tag} 
        ${activeFilter === category ? colors.fill : "bg-transparent hover:" + colors.filter}`}
    >
      {category === "fullstack" ? "Web Development" :
       category === "ai" ? "AI/ML" :
       category === "uiux" ? "UI/UX Design" :
       category === "backend" ? "Backend/Networks" :
       category === "mobile" ? "Mobile Apps" : ""}
    </button>
  ))}
</div>

      


          {/* Projects Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {displayedProjects.map((project, index) => {
    const projectStyles = categoryColors[project.category] || categoryColors.fullstack;

    return (
      <div 
        key={index} 
        className={`card-3d group bg-gray-800/50 rounded-lg overflow-hidden border 
        ${projectStyles.border} backdrop-blur-sm h-full flex flex-col transition-all duration-300 
        hover:shadow-xl hover:scale-105 ${projectStyles.hover}`}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity 
          backdrop-blur-sm">
            <a href={project.link} className={`px-4 py-2 ${projectStyles.filter} text-white rounded-lg flex items-center gap-2 transition-colors`}>
              View Project <ExternalLink size={20} />
            </a>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
          <p className="text-gray-400 mb-4 text-center">{project.description}</p>
          <div className="flex flex-wrap gap-2 justify-center mt-auto">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex} 
                className={`px-3 py-1 bg-black/30 rounded-full text-sm border ${projectStyles.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  })}
</div>


          
          {/* Show More Button */}
          {filteredProjects.length > 6 && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center gap-2 transition-colors"
              >
                {showAllProjects ? 'Show Less' : 'Show More'} 
                <Plus size={20} className={`transform transition-transform ${showAllProjects ? 'rotate-45' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </section>




{/* Awards Section */}
<section id="awards" className="py-20 px-4 bg-gray-900/70 relative overflow-hidden">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
      Awards & Recognition
    </h2>

    <div className="relative">
      <div ref={awardsContainerRef} className="overflow-x-hidden relative">
        <div className="flex gap-8">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="award-card group relative overflow-hidden rounded-lg flex flex-col w-1/3 p-6 bg-gray-800/40 border border-gray-700/40 backdrop-blur-sm shadow-lg 
              transition-all duration-300 hover:shadow-xl hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-br from-transparent to-indigo-500/30 
              before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              {/* Trophy Icon (Adjusted Position) */}
              <div className="absolute top-3 left-6 w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M9 2v7.5"></path>
                  <path d="M15 2v7.5"></path>
                  <path d="M12 2v10"></path>
                  <path d="M12 12a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4z"></path>
                </svg>
              </div>

              {/* Award Details - Year, Title & Organization */}
              <div className="text-center mt-6">
                <span className="text-indigo-300 text-sm block mb-1">{award.date}</span>
                <h3 className="text-xl font-semibold text-white">{award.title}</h3>
                <p className="text-gray-400 text-sm mb-4 font-bold">{award.organization}</p>
              </div>

              {/* Award Description (Top-Aligned for Consistency) */}
              <div className="flex-1 flex items-start">
                <p className="text-indigo-200 text-lg">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/vanyaayy" className="text-gray-400 hover:text-indigo-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vanyajalan" className="text-gray-400 hover:text-indigo-400 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vanyajalan02@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-500">© 2024</p>
        </div>
      </footer>
    
 </div>
  );
  

}

export default AppLayout;
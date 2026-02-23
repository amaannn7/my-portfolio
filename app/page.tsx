import { Monitor, Server, Smartphone, Database, Cloud, Wrench, Github, Linkedin, Mail, Phone, MapPin, Flag, Zap, Timer, Gauge, Trophy, Radio, Globe, ExternalLink, Download } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import TypingEffect from './components/TypingEffect';
import ScrollReveal from './components/ScrollReveal';
import StatCounter from './components/StatCounter';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white grid-overlay">
      <LoadingScreen />
      <ScrollProgress />
      <BackToTop />

      {/* ===== RACING ANIMATIONS ===== */}
      <div className="racing-car"></div>
      <div className="speed-trail speed-trail-1"></div>
      <div className="speed-trail speed-trail-2"></div>
      <div className="speed-trail speed-trail-3"></div>

      {/* ===== NAVIGATION — RACE CONTROL BAR ===== */}
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/80 border-b border-f1-red/20 z-50 animate-slide-down">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Driver tag */}
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-f1-red rounded-full"></div>
            <h1 className="font-[var(--font-orbitron)] text-lg font-bold tracking-widest text-white">
              AMAAN <span className="text-f1-red">YUSUF</span>
            </h1>
            <span className="hidden sm:block ml-2 px-2 py-0.5 text-[10px] font-bold tracking-widest bg-f1-red/20 text-f1-red border border-f1-red/30 rounded font-[var(--font-orbitron)]">
              P1
            </span>
            <div className="hidden sm:flex items-center gap-1.5 ml-3 px-2.5 py-1 bg-f1-green/5 border border-f1-green/20 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-f1-green led-blink"></div>
              <span className="text-[9px] font-[var(--font-orbitron)] text-f1-green tracking-wider">AVAILABLE</span>
            </div>
          </div>

          {/* Nav links styled as sector markers */}
          <div className="flex gap-6 items-center">
            {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-gray-400 hover:text-f1-red transition-colors duration-300 relative group tracking-wider uppercase"
              >
                <span className="text-f1-red/50 text-[10px] font-[var(--font-orbitron)] mr-1">S{i + 1}</span>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-f1-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
        {/* Thin red racing line under nav */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-f1-red to-transparent opacity-50"></div>
      </nav>

      {/* ===== HERO SECTION — STARTING GRID ===== */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden diagonal-bg">
        {/* Background race number watermark */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 text-[25rem] font-[var(--font-orbitron)] font-black text-white/[0.02] select-none leading-none pointer-events-none">
          07
        </div>
        {/* Racing stripe accents */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-f1-red/30 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-f1-red/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-f1-red/25 to-transparent"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Profile Image — Driver Card */}
          <div className="flex justify-center md:justify-end animate-scale-in order-2 md:order-1">
            <div className="relative group">
              {/* DRS glow frame */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl border-2 border-f1-red/30 overflow-hidden drs-glow group-hover:border-f1-red/60 transition-all duration-500 bg-gradient-to-br from-f1-carbon-light to-black">
                <img
                  src="/profile.jpg"
                  alt="Amaan Yusuf"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
              {/* Race number badge */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-f1-red rounded-xl flex items-center justify-center shadow-lg shadow-f1-red/30">
                <span className="font-[var(--font-orbitron)] text-2xl font-black text-white">07</span>
              </div>
              {/* Telemetry strip */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-f1-red/20 rounded-lg px-4 py-2 flex justify-between items-center">
                <div className="text-[10px] font-[var(--font-orbitron)] text-f1-red tracking-wider">DRIVER</div>
                <div className="text-xs font-bold text-white tracking-wide">AMAAN YUSUF</div>
              </div>
            </div>
          </div>

          {/* Hero Text — Race Start */}
          <div className="text-center md:text-left space-y-8 order-1 md:order-2">
            {/* Start lights */}
            <div className="flex gap-3 justify-center md:justify-start animate-fade-in">
              {[1, 2, 3, 4, 5].map((light) => (
                <div key={light} className="w-4 h-4 rounded-full bg-f1-red/80 shadow-lg shadow-f1-red/50" style={{ animationDelay: `${light * 0.2}s` }}></div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-sm font-[var(--font-orbitron)] text-f1-red tracking-[0.3em] uppercase animate-fade-in">
                SOFTWARE ENGINEER
              </p>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter animate-slide-up leading-[0.85]">
                <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                  AMAAN
                </span>
                <br />
                <span className="bg-gradient-to-b from-f1-red to-f1-red-dark bg-clip-text text-transparent">
                  YUSUF
                </span>
              </h1>
              <div className="flex items-center gap-3 justify-center md:justify-start animate-slide-up animate-delay-200">
                <div className="h-[1px] w-8 bg-f1-red"></div>
                <p className="text-lg text-gray-400 font-[var(--font-orbitron)] text-sm tracking-wider">
                  <TypingEffect
                    texts={['FULL-STACK DEVELOPER', 'MOBILE DEVELOPER', 'UNDERGRADUATE',]}
                    className="text-sm tracking-wider"
                  />
                </p>
                <div className="h-[1px] w-8 bg-f1-red"></div>
              </div>
            </div>

            <p className="text-base text-gray-400 leading-relaxed max-w-lg animate-fade-in animate-delay-300">
              Racing through the digital grid with modern web and mobile technologies.
              Clean code. Peak performance. Podium-worthy results.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-scale-in animate-delay-400">
              <a
                href="#projects"
                className="overtake-btn px-8 py-4 bg-f1-red hover:bg-f1-red-dark text-white rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-f1-red/30 tracking-wider uppercase font-[var(--font-orbitron)]"
              >
                <Zap className="w-4 h-4 inline mr-2" />
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-f1-red/30 hover:border-f1-red text-white rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 hover:bg-f1-red/10 tracking-wider uppercase font-[var(--font-orbitron)]"
              >
                <Radio className="w-4 h-4 inline mr-2" />
                Contact
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 border-2 border-white/10 hover:border-white/40 text-gray-300 hover:text-white rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 hover:bg-white/5 tracking-wider uppercase font-[var(--font-orbitron)]"
              >
                <Download className="w-4 h-4 inline mr-2" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION — DRIVER PROFILE ===== */}
      <section id="about" className="py-32 px-6 border-t border-f1-red/10 relative">
        {/* Checkered line */}
        <div className="checkered-line w-full absolute top-0 left-0"></div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Flag className="w-8 h-8 text-f1-red" />
            <h2 className="text-5xl font-bold animate-slide-right">
              <span className="bg-gradient-to-r from-f1-red to-white bg-clip-text text-transparent font-[var(--font-orbitron)]">
                DRIVER PROFILE
              </span>
            </h2>
          </div>

          <ScrollReveal variant="fade-up">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 animate-slide-left animate-delay-100">
                <div className="racing-stripe-left pl-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a dedicated Software Engineering undergraduate with a passion for building innovative
                    solutions. My expertise spans across modern web frameworks, mobile development, and cloud technologies.
                  </p>
                </div>
                <div className="racing-stripe-left pl-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Currently pursuing BEng (Hons) at Informatics Institute of Technology, I'm actively seeking
                    internship opportunities to contribute to impactful projects and push beyond limits.
                  </p>
                </div>
              </div>

              {/* Driver data card */}
              <div className="space-y-3 animate-slide-right animate-delay-200">
                <div className="bg-f1-carbon-light border border-f1-red/20 rounded-xl p-1 scan-overlay">
                  <div className="bg-f1-red/10 border border-f1-red/10 rounded-lg px-4 py-2 flex items-center justify-between">
                    <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red tracking-widest">DRIVER DATA</span>
                    <span className="text-[10px] font-[var(--font-orbitron)] text-gray-500">2026 SEASON</span>
                  </div>
                  <div className="divide-y divide-white/5">
                    <div className="flex items-center gap-4 px-5 py-4 hover:bg-white/5 transition-all rounded-lg">
                      <MapPin className="w-5 h-5 text-f1-red flex-shrink-0" />
                      <div>
                        <p className="text-xs font-[var(--font-orbitron)] text-gray-500 tracking-wider">LOCATION</p>
                        <p className="text-sm font-semibold text-white">Mount Lavinia, Sri Lanka</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 px-5 py-4 hover:bg-white/5 transition-all rounded-lg">
                      <Mail className="w-5 h-5 text-f1-red flex-shrink-0" />
                      <div>
                        <p className="text-xs font-[var(--font-orbitron)] text-gray-500 tracking-wider">TEAM RADIO</p>
                        <p className="text-sm font-semibold text-white">amaan.yusuf4522@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 px-5 py-4 hover:bg-white/5 transition-all rounded-lg">
                      <Trophy className="w-5 h-5 text-f1-red flex-shrink-0" />
                      <div>
                        <p className="text-xs font-[var(--font-orbitron)] text-gray-500 tracking-wider">STATUS</p>
                        <p className="text-sm font-semibold text-f1-green">Open to Opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Stat Counters ── */}
          <ScrollReveal variant="fade-up" delay={150} className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'PROJECTS', value: 3, suffix: '+' },
                { label: 'TECHNOLOGIES', value: 16, suffix: '+' },
                { label: 'YEARS CODING', value: 3, suffix: '+' },
                { label: 'INTERNSHIPS', value: 1, suffix: '' },
              ].map(({ label, value, suffix }) => (
                <div key={label} className="bg-f1-carbon-light border border-f1-red/15 rounded-2xl p-6 text-center hover:border-f1-red/40 transition-all duration-300 halo-glow">
                  <p className="text-4xl font-black font-[var(--font-orbitron)] text-f1-red mb-1">
                    <StatCounter to={value} suffix={suffix} />
                  </p>
                  <p className="text-[10px] font-[var(--font-orbitron)] text-gray-500 tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TECH STACK MARQUEE — PIT LANE ===== */}
      <section className="py-20 border-t border-f1-red/10 overflow-hidden relative">
        <div className="mb-12">
          <p className="text-center text-xs font-[var(--font-orbitron)] text-f1-red/70 tracking-[0.4em] uppercase">
            &#9873; PIT LANE &mdash; TECHNOLOGIES I RACE WITH &#9873;
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="flex gap-16 animate-scroll">
            {[1, 2].map((set) => (
              <div key={set} className="flex gap-16 items-center min-w-max">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="React" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="TypeScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="JavaScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Node.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300 invert" alt="Express" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Java" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Spring" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Python" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Flutter" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="MongoDB" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="MySQL" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="PostgreSQL" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Firebase" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300 invert" alt="AWS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Azure" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="h-12 w-12 opacity-60 hover:opacity-100 transition-opacity duration-300" alt="Git" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION — RACE TELEMETRY ===== */}
      <section id="skills" className="py-32 px-6 border-t border-f1-red/10 relative">
        <div className="checkered-line w-full absolute top-0 left-0"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-2">
              <Gauge className="w-8 h-8 text-f1-red" />
              <h2 className="text-5xl font-bold animate-slide-up font-[var(--font-orbitron)]">
                <span className="bg-gradient-to-r from-f1-red to-white bg-clip-text text-transparent">
                  SKILLS
                </span>
              </h2>
            </div>
            <p className="text-xs font-[var(--font-orbitron)] text-gray-500 tracking-[0.3em]">TECHNICAL EXPERTISE</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <ScrollReveal variant="fade-up" delay={0}>
              <div className="bg-f1-carbon-light/80 border border-f1-red/15 rounded-2xl p-8 hover:border-f1-red/50 transition-all duration-500 hover:scale-[1.02] group halo-glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-f1-red/10 rounded-xl group-hover:bg-f1-red/20 transition-all duration-300 border border-f1-red/20">
                    <Monitor className="w-7 h-7 text-f1-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Frontend</h3>
                    <p className="text-[10px] font-[var(--font-orbitron)] text-f1-red/60 tracking-widest">SECTOR 1</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'React', icon: 'react/react-original' },
                    { name: 'TypeScript', icon: 'typescript/typescript-original' },
                    { name: 'JavaScript', icon: 'javascript/javascript-original' },
                  ].map((tech) => (
                    <span key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold hover:bg-f1-red/10 hover:text-white hover:border-f1-red/30 transition-all border border-white/10">
                      <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`} className="w-5 h-5" alt={tech.name} />
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[9px] font-[var(--font-orbitron)] text-gray-600 tracking-[0.2em]">PROFICIENCY</span>
                    <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red font-bold">85%</span>
                  </div>
                  <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-f1-red to-f1-red/50 rounded-full telemetry-bar" style={{ '--fill-width': '85%' } as React.CSSProperties} />
                  </div>
                </div>
              </div></ScrollReveal>
            {/* Backend */}
            <ScrollReveal variant="fade-up" delay={80}>
              <div className="bg-f1-carbon-light/80 border border-f1-red/15 rounded-2xl p-8 hover:border-f1-red/50 transition-all duration-500 hover:scale-[1.02] group halo-glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-f1-red/10 rounded-xl group-hover:bg-f1-red/20 transition-all duration-300 border border-f1-red/20">
                    <Server className="w-7 h-7 text-f1-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Backend</h3>
                    <p className="text-[10px] font-[var(--font-orbitron)] text-f1-red/60 tracking-widest">SECTOR 2</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Node.js', icon: 'nodejs/nodejs-original' },
                    { name: 'Express', icon: 'express/express-original', invert: true },
                    { name: 'Java', icon: 'java/java-original' },
                    { name: 'Spring', icon: 'spring/spring-original' },
                    { name: 'Python', icon: 'python/python-original' },
                  ].map((tech) => (
                    <span key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold hover:bg-f1-red/10 hover:text-white hover:border-f1-red/30 transition-all border border-white/10">
                      <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`} className={`w-5 h-5 ${tech.invert ? 'invert' : ''}`} alt={tech.name} />
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[9px] font-[var(--font-orbitron)] text-gray-600 tracking-[0.2em]">PROFICIENCY</span>
                    <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red font-bold">80%</span>
                  </div>
                  <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-f1-red to-f1-red/50 rounded-full telemetry-bar" style={{ '--fill-width': '80%' } as React.CSSProperties} />
                  </div>
                </div>
              </div></ScrollReveal>
            {/* Mobile */}
            <ScrollReveal variant="fade-up" delay={160}>
              <div className="bg-f1-carbon-light/80 border border-f1-red/15 rounded-2xl p-8 hover:border-f1-red/50 transition-all duration-500 hover:scale-[1.02] group halo-glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-f1-red/10 rounded-xl group-hover:bg-f1-red/20 transition-all duration-300 border border-f1-red/20">
                    <Smartphone className="w-7 h-7 text-f1-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Mobile</h3>
                    <p className="text-[10px] font-[var(--font-orbitron)] text-f1-red/60 tracking-widest">SECTOR 3</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold hover:bg-f1-red/10 hover:text-white hover:border-f1-red/30 transition-all border border-white/10">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="w-5 h-5" alt="Flutter" />
                    Flutter
                  </span>
                </div>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[9px] font-[var(--font-orbitron)] text-gray-600 tracking-[0.2em]">PROFICIENCY</span>
                    <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red font-bold">75%</span>
                  </div>
                  <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-f1-red to-f1-red/50 rounded-full telemetry-bar" style={{ '--fill-width': '75%' } as React.CSSProperties} />
                  </div>
                </div>
              </div></ScrollReveal>
            {/* Databases */}
            <ScrollReveal variant="fade-up" delay={0}>
              <div className="bg-f1-carbon-light/80 border border-f1-red/15 rounded-2xl p-8 hover:border-f1-red/50 transition-all duration-500 hover:scale-[1.02] group halo-glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-f1-red/10 rounded-xl group-hover:bg-f1-red/20 transition-all duration-300 border border-f1-red/20">
                    <Database className="w-7 h-7 text-f1-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Databases</h3>
                    <p className="text-[10px] font-[var(--font-orbitron)] text-f1-red/60 tracking-widest">DATA CENTER</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
                    { name: 'MySQL', icon: 'mysql/mysql-original' },
                    { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
                    { name: 'Firebase', icon: 'firebase/firebase-plain' },
                  ].map((tech) => (
                    <span key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold hover:bg-f1-red/10 hover:text-white hover:border-f1-red/30 transition-all border border-white/10">
                      <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`} className="w-5 h-5" alt={tech.name} />
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[9px] font-[var(--font-orbitron)] text-gray-600 tracking-[0.2em]">PROFICIENCY</span>
                    <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red font-bold">78%</span>
                  </div>
                  <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-f1-red to-f1-red/50 rounded-full telemetry-bar" style={{ '--fill-width': '78%' } as React.CSSProperties} />
                  </div>
                </div>
              </div></ScrollReveal>
            {/* Cloud */}
            <ScrollReveal variant="fade-up" delay={80}>
              <div className="bg-f1-carbon-light/80 border border-f1-red/15 rounded-2xl p-8 hover:border-f1-red/50 transition-all duration-500 hover:scale-[1.02] group halo-glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-f1-red/10 rounded-xl group-hover:bg-f1-red/20 transition-all duration-300 border border-f1-red/20">
                    <Cloud className="w-7 h-7 text-f1-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Cloud</h3>
                    <p className="text-[10px] font-[var(--font-orbitron)] text-f1-red/60 tracking-widest">CLOUD INFRA</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-plain-wordmark', invert: true },
                    { name: 'Azure', icon: 'azure/azure-original' },
                    { name: 'Vercel', icon: 'vercel/vercel-original', invert: true },
                  ].map((tech) => (
                    <span key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold hover:bg-f1-red/10 hover:text-white hover:border-f1-red/30 transition-all border border-white/10">
                      <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`} className={`w-5 h-5 ${tech.invert ? 'invert' : ''}`} alt={tech.name} />
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[9px] font-[var(--font-orbitron)] text-gray-600 tracking-[0.2em]">PROFICIENCY</span>
                    <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red font-bold">68%</span>
                  </div>
                  <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-f1-red to-f1-red/50 rounded-full telemetry-bar" style={{ '--fill-width': '68%' } as React.CSSProperties} />
                  </div>
                </div>
              </div></ScrollReveal>
            {/* Tools */}
            <ScrollReveal variant="fade-up" delay={160}>
              <div className="bg-f1-carbon-light/80 border border-f1-red/15 rounded-2xl p-8 hover:border-f1-red/50 transition-all duration-500 hover:scale-[1.02] group halo-glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-f1-red/10 rounded-xl group-hover:bg-f1-red/20 transition-all duration-300 border border-f1-red/20">
                    <Wrench className="w-7 h-7 text-f1-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Tools</h3>
                    <p className="text-[10px] font-[var(--font-orbitron)] text-f1-red/60 tracking-widest">PIT CREW</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Git', icon: 'git/git-original' },
                    { name: 'GitHub', icon: 'github/github-original', invert: true },
                    { name: 'Postman', icon: 'postman/postman-original' },
                  ].map((tech) => (
                    <span key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold hover:bg-f1-red/10 hover:text-white hover:border-f1-red/30 transition-all border border-white/10">
                      <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`} className={`w-5 h-5 ${tech.invert ? 'invert' : ''}`} alt={tech.name} />
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[9px] font-[var(--font-orbitron)] text-gray-600 tracking-[0.2em]">PROFICIENCY</span>
                    <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red font-bold">90%</span>
                  </div>
                  <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-f1-red to-f1-red/50 rounded-full telemetry-bar" style={{ '--fill-width': '90%' } as React.CSSProperties} />
                  </div>
                </div>
              </div></ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION — GRAND PRIX RESULTS ===== */}
      <section id="projects" className="py-32 px-6 border-t border-f1-red/10 relative">
        <div className="checkered-line w-full absolute top-0 left-0"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-2">
              <Trophy className="w-8 h-8 text-f1-red" />
              <h2 className="text-5xl font-bold animate-slide-up font-[var(--font-orbitron)]">
                <span className="bg-gradient-to-r from-f1-red to-white bg-clip-text text-transparent">
                  PROJECTS
                </span>
              </h2>
            </div>
            <p className="text-xs font-[var(--font-orbitron)] text-gray-500 tracking-[0.3em]">FEATURED WORK</p>
          </div>

          <div className="space-y-12">
            {/* Project 1 — Race 1 */}
            <ScrollReveal variant="fade-up" delay={0}>
              <div className="group bg-f1-carbon-light/50 border border-f1-red/15 rounded-3xl overflow-hidden hover:border-f1-red/40 transition-all duration-500 halo-glow">
                <div className="card-accent-bar w-full"></div>
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-80 md:h-auto bg-gradient-to-br from-f1-red/10 to-black overflow-hidden flex items-center justify-center">
                    <img src="/helmet.png" alt="Helmet Store" loading="lazy" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    {/* Race position badge */}
                    <div className="absolute top-6 right-6 bg-f1-red px-4 py-2 rounded-lg text-white text-xs font-[var(--font-orbitron)] font-bold shadow-lg shadow-f1-red/30">
                      RACE 01 &bull; 2025
                    </div>
                    {/* Fastest lap indicator */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-500/30">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span className="text-[10px] font-[var(--font-orbitron)] text-purple-400 tracking-wider">FASTEST LAP</span>
                    </div>
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="md:col-span-3 p-10">
                    <div className="flex items-center gap-3 mb-2">
                      <Timer className="w-4 h-4 text-f1-red" />
                      <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red tracking-widest">FULL-STACK APPLICATION</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">E-Commerce Helmet Store</h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-6">
                      Full-stack e-commerce platform featuring secure payment integration, comprehensive
                      admin dashboard, and real-time inventory management. Built with modern technologies
                      for optimal performance and scalability.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {[
                        { name: 'React', icon: 'react/react-original' },
                        { name: 'Node.js', icon: 'nodejs/nodejs-original' },
                        { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
                      ].map((tech) => (
                        <span key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-f1-red/10 text-white rounded-lg text-sm font-semibold border border-f1-red/20">
                          <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`} className="w-4 h-4" alt="" />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    <a href="https://tavisgomotors.lk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-f1-red hover:bg-f1-red-dark text-white rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-f1-red/20">
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Site
                    </a>
                  </div>
                </div>
              </div>

            </ScrollReveal>
            {/* Project 2 — Race 2 */}
            <ScrollReveal variant="fade-up" delay={100}>
              <div className="group bg-f1-carbon-light/50 border border-f1-red/15 rounded-3xl overflow-hidden hover:border-f1-red/40 transition-all duration-500 halo-glow">
                <div className="card-accent-bar w-full"></div>
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-3 p-10 order-2 md:order-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="w-4 h-4 text-f1-red" />
                      <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red tracking-widest">CORPORATE PLATFORM</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Oracle Services Corporate Website</h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-6">
                      Professional corporate website for Sri Lanka's leading multi-sector service provider,
                      specializing in security services with 1000+ trained guards operating 24/7
                      nationwide. Built with Next.js for optimal performance and user experience.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {[
                        { name: 'Next.js', icon: 'nextjs/nextjs-original', invert: true },
                        { name: 'React', icon: 'react/react-original' },
                        { name: 'TypeScript', icon: 'typescript/typescript-original' },
                      ].map((tech) => (
                        <span key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-f1-red/10 text-white rounded-lg text-sm font-semibold border border-f1-red/20">
                          <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`} className={`w-4 h-4 ${tech.invert ? 'invert' : ''}`} alt="" />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href="https://oracleservices.lk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-f1-red hover:bg-f1-red-dark text-white rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-f1-red/20">
                        <ExternalLink className="w-4 h-4" />
                        Visit Live Site
                      </a>
                      <a href="https://github.com/amaannn7/oracle-security.git" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 border border-white/20">
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </div>
                  </div>
                  <div className="md:col-span-2 relative h-80 md:h-auto bg-gradient-to-br from-f1-red/10 to-black overflow-hidden order-1 md:order-2 flex items-center justify-center">
                    <img src="/oracle.png" alt="Oracle Services" loading="lazy" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute top-6 left-6 bg-f1-red px-4 py-2 rounded-lg text-white text-xs font-[var(--font-orbitron)] font-bold shadow-lg shadow-f1-red/30">
                      RACE 02 &bull; 2025
                    </div>
                    <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-f1-green/30">
                      <div className="w-2 h-2 rounded-full bg-f1-green animate-pulse"></div>
                      <span className="text-[10px] font-[var(--font-orbitron)] text-f1-green tracking-wider">LIVE</span>
                    </div>
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>

            </ScrollReveal>
            {/* Project 3 — Race 3 */}
            <ScrollReveal variant="fade-up" delay={200}>
              <div className="group bg-f1-carbon-light/50 border border-f1-red/15 rounded-3xl overflow-hidden hover:border-f1-red/40 transition-all duration-500 halo-glow">
                <div className="card-accent-bar w-full"></div>
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-64 md:h-full bg-gradient-to-br from-f1-red/10 to-black overflow-hidden flex items-center justify-center">
                    <img src="/vocabulary.PNG" alt="AI Vocabulary App" loading="lazy" className="h-48 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute top-6 right-6 bg-f1-red px-4 py-2 rounded-lg text-white text-xs font-[var(--font-orbitron)] font-bold shadow-lg shadow-f1-red/30">
                      RACE 03 &bull; 2024
                    </div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-f1-green/30">
                      <div className="w-2 h-2 rounded-full bg-f1-green animate-pulse"></div>
                      <span className="text-[10px] font-[var(--font-orbitron)] text-f1-green tracking-wider">LIVE</span>
                    </div>
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="md:col-span-3 p-10">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-4 h-4 text-f1-red" />
                      <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red tracking-widest">MOBILE + AI POWERED</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">AI Vocabulary Learning App</h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-6">
                      Mobile-first learning platform with AI-powered personalization, gamified quizzes,
                      and adaptive learning paths. Features intelligent spaced repetition for enhanced
                      vocabulary retention and learning efficiency.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: 'Flutter', icon: 'flutter/flutter-original' },
                        { name: 'Express', icon: 'express/express-original', invert: true },
                        { name: 'MySQL', icon: 'mysql/mysql-original' },
                      ].map((tech) => (
                        <span key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-f1-red/10 text-white rounded-lg text-sm font-semibold border border-f1-red/20">
                          <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`} className={`w-4 h-4 ${tech.invert ? 'invert' : ''}`} alt="" />
                          {tech.name}
                        </span>
                      ))}
                      <span className="px-4 py-2 bg-f1-red/10 text-white rounded-lg text-sm font-semibold border border-f1-red/20">
                        AI/ML
                      </span>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <a href="https://lexfy.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-f1-red hover:bg-f1-red-dark text-white rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-f1-red/20">
                        <ExternalLink className="w-4 h-4" />
                        Visit Live Site
                      </a>
                      <a href="https://github.com/amaannn7/lexfy-vocabulary-enhancement-app.git" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 border border-white/20">
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div></ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE & EDUCATION — CAREER STANDINGS ===== */}
      <section className="py-32 px-6 border-t border-f1-red/10 relative">
        <div className="checkered-line w-full absolute top-0 left-0"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Experience — Race History */}
          <div className="animate-slide-right animate-delay-100">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-f1-red rounded-full"></div>
              <h2 className="text-4xl font-bold font-[var(--font-orbitron)]">
                <span className="bg-gradient-to-r from-f1-red to-white bg-clip-text text-transparent">
                  EXPERIENCE
                </span>
              </h2>
            </div>
            <div className="bg-f1-carbon-light border border-f1-red/20 rounded-2xl overflow-hidden hover:border-f1-red/40 transition-all duration-500 halo-glow">
              {/* Header strip */}
              <div className="bg-f1-red/10 border-b border-f1-red/20 px-6 py-3 flex items-center justify-between">
                <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red tracking-widest">EXPERIENCE LOG</span>
                <span className="text-[10px] font-[var(--font-orbitron)] text-gray-500">2025</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Summer Intern</h3>
                <p className="text-f1-red font-semibold mb-1 text-sm">Rizing (A Wipro Company)</p>
                <p className="text-gray-500 mb-6 text-xs font-[var(--font-orbitron)] tracking-wider">JUL 2025 — AUG 2025</p>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-f1-red mt-0.5">&#9654;</span>
                    <span>Participated in corporate workshops and gained industry exposure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-f1-red mt-0.5">&#9654;</span>
                    <span>Conducted site visits to leading technology companies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-f1-red mt-0.5">&#9654;</span>
                    <span>Enhanced communication skills through collaborative projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education — Championship Standings */}
          <div className="animate-slide-left animate-delay-200">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-f1-red rounded-full"></div>
              <h2 className="text-4xl font-bold font-[var(--font-orbitron)]">
                <span className="bg-gradient-to-r from-f1-red to-white bg-clip-text text-transparent">
                  EDUCATION
                </span>
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-f1-carbon-light border border-f1-red/20 rounded-2xl overflow-hidden hover:border-f1-red/40 transition-all duration-500 halo-glow">
                <div className="bg-f1-red/10 border-b border-f1-red/20 px-6 py-3 flex items-center justify-between">
                  <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red tracking-widest">CURRENT SEASON</span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-f1-green animate-pulse"></div>
                    <span className="text-[10px] font-[var(--font-orbitron)] text-f1-green">ACTIVE</span>
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">BEng (Hons) Software Engineering</h3>
                  <p className="text-f1-red text-sm font-semibold">Informatics Institute of Technology</p>
                  <p className="text-gray-500 text-xs font-[var(--font-orbitron)] tracking-wider mt-1">2023 — PRESENT</p>
                </div>
              </div>
              <div className="bg-f1-carbon-light border border-f1-red/20 rounded-2xl overflow-hidden hover:border-f1-red/40 transition-all duration-500 halo-glow">
                <div className="bg-white/5 border-b border-white/10 px-6 py-3">
                  <span className="text-[10px] font-[var(--font-orbitron)] text-gray-400 tracking-widest">PREVIOUS SEASON</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">G.C.E. Advanced Levels</h3>
                  <p className="text-gray-400 text-sm font-semibold">Defence Services College</p>
                  <p className="text-gray-500 text-xs font-[var(--font-orbitron)] tracking-wider mt-1">2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAREER TIMELINE ===== */}
      <section className="py-32 px-6 border-t border-f1-red/10 relative">
        <div className="checkered-line w-full absolute top-0 left-0"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-2">
              <Flag className="w-8 h-8 text-f1-red" />
              <h2 className="text-5xl font-bold animate-slide-up font-[var(--font-orbitron)]">
                <span className="bg-gradient-to-r from-f1-red to-white bg-clip-text text-transparent">
                  TIMELINE
                </span>
              </h2>
            </div>
            <p className="text-xs font-[var(--font-orbitron)] text-gray-500 tracking-[0.3em]">CAREER JOURNEY</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* ── Career column ── */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 bg-f1-red rounded-full"></div>
                <h3 className="text-xl font-bold font-[var(--font-orbitron)] text-white tracking-wider">CAREER</h3>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-f1-red via-f1-red/40 to-transparent"></div>

                {/* Education */}
                <div className="relative mb-8">
                  <div className="absolute -left-[1.625rem] top-5 w-3.5 h-3.5 rounded-full bg-f1-red border-4 border-black shadow-[0_0_8px_rgba(225,6,0,0.6)]"></div>
                  <div className="bg-f1-carbon-light border border-f1-red/15 rounded-2xl p-6 hover:border-f1-red/40 transition-all duration-500 halo-glow">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red tracking-widest">2023 — PRESENT</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-f1-green/10 text-f1-green border border-f1-green/20 font-[var(--font-orbitron)] tracking-wider">ACTIVE</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mt-1 mb-1">BEng (Hons) Software Engineering</h4>
                    <p className="text-sm text-f1-red/80 font-semibold mb-2">Informatics Institute of Technology (IIT)</p>
                    <p className="text-gray-400 text-sm leading-relaxed">Affiliated with the University of Westminster. Specialising in software engineering and full-stack development.</p>
                  </div>
                </div>

                {/* Internship */}
                <div className="relative mb-8">
                  <div className="absolute -left-[1.625rem] top-5 w-3.5 h-3.5 rounded-full bg-f1-red border-4 border-black shadow-[0_0_8px_rgba(225,6,0,0.6)]"></div>
                  <div className="bg-f1-carbon-light border border-f1-red/15 rounded-2xl p-6 hover:border-f1-red/40 transition-all duration-500 halo-glow">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red tracking-widest">JUL 2025 — AUG 2025</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10 font-[var(--font-orbitron)] tracking-wider">COMPLETED</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mt-1 mb-1">Summer Intern</h4>
                    <p className="text-sm text-f1-red/80 font-semibold mb-2">Rizing (A Wipro Company)</p>
                    <p className="text-gray-400 text-sm leading-relaxed">Gained industry exposure through corporate workshops, site visits, and collaborative projects.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Projects column ── */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 bg-f1-red rounded-full"></div>
                <h3 className="text-xl font-bold font-[var(--font-orbitron)] text-white tracking-wider">PROJECTS</h3>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-f1-red via-f1-red/40 to-transparent"></div>

                {/* Lexfy */}
                <div className="relative mb-8">
                  <div className="absolute -left-[1.625rem] top-5 w-3.5 h-3.5 rounded-full bg-f1-red border-4 border-black shadow-[0_0_8px_rgba(225,6,0,0.6)]"></div>
                  <div className="bg-f1-carbon-light border border-f1-red/15 rounded-2xl overflow-hidden hover:border-f1-red/40 transition-all duration-500 halo-glow">
                    <div className="flex">
                      <div className="flex-1 p-6">
                        <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red tracking-widest">2024</span>
                        <h4 className="text-lg font-bold text-white mt-1 mb-1">AI Vocabulary App</h4>
                        <p className="text-sm text-f1-red/80 font-semibold mb-2">Personal Project — Lexfy</p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">Mobile-first AI-powered vocabulary learning platform using Flutter, Express, and MySQL.</p>
                        <div className="flex gap-2 flex-wrap">
                          <a href="https://lexfy.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-f1-red/10 hover:bg-f1-red/20 border border-f1-red/20 hover:border-f1-red/50 text-white rounded-lg text-xs font-semibold transition-all duration-200">
                            <ExternalLink className="w-3 h-3" /> Live Site
                          </a>
                          <a href="https://github.com/amaannn7/lexfy-vocabulary-enhancement-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-gray-300 rounded-lg text-xs font-semibold transition-all duration-200">
                            <Github className="w-3 h-3" /> GitHub
                          </a>
                        </div>
                      </div>
                      <div className="w-28 shrink-0 bg-black/30 flex items-center justify-center p-3">
                        <img src="/vocabulary.PNG" alt="Lexfy" loading="lazy" className="w-full h-auto object-contain rounded-lg opacity-90" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Helmet Store */}
                <div className="relative mb-8">
                  <div className="absolute -left-[1.625rem] top-5 w-3.5 h-3.5 rounded-full bg-f1-red border-4 border-black shadow-[0_0_8px_rgba(225,6,0,0.6)]"></div>
                  <div className="bg-f1-carbon-light border border-f1-red/15 rounded-2xl overflow-hidden hover:border-f1-red/40 transition-all duration-500 halo-glow">
                    <div className="flex">
                      <div className="flex-1 p-6">
                        <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red tracking-widest">2025</span>
                        <h4 className="text-lg font-bold text-white mt-1 mb-1">E-Commerce Helmet Store</h4>
                        <p className="text-sm text-f1-red/80 font-semibold mb-2">Full-Stack Project</p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">Complete e-commerce platform with React, Node.js, and MongoDB including payment integration.</p>
                        <div className="flex gap-2 flex-wrap">
                          <a href="https://tavisgomotors.lk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-f1-red/10 hover:bg-f1-red/20 border border-f1-red/20 hover:border-f1-red/50 text-white rounded-lg text-xs font-semibold transition-all duration-200">
                            <ExternalLink className="w-3 h-3" /> Live Site
                          </a>
                        </div>
                      </div>
                      <div className="w-28 shrink-0 bg-black/30 flex items-center justify-center p-3">
                        <img src="/helmet.png" alt="Helmet Store" loading="lazy" className="w-full h-auto object-contain rounded-lg opacity-90" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Oracle */}
                <div className="relative mb-8">
                  <div className="absolute -left-[1.625rem] top-5 w-3.5 h-3.5 rounded-full bg-f1-red border-4 border-black shadow-[0_0_8px_rgba(225,6,0,0.6)]"></div>
                  <div className="bg-f1-carbon-light border border-f1-red/15 rounded-2xl overflow-hidden hover:border-f1-red/40 transition-all duration-500 halo-glow">
                    <div className="flex">
                      <div className="flex-1 p-6">
                        <span className="text-[10px] font-[var(--font-orbitron)] text-f1-red tracking-widest">2025</span>
                        <h4 className="text-lg font-bold text-white mt-1 mb-1">Oracle Services Corporate Website</h4>
                        <p className="text-sm text-f1-red/80 font-semibold mb-2">Client Project</p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">Live corporate website for a leading Sri Lankan security services company, built with Next.js.</p>
                        <div className="flex gap-2 flex-wrap">
                          <a href="https://oracleservices.lk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-f1-red/10 hover:bg-f1-red/20 border border-f1-red/20 hover:border-f1-red/50 text-white rounded-lg text-xs font-semibold transition-all duration-200">
                            <ExternalLink className="w-3 h-3" /> Live Site
                          </a>
                          <a href="https://github.com/amaannn7/oracle-security" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-gray-300 rounded-lg text-xs font-semibold transition-all duration-200">
                            <Github className="w-3 h-3" /> GitHub
                          </a>
                        </div>
                      </div>
                      <div className="w-28 shrink-0 bg-black/30 flex items-center justify-center p-3">
                        <img src="/oracle.png" alt="Oracle Services" loading="lazy" className="w-full h-auto object-contain rounded-lg opacity-90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION — TEAM RADIO ===== */}
      <section id="contact" className="py-32 px-6 border-t border-f1-red/10 relative">
        <div className="checkered-line w-full absolute top-0 left-0"></div>
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Radio className="w-8 h-8 text-f1-red" />
            <h2 className="text-5xl font-bold animate-slide-up font-[var(--font-orbitron)]">
              <span className="bg-gradient-to-r from-f1-red to-white bg-clip-text text-transparent">
                CONTACT
              </span>
            </h2>
          </div>
          <p className="text-xs font-[var(--font-orbitron)] text-gray-500 tracking-[0.3em] mb-6">GET IN TOUCH</p>
          <p className="text-gray-400 text-lg mb-16 animate-fade-in animate-delay-200 max-w-2xl mx-auto">
            Open to internship opportunities and exciting projects.
            Let's line up on the grid and build something championship-worthy.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:amaan.yusuf4522@gmail.com"
              className="bg-f1-carbon-light border border-f1-red/20 rounded-2xl p-8 hover:border-f1-red/50 transition-all duration-500 hover:scale-105 animate-slide-right animate-delay-300 group halo-glow"
            >
              <Mail className="w-8 h-8 text-f1-red mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-white font-bold mb-2 font-[var(--font-orbitron)] tracking-wider">EMAIL</p>
              <p className="text-gray-400 text-sm">amaan.yusuf4522@gmail.com</p>
            </a>

            <a
              href="tel:+94702009436"
              className="bg-f1-carbon-light border border-f1-red/20 rounded-2xl p-8 hover:border-f1-red/50 transition-all duration-500 hover:scale-105 animate-slide-left animate-delay-400 group halo-glow"
            >
              <Phone className="w-8 h-8 text-f1-red mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-white font-bold mb-2 font-[var(--font-orbitron)] tracking-wider">PHONE</p>
              <p className="text-gray-400 text-sm">+94 70 200 9436</p>
            </a>
          </div>

          <div className="flex gap-4 justify-center animate-scale-in animate-delay-500">
            <a
              href="https://github.com/amaannn7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-f1-red/10 hover:bg-f1-red/20 border border-f1-red/20 hover:border-f1-red/50 rounded-xl transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-white group-hover:text-f1-red transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/amaan-yusuf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-f1-red/10 hover:bg-f1-red/20 border border-f1-red/20 hover:border-f1-red/50 rounded-xl transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:text-f1-red transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER — POST-RACE ===== */}
      <footer className="py-10 px-6 border-t border-f1-red/10 relative">
        <div className="checkered-line w-full absolute top-0 left-0"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-4 bg-f1-red rounded-full"></div>
            <p className="text-gray-500 text-sm font-[var(--font-orbitron)] tracking-wider">
              &copy; 2026 AMAAN YUSUF
            </p>
          </div>
          <div className="flex gap-6 text-xs font-[var(--font-orbitron)] text-gray-500 tracking-wider">
            <a href="#about" className="hover:text-f1-red transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-f1-red transition-colors">SKILLS</a>
            <a href="#projects" className="hover:text-f1-red transition-colors">PROJECTS</a>
            <a href="#contact" className="hover:text-f1-red transition-colors">CONTACT</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import './App.css'

export default function App() {
  const lines = [
    "> git clone https://github.com/harvey-jhun/portfolio",
    "> cd portfolio",
    "> npm install",
    "> npm run dev",
    "Success: portfolio up and running 🚀",
  ];

  const [typedLines, setTypedLines] = useState([]);

  useEffect(() => {
    let mounted = true;
    const type = async () => {
      const newLines = [];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let cur = "";
        for (let j = 0; j < line.length; j++) {
          if (!mounted) return;
          cur += line[j];
          newLines[i] = cur;
          setTypedLines([...newLines]);
          // slow typing for realism
          // eslint-disable-next-line no-await-in-loop
          await new Promise((r) => setTimeout(r, 25));
        }
        // small pause after each line
        // eslint-disable-next-line no-await-in-loop
        await new Promise((r) => setTimeout(r, 400));
      }
    };
    type();
    return () => { mounted = false };
  }, []);

  const skillsJSON = {
    frontend: ["HTML5", "TailwindCSS", "Bootstrap", "JavaScript", "AngularJS", "jQuery", "ReactJS"],
    backend: ["NodeJS (Express)","PHP", "SQL(MySQL|PostgreSQL)"],
    cloud: ["Basic Cloud Integration with Railways, AWS EC2"]
  };

  const projects = [
    {
      title: "Ticket Management Portal",
      desc: "Ticketing system with login system, dashboard analytics and CRUD operations.",
      tech: ["React", "Node", "Postgres", "JWT"]
    },
    // {
    //   title: "Todo App (Fullstack)",
    //   desc: "A simple fullstack todo app with realtime UI updates.",
    //   tech: ["React", "Express", "SQLite"]
    // },
    {
      title: "Portfolio (This Site)",
      desc: "Static + interactive portfolio using Tailwind + DaisyUI.",
      tech: ["React", "Tailwind", "DaisyUI"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0f12] text-[#dbe7ff] font-sans">
      {/* top gradient accent */}
      <div className="w-full h-1 bg-gradient-to-r from-[#00e0ff] via-[#7b61ff] to-[#ff8a00] shadow-lg" />

      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg font-mono text-[#9be3ff]">&lt;Harvey-Jhun Estiola /&gt;</span>
        </div>
        <ul className="flex gap-6 text-sm text-[#9fb4d9]">
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
        <div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight font-mono text-white">
            Hi, I’m <span className="text-[#7b61ff]">Harvey-Jhun Estiola</span>
          </h1>
          <p className="mt-4 text-lg text-[#a8bedf]">Web developer — building clean, fast, and reliable web apps.</p>
          <p className="text-lg text-[#a8bedf]">Experienced as a Full Stack Developer from an enterprise company for 2 years,</p>
          <p className="text-lg text-[#a8bedf]">Developed and maintained internal web applications.</p>


          <div className="mt-8 flex gap-3">
            <a href="#projects" className="px-5 py-3 rounded-md bg-[#00bcd4] text-black font-semibold shadow-md hover:scale-[1.02] transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-md bg-[#ff8a00] text-black font-semibold shadow-md hover:scale-[1.02] transition">Contact Me</a>
          </div>

          {/* Terminal box */}
          <div className="mt-8 bg-[#031018] border border-[#0f2430] rounded-lg p-4 font-mono text-sm text-[#7ad1ff] shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="leading-relaxed">
              {typedLines.map((l, idx) => (
                <div key={idx} className="whitespace-pre">{l}</div>
              ))}
              <div className="blinking-cursor">_</div>
            </div>
          </div>
        </div>

        {/* Right column: illustration + code card */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#07101a] rounded-lg p-6 shadow-2xl border border-[#10202b]">
            <h3 className="text-sm text-[#9fb4d9] mb-2 font-mono">Live Preview</h3>
            <div className="bg-[#01060a] rounded-md p-4 min-h-[220px] flex flex-col justify-center items-center">
              {/* <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#08121a" />
                <path d="M7 12L10 15L17 8" stroke="#00e0ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg> */}
              <img src="/PP.png" className="w-64 rounded-lg shadow-2xl mb-6 lg:mb-0 lg:mr-8" alt="About Harvey" />
              {/* <p className="mt-4 text-center text-[#9fb4d9]">Neon-coded components • VSCode vibes</p> */}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#071826] to-[#0b0712] p-4 rounded-lg border border-[#1b2b33]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-2 items-center">
                <span className="px-2 py-1 rounded-md bg-[#10232b] text-xs font-mono text-[#89c8ff]">index.jsx</span>
                <div className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                <div className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                <div className="h-2 w-2 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-xs text-[#9fb4d9]">React • Tailwind • DaisyUI</div>
            </div>
            <pre className="bg-transparent text-sm text-[#cfefff] font-mono overflow-x-auto">
{`function greet() {
  console.log('Hello, world!')
}`}
            </pre>
          </div>
        </div>
      </header>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 font-mono text-white">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#06161d] p-6 rounded-lg border border-[#11303b]">
            <h3 className="text-lg font-semibold mb-4 font-mono text-[#bfe9ff]">Highlighted (JSON)</h3>
            <pre className="bg-transparent text-sm font-mono text-[#d2efff] p-2 rounded">
{`{
  "frontend": ["HTML", "CSS", "JavaScript", "ReactJS"],
  "backend": ["NodeJS (Express)", "SQL"],
  "cloud": ["Basic Cloud Integration"]
}`}
            </pre>
          </div>

          <div className="bg-[#06161d] p-6 rounded-lg border border-[#11303b]">
            <h3 className="text-lg font-semibold mb-4 font-mono text-[#bfe9ff]">Skill Badges</h3>
            <div className="flex flex-wrap gap-3">
              {Object.values(skillsJSON).flat().map((s) => (
                <span key={s} className="px-3 py-2 bg-[#071826] rounded-md text-sm font-mono border border-[#124053]">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 font-mono text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="bg-[#071823] rounded-lg border border-[#12313a] shadow-lg overflow-hidden">
              <div className="p-4 border-b border-[#0f2a30] flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg font-mono">{p.title}</h3>
                  <p className="text-sm text-[#9fb4d9]">{p.desc}</p>
                </div>
                <div className="text-sm font-mono text-[#7ad1ff]">run</div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tech.map(t => (
                    <span key={t} className="px-2 py-1 text-xs bg-[#05202a] rounded border border-[#0f3943]">{t}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/JunHarvz" target="_blank" className="px-3 py-2 bg-[#00bcd4] text-black rounded text-sm font-semibold">
                    GitHub
                  </a>
                  <a className="px-3 py-2 bg-[#7b61ff] text-black rounded text-sm font-semibold">Live</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      <section id="resume" className="py-16 bg-base-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">📄 My Resume</h2>
          <p className="text-center mb-8 text-lg text-gray-500">
            Download or view my resume directly below.
          </p>

          <div className="flex flex-col items-center gap-6">
            {/* PDF Preview (Embed) */}
            <iframe
              src="/HARVEY_RESUME.pdf"
              className="w-full h-[600px] border border-gray-300 rounded-lg shadow-lg"
              title="Harvey-Jhun Estiola Resume"
            ></iframe>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View in New Tab
              </a>
              <a
                href="../public/HARVEY_RESUME.pdf"
                download="Harvey-Jhun-Estiola-Resume.pdf"
                className="btn btn-secondary"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 font-mono text-white">Contact</h2>
        <div className="bg-[#06141a] p-6 rounded-lg border border-[#0f2a30]">
          <pre className="font-mono text-[#bfe9ff] text-sm">// Interested in working together? Drop a message below or email: harvey@example.com</pre>

          <form className="mt-4 grid grid-cols-1 gap-4">
            <input className="input input-bordered bg-[#071826] text-[#dff4ff]" placeholder="Your name" />
            <input className="input input-bordered bg-[#071826] text-[#dff4ff]" placeholder="you@example.com" />
            <textarea className="textarea textarea-bordered bg-[#071826] text-[#dff4ff]" placeholder="Message"></textarea>
            <button className="px-4 py-2 bg-[#00e0ff] text-black rounded font-semibold">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-[#7f9bb6]">
        <div>© {new Date().getFullYear()} Harvey-Jhun Estiola • Built with React + Tailwind + DaisyUI</div>
      </footer>

      {/* small styles */}
      <style>{`
        .blinking-cursor { display:inline-block; animation: blink 1s steps(2,end) infinite; }
        @keyframes blink { from, to { opacity: 0 } 50% { opacity: 1 } }
      `}</style>
    </div>
  );
}

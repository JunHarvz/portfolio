import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-base-200 text-base-content">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Harvey-Jhun Estiola</a>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-screen bg-base-200" id="home">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/dev-image.png" className="max-w-sm rounded-lg shadow-2xl" alt="Developer" />
          <div>
            <h1 className="text-5xl font-bold">Hi, I'm Harvey-Jhun Estiola 👋</h1>
            <p className="py-6">Web Developer specializing in HTML, CSS, JavaScript, ReactJS, NodeJS, SQL, and basic cloud integration.</p>
            <button className="btn btn-primary mr-2">View Projects</button>
            <button className="btn btn-accent">Contact Me</button>
          </div>
        </div>
      </div>

      {/* About Me */}
      <section id="about" className="py-16 bg-base-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <img src="/PP.png" className="w-64 rounded-lg shadow-2xl mb-6 lg:mb-0 lg:mr-8" alt="About Harvey" />
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="mb-4">I’m a passionate web developer skilled in HTML, CSS, JavaScript, ReactJS, NodeJS, and SQL. I enjoy creating responsive, user-friendly applications and integrating modern tools, including basic cloud services.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'NodeJS', 'Express', 'SQL', 'Cloud Basics'].map(skill => (
              <span key={skill} className="badge badge-outline badge-lg">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Project */}
            <div className="card bg-base-200 shadow-xl">
              <figure><img src="/project1.png" alt="Project" /></figure>
              <div className="card-body">
                <h3 className="card-title">Service Portal System</h3>
                <p>A ticketing system for service requests with CRUD operations, authentication, and dashboard analytics.</p>
                <div className="card-actions justify-end">
                  <a href="#" className="btn btn-primary btn-sm">GitHub</a>
                  <a href="#" className="btn btn-accent btn-sm">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-base-200">
        <div className="container mx-auto px-4 max-w-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <form className="card bg-base-100 shadow-xl p-6">
            <div className="form-control mb-4">
              <label className="label"><span className="label-text">Name</span></label>
              <input type="text" placeholder="Your Name" className="input input-bordered" />
            </div>
            <div className="form-control mb-4">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" placeholder="you@example.com" className="input input-bordered" />
            </div>
            <div className="form-control mb-4">
              <label className="label"><span className="label-text">Message</span></label>
              <textarea className="textarea textarea-bordered" placeholder="Your message"></textarea>
            </div>
            <button className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>© 2025 Harvey-Jhun Estiola. Built with 💻 and ☕.</p>
        </aside>
      </footer>
    </div>
    </>
  )
}

export default App

import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header>
        <div className="container">
          <h1>Taha Moosavi (StreamTech)</h1>
          <p>Web Developer | Rust Programmer | Software Engineer</p>
        </div>
      </header>

      <div className="container">
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Taha Moosavi and I've been a professional programmer for
            about 4 years. I started with C# and have since worked on various
            projects and gained skills in web development, rust, and software
            engineering. You can explore my projects and skills in the sections
            below.
          </p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>TypeScript</li>
            <li>Rust</li>
            <li>Web Development</li>
            <li>Linux</li>
            <li>JavaScript</li>
            <li>CSS3</li>
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>
              <a href="https://github.com/streamtechteam/autopilot-rs">
                Project 1: autopilot-rs
              </a>
            </h3>
            <p>
              An automation tool made with Rust that can automate tasks on
              Windows, macOS, and Linux.
            </p>
          </div>
          <div className="project">
            <h3>
              <a href="https://github.com/streamtechteam/pong-rs">
                Project 2: pong-rs
              </a>
            </h3>
            <p>A simple Pong game made with Rust and Raylib.</p>
          </div>
          <div className="project">
            <h3>
              <a href="https://github.com/streamtechteam">
                More Projects on GitHub
              </a>
            </h3>
            <p>
              Check out my GitHub profile for additional projects and
              contributions
            </p>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-info">
            <p>
              Email:{" "}
              <a href="mailto:taha.moosavi.taha@gmail.com">
                taha.moosavi.taha@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/tahamoosavi" target="_blank">
                linkedin.com/in/tahamoosavi
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a href="https://github.com/streamtechteam" target="_blank">
                github.com/streamtechteam
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header>
        <div className="container">
          <h1>Taha Moosavi (StreamTech)</h1>
          <p>برنامه نویس وب | برنامه نویس سی شارپ | مهندس نرم افزار</p>
        </div>
      </header>

      <div className="container">
        <section id="about">
          <h2>About Me</h2>
          <p>
            سلام! من سید طاها موسوی هستم و حدود 4 سال میشه که حرفه ای برنامه نویسی کار میکنم
            و برنامه نویسی رو با C# شروع کردم.
            شما میتونید پروژه ها و مهارت های من رو در بخش های پایینی
            ببینید.
          </p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>C#</li>
            <li>WinForm</li>
            <li>WPF</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3><a href="https://github.com/streamtechteam/Streamtech_Notepad">Project 1: StreamTech Notepad</a></h3>
            <p>یک نوت پد ساخته شده با Windows Form که تمام امکانات یک نوت پد ساده را داراست و به زودی در ورژن جدید تر آن قابلیت های تخصصی تر اضافه میشود</p>
          </div>
          <div className="project">
            <h3><a href="./whatsmyip">Project 2: WhatsMyIp?</a></h3>
            <p>یک سایت با ظاهر زیبا و مدرن که به شما اطلاعات شبکه رو نشون میده</p>
          </div>
          <div className="project">
            <h3><a href="./whattimeisit">Project 3: WhatTimeIsIt?</a></h3>
            <p>این سایت با رابط زیبا زمان و تاریخ شمسی رو نشون میده</p>
          </div>
          <div className="project">
            <h3><a href="./goaltracker">Project 4: Goal Tracker</a></h3>
            <p>این سایت به شما کمک میکنه که اهداف تون رو ذخیره کنید و هیچ وقت از مسیرتون خارج نشید</p>
          </div>
          <div className="project">
            <h3><a href="https://github.com/streamtechteam">More Projects on GitHub</a></h3>
            <p>Check out my GitHub profile for additional projects and contributions</p>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-info">
            <p>Email: <a href="mailto:taha.moosavi.taha@gmail.com">taha.moosavi.taha@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/tahamoosavi" target="_blank">linkedin.com/in/tahamoosavi</a></p>
            <p>GitHub: <a href="https://github.com/streamtechteam" target="_blank">github.com/streamtechteam</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

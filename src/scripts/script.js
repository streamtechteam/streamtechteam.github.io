    const resumeData = {
      photoUrl: "https://avatars.githubusercontent.com/u/131584785",

      name: { en: "Seyed Taha Moosavi", fa: "سید طاها موسوی" },
      role: { en: "Full Stack Developer", fa: "برنامه‌نویس فول‌استک" },

      contact: {
        email: "taha.moosavi.taha@gmail.com",
        github: "github.com/streamtechteam",
        linkedin: "linkedin.com/in/tahamoosavi",
        birthDate: { en: "2010/01/21", fa: "۱۳۸۸/۰۱/۱۱" },
        location: { en: "Yazd, Iran", fa: "یزد، ایران" },
      },

      about: {
        en: "A passionate and self-motivated Full Stack Developer who loves building efficient, scalable and user-friendly applications. I enjoy solving problems and learning new technologies.",
        fa: "برنامه‌نویس فول‌استک با انگیزه و علاقه‌مند به ساخت برنامه‌های کارآمد، مقیاس‌پذیر و کاربرپسند. از حل مسئله و یادگیری تکنولوژی‌های جدید لذت میبرم."
      },

      experience: [
        {
          date: { en: "2023 – Present", fa: "۱۴۰۲ – اکنون" }, role: { en: "Software Developer", fa: "برنامه‌نویس نرم افزار" },
          org: { en: "Personal Project", fa: "پروژه شخصی" },
          desc: {
            en: "Tinkering with different langauges, frameworks, platforms specificly Rust, Godot and Flutter",
            fa: "کار کردن با زبان ها ، فریم ورک ها ، و پلتفرم های مختلف از جمله : راست ، گودو ، فلاتر"
          }
        },
        {
          date: { en: "2025 – 2026", fa: "اوایل ۱۴۰۴  – اواخر ۱۴۰۴" }, role: { en: "Frontend Developer", fa: "برنامه‌نویس فرانت اند" },
          org: { en: "HyvaTech", fa: "هیواتک" },
          desc: {
            en: "Built Web Applications with Angular Framework",
            fa: "ساخت وب اپلیکیشن با فریم ورک Angular"
          }
        },
        {
          date: { en: "2022 – 2023", fa: "۱۴۰۱ – ۱۴۰۲" }, role: { en: "Software Developer", fa: "برنامه‌نویس نرم‌افزار" },
          org: { en: "Learning & Practice", fa: "یادگیری و تمرین" },
          desc: {
            en: "Focused on learning various technologies, data structures, algorithms and building small to medium projects.",
            fa: "تمرکز بر یادگیری تکنولوژی‌های مختلف، ساختار داده‌ها، الگوریتم‌ها و ساخت پروژه‌های کوچک و متوسط."
          }
        }
      ],

      projects: [
        // {
        //   icon: "check", title: { en: "ToDo App", fa: "اپلیکیشن مدیریت کارها" },
        //   desc: {
        //     en: "A cross-platform ToDo application built with Flutter and GetStorage for local data persistence.",
        //     fa: "یک اپلیکیشن چندسکویی برای مدیریت کارها با استفاده از Flutter و GetStorage."
        //   }
        // },
        // {
        //   icon: "bot", title: { en: "Telegram AI Bot", fa: "ربات تلگرام هوشمند" },
        //   desc: {
        //     en: "Telegram bot built with Node.js, connected to Gemini API and TDLib for advanced features.",
        //     fa: "ربات تلگرام ساخته‌شده با Node.js متصل به Gemini API و TDLib برای قابلیت‌های پیشرفته."
        //   }
        // },
        {
          icon: "gear", title: { en: "Autopilot-rs", fa: "Autopilot-rs" },
          desc: {
            en: "A task automation and scheduling CLI tool written in Rust with support for complex conditions.",
            fa: "ابزار CLI برای زمان‌بندی و خودکارسازی کارها با Rust با پشتیبانی از شرایط پیچیده."
          }
        },
        // {
        //   icon: "gamepad", title: { en: "Pixel Platformer Game", fa: "بازی پلتفرمر دوبعدی" },
        //   desc: {
        //     en: "A 2D platformer game developed with Godot Engine.",
        //     fa: "یک بازی پلتفرمر دوبعدی ساخته‌شده با موتور Godot."
        //   }
        // }
      ],

      education: [
        {
          date: { en: "2025 – Present", fa: "۱۴۰۴ – اکنون" },
          title: { en: "High School Diploma (In Progress)", fa: "دوره متوسطه دوم (در حال تحصیل)" },
          sub: { en: "Yazd, Iran · Automotive Mechanics and Electrical Systems ", fa: "یزد، ایران · رشته مکانیک و برق خودرو" }
        }
      ],

      certificates: [
        { en: "Node.js – The Complete Guide – Udemy", fa: "راهنمای کامل Node.js – Udemy" },
      ],

      interests: {
        en: "Programming, Gaming, Linux, Open Source Softwares, Anime",
        fa: "برنامه‌نویسی، بازی، لینوکس، نرم افزار های متن‌باز، انیمه"
      },
      traits: {
        en: "Logical Thinking, Problem Solving, Self-learning, Fast Learning",
        fa: "تفکر منطقی، حل مسئله، یادگیری مستقل، یادگیری سریع"
      },

      skills: [
        { name: "TypeScript / JavaScript", level: 80 },
        { name: "React / Next.js", level: 10 },
        { name: "Node.js / Express", level: 50 },
        { name: "Flutter / Dart", level: 40 },
        { name: "Rust", level: 70 },
        { name: "Git / GitHub", level: 50 },
        { name: "Linux", level: 80 },
        { name: "Docker", level: 20 },
        { name: "Godot", level: 30}
      ],

      languages: [
        { name: { en: "English", fa: "انگلیسی" }, level: { en: "Advanced", fa: "پیشرفته" }, dots: 4 },
        { name: { en: "Persian", fa: "فارسی" }, level: { en: "Native", fa: "زبان مادری" }, dots: 5 }
      ]
    };

    const ICONS = {
      user: `<svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
      briefcase: `<svg class="ic" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>`,
      laptop: `<svg class="ic" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="11" rx="1.5"/><path d="M2 19h20"/></svg>`,
      gradCap: `<svg class="ic" viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5"/><path d="M22 9v6"/></svg>`,
      trophy: `<svg class="ic" viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 5H4v2a4 4 0 0 0 4 4"/><path d="M16 5h4v2a4 4 0 0 1-4 4"/><path d="M12 13v4"/><path d="M8 21h8"/><path d="M10 21v-2.5c0-.8.9-1.5 2-1.5s2 .7 2 1.5V21"/></svg>`,
      star: `<svg class="ic" viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .9-5.1 4.9 1.3 7-6.2-3.4-6.2 3.4 1.3-7L2 9.4l7-.9L12 2z"/></svg>`,
      mail: `<svg class="ic" viewBox="0 0 24 24"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="M3 6l9 6 9-6"/></svg>`,
      github: `<svg class="ic" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.4c0-1 .3-1.6.8-2C13.7 16 17 14.6 17 9.7c0-1.3-.4-2.3-1.2-3.2.1-.3.5-1.6-.1-3.3 0 0-1.1-.3-3.5 1.3a12 12 0 0 0-6.4 0C3.4 3 2.3 3.3 2.3 3.3c-.6 1.7-.2 3-.1 3.3-.8.9-1.2 2-1.2 3.2 0 4.9 3.3 6.3 6.4 6.9-.4.4-.7 1-.8 1.9M12 22v-3.4"/></svg>`,
      linkedin: `<svg class="ic" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10.5v6M7.5 7.5v.01M11.5 16.5v-3.5c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v3.5M11.5 10.5v6"/></svg>`,
      calendar: `<svg class="ic" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>`,
      mapPin: `<svg class="ic" viewBox="0 0 24 24"><path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/></svg>`,
      phone: `<svg class="ic" viewBox="0 0 24 24"><path d="M4 5c0-.6.4-1 1-1h3.2c.5 0 .9.3 1 .8l.8 3.4c.1.4 0 .9-.4 1.2L8 10.8a12 12 0 0 0 5.2 5.2l1.4-1.6c.3-.3.8-.5 1.2-.4l3.4.8c.5.1.8.5.8 1V19c0 .6-.4 1-1 1h-1C10 20 4 14 4 6V5z"/></svg>`,
      gear: `<svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2.1-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2.1 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9c.6.5 1.3.9 2.1 1.2L10 21h4l.5-2.6a7 7 0 0 0 2.1-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z"/></svg>`,
      globe: `<svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-6-4-9s1.5-6.5 4-9z"/></svg>`,
      check: `<svg class="ic" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 12l3.2 3.2L17 8.5"/></svg>`,
      bot: `<svg class="ic" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="11" rx="2.5"/><path d="M12 8V4M9.5 4h5"/><circle cx="9" cy="13.5" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="13.5" r="1.2" fill="currentColor" stroke="none"/><path d="M2 12v3M22 12v3"/></svg>`,
      gamepad: `<svg class="ic" viewBox="0 0 24 24"><rect x="2" y="7.5" width="20" height="10" rx="5"/><path d="M7 10.5v4M5 12.5h4"/><circle cx="16" cy="10.7" r="1" fill="currentColor" stroke="none"/><circle cx="18.3" cy="13" r="1" fill="currentColor" stroke="none"/></svg>`
    };

    function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; }
    function setIcon(id, name) { const n = document.getElementById(id); if (n) n.innerHTML = ICONS[name]; }

    function renderHeader() {
      document.getElementById('photoImg').src = resumeData.photoUrl;
      document.getElementById('fullNameEn').textContent = resumeData.name.en;
      document.getElementById('roleEn').textContent = resumeData.role.en;
      document.getElementById('fullNameFa').textContent = resumeData.name.fa;
      document.getElementById('roleFa').textContent = resumeData.role.fa;

      const c = resumeData.contact;
      const row = document.getElementById('contactRow');
      row.innerHTML = `
    <span>${ICONS.mail}${c.email}</span><span class="dot">|</span>
    <span>${ICONS.github}${c.github}</span><span class="dot">|</span>
    <span>${ICONS.linkedin}${c.linkedin}</span>`;
    }

    function renderAbout() {
      setIcon('icAboutEn', 'user'); setIcon('icAboutFa', 'user');
      document.getElementById('aboutEn').textContent = resumeData.about.en;
      document.getElementById('aboutFa').textContent = resumeData.about.fa;
    }

    function renderExperience() {
      setIcon('icExpEn', 'briefcase'); setIcon('icExpFa', 'briefcase');
      const enWrap = document.getElementById('expEn');
      const faWrap = document.getElementById('expFa');
      resumeData.experience.forEach(item => {
        enWrap.appendChild(el('div', 'tl-item', `
      <div class="tl-date">${item.date.en}</div>
      <div class="tl-role">${item.role.en}</div>
      <div class="tl-org">${item.org.en}</div>
      <div class="tl-desc">${item.desc.en}</div>`));
        faWrap.appendChild(el('div', 'tl-item', `
      <div class="tl-date">${item.date.fa}</div>
      <div class="tl-role">${item.role.fa}</div>
      <div class="tl-org">${item.org.fa}</div>
      <div class="tl-desc">${item.desc.fa}</div>`));
      });
    }

    function renderProjects() {
      setIcon('icProjEn', 'laptop'); setIcon('icProjFa', 'laptop');
      const enWrap = document.getElementById('projEn');
      const faWrap = document.getElementById('projFa');
      resumeData.projects.forEach(p => {
        enWrap.appendChild(el('div', 'proj-item', `
      <div class="proj-icon">${ICONS[p.icon]}</div>
      <div><p class="proj-title">${p.title.en}</p><p class="proj-desc">${p.desc.en}</p></div>`));
        faWrap.appendChild(el('div', 'proj-item', `
      <div class="proj-icon">${ICONS[p.icon]}</div>
      <div><p class="proj-title">${p.title.fa}</p><p class="proj-desc">${p.desc.fa}</p></div>`));
      });
    }

    function renderEducation() {
      setIcon('icEduEn', 'gradCap'); setIcon('icEduFa', 'gradCap');
      const enWrap = document.getElementById('eduEn');
      const faWrap = document.getElementById('eduFa');
      resumeData.education.forEach(e => {
        enWrap.appendChild(el('div', 'edu-item', `
      <div class="edu-date">${e.date.en}</div>
      <div class="edu-title">${e.title.en}</div>
      <div class="edu-sub">${e.sub.en}</div>`));
        faWrap.appendChild(el('div', 'edu-item', `
      <div class="edu-date">${e.date.fa}</div>
      <div class="edu-title">${e.title.fa}</div>
      <div class="edu-sub">${e.sub.fa}</div>`));
      });
    }

    function renderCertificates() {
      setIcon('icCertEn', 'trophy'); setIcon('icCertFa', 'trophy');
      const enWrap = document.getElementById('certEn');
      const faWrap = document.getElementById('certFa');
      resumeData.certificates.forEach(c => {
        enWrap.appendChild(el('li', null, c.en));
        faWrap.appendChild(el('li', null, c.fa));
      });
    }

    function renderFooter() {
      setIcon('icInterestsEn', 'star'); setIcon('icInterestsFa', 'star');
      setIcon('icTraitsEn', 'user'); setIcon('icTraitsFa', 'user');
      document.getElementById('interestsEn').textContent = resumeData.interests.en;
      document.getElementById('interestsFa').textContent = resumeData.interests.fa;
      document.getElementById('traitsEn').textContent = resumeData.traits.en;
      document.getElementById('traitsFa').textContent = resumeData.traits.fa;
    }

    function renderSideContact() {
      setIcon('icContactEn', 'mail'); setIcon('icContactFa', 'mail');
      const c = resumeData.contact;
      const en = document.getElementById('sideContactEn');
      // const fa = document.getElementById('sideContactFa');
      en.innerHTML = `
    <div class="info-row"><span class="ic">${ICONS.calendar}</span>${c.birthDate.en}</div>
    <div class="info-row"><span class="ic">${ICONS.mapPin}</span>${c.location.en}</div>
    <div class="info-row"><span class="ic">${ICONS.mail}</span>${c.email}</div>`;
    //   fa.innerHTML = `
    // <div class="info-row"><span class="ic">${ICONS.calendar}</span>${c.birthDate.fa}</div>
    // <div class="info-row"><span class="ic">${ICONS.mapPin}</span>${c.location.fa}</div>
    // <div class="info-row"><span class="ic">${ICONS.mail}</span>${c.email}</div>`;
    }

    function renderSkills() {
      setIcon('icSkillsEn', 'gear');
      const en = document.getElementById('skillsEn');
      resumeData.skills.forEach(s => {
        const rowHtml = `
      <div class="skill-label"><span>${s.name}</span></div>
      <div class="skill-track"><div class="skill-fill" style="width:${s.level}%"></div></div>`;
        en.appendChild(el('div', 'skill-row', rowHtml));
      });
    }

    function renderLanguages() {
      setIcon('icLangEn', 'globe'); setIcon('icLangFa', 'globe');
      const en = document.getElementById('langsEn');
      // const fa = document.getElementById('langsFa');
      resumeData.languages.forEach(l => {
        const dotsHtml = n => `<div class="dots">${Array.from({ length: 5 }, (_, i) => `<span class="dot-el ${i < n ? 'on' : ''}"></span>`).join('')}</div>`;
        const rowEn = el('div', 'lang-row', `<span>${l.name.en}</span><span>${l.level.en}</span>`);
        rowEn.appendChild(el('div', null, dotsHtml(l.dots)).firstChild);
        en.appendChild(rowEn);
        const rowFa = el('div', 'lang-row', `<span>${l.name.fa}</span><span>${l.level.fa}</span>`);
        // const dotsEl = el('div', null, dotsHtml(l.dots)).firstChild;
        // rowFa.insertBefore(dotsEl, rowFa.firstChild);
        // rowFa.appendChild(el('div', null, dotsHtml(l.dots)).firstChild);
        // fa.appendChild(rowFa);
      });
    }

    function renderAll() {
      renderHeader(); renderAbout(); renderExperience(); renderProjects();
      renderEducation(); renderCertificates(); renderFooter();
      renderSideContact(); renderSkills(); renderLanguages();
    }
    renderAll();

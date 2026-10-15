// =========================================================================
// DATA (edit your content here)
// =========================================================================
const hobbyData = {
  motorcycle: {
    title: "MOTORCYCLE",
    desc: "Exploring new routes and handling regular mechanical maintenance. Riding offers a great way to disconnect, build focus, and appreciate the mechanics of a well-tuned machine.",
    img: "about-section/hobbies/motorcycle.jpg"
  },
  guitar: {
    title: "GUITAR",
    desc: "Playing both rhythm and lead electric guitar. Performing live helps build confidence, quick adaptability, and creative expression outside of technical work.",
    img: "about-section/hobbies/guitar.jpg"
  },
  piano: {
    title: "PIANO",
    desc: "Practicing classical pieces and exploring digital synthesis. Playing keys provides a creative flow state that helps balance out analytical programming work.",
    img: "about-section/hobbies/piano.jpg"
  },
  basketball: {
    title: "BASKETBALL",
    desc: "Staying active through competitive local leagues and casual pickup games. It serves as my main outlet for physical fitness, sharp execution under pressure, and teamwork.",
    img: "about-section/hobbies/basketball.jpg"
  },
  billiards: {
    title: "BILLIARDS",
    desc: "Enjoying casual and competitive games of pool. It is a great hobby for unwinding while practicing spatial awareness, strategy, and mental composure.",
    img: "about-section/hobbies/billiards.jpg"
  }
};

const skillsData = {
  core: {
    meta: ">> INITIATING CORE_LOGIC INVENTORY...",
    items: [
      { name: "C / C++ / C#", bar: "[█████████░]", status: "ADVANCED // ACTIVE", cls: "green" },
      { name: "JavaScript", bar: "[███████░░░]", status: "STABLE // ACTIVE", cls: "green" },
      { name: "Assembly", bar: "[████░░░░░░]", status: "CORE // DEPLOYED", cls: "green" },
      { name: "HTML5 / CSS3", bar: "[█████████░]", status: "STABLE // ACTIVE", cls: "green" },
      { name: "React.js", bar: "[██████░░░░]", status: "COMPILING // 54%", cls: "yellow" },
      { name: "Node.js", bar: "[████░░░░░░]", status: "COMPILING // 48%", cls: "yellow" },
      { name: "Java", bar: "[██████░░░░]", status: "STABLE // COMPILED", cls: "green" },
      { name: "Laravel", bar: "[████░░░░░░]", status: "STABLE // DEPLOYED", cls: "green" },
      { name: "Python", bar: "[███████░░░]", status: "COMPILING // 54%", cls: "yellow" },
      { name: "Express", bar: "[████░░░░░░]", status: "COMPILING // 48%", cls: "yellow" },
      { name: "SQL Databases", bar: "[█████████░]", status: "STABLE // SECURED", cls: "green" }
    ]
  },
  embedded: {
    meta: ">> PINGING HARDWARE_BUS NODES...",
    items: [
      { name: "Arduino / Microcontrollers", bar: "[██████████]", status: "STABLE // INSTALLED", cls: "green" },
      { name: "Robotics & Wiring", bar: "[█████████░]", status: "STABLE // INSTALLED", cls: "green" },
      { name: "IoT Architecture", bar: "[██████░░░░]", status: "STABLE // ACTIVE", cls: "green" },
      { name: "VHDL / Verilog", bar: "[███████░░░]", status: "COMPLIANT // CORE", cls: "green" },
      { name: "Circuit Simulation", bar: "[████████░░]", status: "STABLE // INSTALLED", cls: "green" }
    ]
  },
  spatial: {
    meta: ">> LOADING SPATIAL_SCHEMATIC DESIGN DRIVERS...",
    items: [
      { name: "AutoCAD", bar: "[█████████░]", status: "STABLE // DEPLOYED", cls: "green" },
      { name: "Revit", bar: "[███████░░░]", status: "STABLE // DEPLOYED", cls: "green" }
    ]
  },
  aux: {
    meta: ">> RUNNING RUNTIME COMPILATION FOR AUX_DEPENDENCIES...",
    items: [
      { name: "Git / GitHub", bar: "[████████░░]", status: "STABLE // VERSION_ON", cls: "green" },
      { name: "Docker", bar: "[████████░░]", status: "STABLE // VERSION_ON", cls: "green" },
      { name: "Microsoft Office", bar: "[████████░░]", status: "STABLE // VERSION_ON", cls: "green" },
      { name: "Ubuntu (Linux)", bar: "[██████░░░░]", status: "STABLE // MAIN_OS", cls: "green" },
      { name: "Cisco Tracer / Octave", bar: "[██████░░░░]", status: "STABLE // ROUTED", cls: "green" }
    ]
  }
};

const projects = [
  {
    title: "automated-toll-gate-system",
    desc: "An automated hardware-software prototype designed to streamline vehicle access control through secure physical and digital verification. This system implements real-time RFID tag authentication via SPI communication protocols, utilizing optimized microcontroller logic for low-latency sensor responsiveness. It features continuous servo motor tracking and precise calibration routines to ensure smooth, automated barrier gate deployment upon successful credentials verification.",
    image: "projects-section/rfid.jpg",
    lang: "C++ (Arduino)", langColor: "#f34b7d",
    tag1: "★ RC522 SPI", tag2: "⑂ SG90 Servo"
  },
  {
    title: "smart-water-dispenser",
    desc: "A contactless automated liquid management system engineered for high-precision proximity sensing and safe mechanical operation. The system utilizes ultrasonic sensor arrays paired with calibrated distance logic to trigger hands-free dispensing, completely isolating the fluid path. It features a dedicated 5V solenoid relay switching mechanism alongside hardware debouncing rules to prevent accidental triggers, false reads, and fluid spillage.",
    image: "projects-section/dispenser.jpg",
    lang: "C++ (Arduino)", langColor: "#f34b7d",
    tag1: "★ HC-SR04", tag2: "⑂ 5V Relay"
  },
  {
    title: "helcare-sanitizer",
    desc: "A specialized hardware appliance featuring automated dual-mode sterilization managed through responsive microcontroller execution. The device safely sequences simultaneous UV-C radiation and dry-heat sanitization cycles while enforcing strict physical safeguards. It relies on hardware interrupt routines (ISRs) paired with microswitches to instantly terminate operation upon a door breach, ensuring absolute user safety during operation.",
    image: "projects-section/helcare.jpg",
    lang: "C++ (Arduino)", langColor: "#f34b7d",
    tag1: "★ UV-C Safety", tag2: "⑂ Door ISR"
  },
  {
    title: "system-portfolio",
    desc: "A high-performance portfolio platform styled as a terminal operating system emulator to showcase multidisciplinary engineering work across hardware and software domains. Built using semantic HTML5, vanilla JavaScript, and responsive CSS Grid layouts, the interface handles smooth tab routing and interactive UI state transitions without external dependencies. The codebase is fully optimized for minimal asset overhead, achieving instant render performance across all viewports.",
    image: "projects-section/portf.jpg",
    lang: "HTML, CSS, JavaScript", langColor: "#f1e05a",
    tag1: "★ HTML5", tag2: "⑂ CSS Grid"
  },
  {
    title: "love-letter",
    desc: "An interactive and personalized digital love letter website created to turn a traditional letter into an immersive web experience. The project features a multi-page letter, animated transitions, interactive envelope elements, photo collages, decorative effects, and custom typography. Built with HTML, CSS, and JavaScript, the website focuses on creating a polished and responsive interface while incorporating interactive elements and custom animations. It allowed me to explore front-end development, DOM manipulation, responsive design, and CSS animations while turning a personal concept into a complete interactive website.",
    image: "projects-section/letter.jpg",
    lang: "HTML, CSS, JavaScript", langColor: "#f1e05a",
    tag1: "★ HTML5", tag2: "⑂ CSS Animations"
  }
];

// =========================================================================
// HELPERS
// =========================================================================
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/** Marks one element active and clears the rest of its group. */
function setActive(group, active) {
  group.forEach(el => el.classList.toggle('active', el === active));
}

/** Runs `done` once an image is loaded, so swaps never show a half-loaded picture. */
function whenLoaded(src, done) {
  const probe = new Image();
  probe.onload = probe.onerror = done;
  probe.src = src;
}

// =========================================================================
// 1. NAVBAR HOVER TRACKER
// =========================================================================
const navUl = $('.navbar ul');
const tracker = $('.nav-tracker');

if (navUl && tracker) {
  $$('a', navUl).forEach(link => {
    link.addEventListener('mouseenter', () => {
      const ulRect = navUl.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      tracker.style.left = `${linkRect.left - ulRect.left}px`;
      tracker.style.width = `${linkRect.width}px`;
    });
  });
  navUl.addEventListener('mouseleave', () => { tracker.style.width = '0'; });
}

// =========================================================================
// 2. ABOUT: TABS + HOBBIES
// =========================================================================
const tabButtons = $$('.tab-btn');
const tabPanes = $$('.tab-pane');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    setActive(tabButtons, button);
    setActive(tabPanes, $(`#pane-${button.dataset.target}`));
  });
});

const hobbyButtons = $$('.hobby-driver');
const hobbyImg = $('#hobby-active-img');
const hobbyBlur = $('#hobby-blur-bg');
let hobbyRequest = 0;

function switchHobby(key) {
  const data = hobbyData[key];
  if (!data) return;

  setActive(hobbyButtons, $(`.hobby-driver[data-hobby="${key}"]`));
  $('#hobby-title').textContent = data.title;
  $('#hobby-desc').textContent = data.desc;

  // Only the newest click is allowed to update the picture
  const request = ++hobbyRequest;
  hobbyImg.style.opacity = '0';
  whenLoaded(data.img, () => {
    if (request !== hobbyRequest) return;
    hobbyImg.src = data.img;
    hobbyImg.alt = `${data.title} photo`;
    hobbyBlur.style.backgroundImage = `url('${data.img}')`;
    hobbyImg.style.opacity = '1';
  });
}

hobbyButtons.forEach(btn => btn.addEventListener('click', () => switchHobby(btn.dataset.hobby)));

// =========================================================================
// 3. SKILLS
// =========================================================================
const folderNodes = $$('.folder-node');
const reportDisplay = $('#skills-report-display');

function renderSkills(key) {
  const data = skillsData[key];
  if (!data) return;

  setActive(folderNodes, $(`.folder-node[data-target="${key}"]`));
  reportDisplay.innerHTML = `
    <p class="report-meta">${data.meta}</p>
    ${data.items.map(item => `
      <div class="ascii-report-line">
        <span class="tech-name gradient-text">${item.name}</span>
        <span class="ascii-bar">${item.bar}</span>
        <span class="tech-status ${item.cls}">${item.status}</span>
      </div>`).join('')}`;
}

folderNodes.forEach(node => node.addEventListener('click', () => renderSkills(node.dataset.target)));

// =========================================================================
// 4. PROJECTS
// =========================================================================
let currentIndex = 0;
let projectRequest = 0;

function updateProjectCard() {
  const project = projects[currentIndex];
  const img = $('#project-img');
  const bg = $('#project-bg-blur');

  // Text updates instantly; the image fades while it loads
  $('#repo-title').textContent = project.title;
  $('#repo-desc').textContent = project.desc;
  $('#repo-lang').textContent = project.lang;
  $('.lang-dot').style.backgroundColor = project.langColor;
  $('#tech-tag-1').textContent = project.tag1;
  $('#tech-tag-2').textContent = project.tag2;
  $('#commit-status').textContent = `COMMIT ${currentIndex + 1} OF ${projects.length}`;

  const request = ++projectRequest;
  img.style.opacity = '0.1';
  bg.style.opacity = '0.1';
  whenLoaded(project.image, () => {
    if (request !== projectRequest) return;
    img.src = bg.src = project.image;
    img.alt = `${project.title} preview`;
    img.style.opacity = '0.95';
    bg.style.opacity = '0.6';
  });
}

function stepProject(direction) {
  currentIndex = (currentIndex + direction + projects.length) % projects.length;
  updateProjectCard();
}

$('#prev-project').addEventListener('click', () => stepProject(-1));
$('#next-project').addEventListener('click', () => stepProject(1));

// =========================================================================
// 5. CONTACT CLOCK
// =========================================================================
const clock = $('#tel-clock');

function updateClock() {
  if (!clock) return;
  clock.textContent = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}
setInterval(updateClock, 1000);

// =========================================================================
// 6. BACKGROUND (parallax grid + node network + code drift)
// =========================================================================
function startBackground() {
  const canvas = $('#matrix-data-canvas');
  const grid = $('.blueprint-grid-overlay');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;
  let width, height, running = true;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Parallax: at most one DOM write per frame, and none on phones
  if (grid && !isMobile && !reduceMotion) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        grid.style.transform = `translate3d(0, ${window.scrollY * 0.25}px, 0)`;
        ticking = false;
      });
    }, { passive: true });
  }

  const nodes = Array.from({ length: isMobile ? 15 : 35 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2,
    radius: Math.random() * 1.5 + 0.5
  }));

  const streams = Array.from({ length: isMobile ? 8 : 20 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    speed: Math.random() * 0.4 + 0.1,
    text: ''
  }));

  function drawNodes() {
    nodes.forEach((node, i) => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
      ctx.fill();

      for (let j = i + 1; j < nodes.length; j++) {
        const dx = node.x - nodes[j].x;
        const dy = node.y - nodes[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.04 * (1 - dist / 180)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });
  }

  function drawStreams() {
    ctx.font = '9px monospace';
    ctx.fillStyle = 'rgba(0, 240, 255, 0.05)';
    streams.forEach(s => {
      s.y -= s.speed;
      if (s.y < -50) {
        s.y = height + Math.random() * 100;
        s.x = Math.random() * width;
      }
      if (Math.random() < 0.02) {
        const addr = '0x' + Math.floor(Math.random() * 256).toString(16).toUpperCase();
        s.text = `${addr} ${Math.random() > 0.7 ? '[OK]' : ''}`;
      }
      ctx.fillText(s.text, s.x, s.y);
    });
  }

  let last = 0;
  function render(now = 0) {
  if (!running) return;
  requestAnimationFrame(render);
  if (now - last < 33) return;   // ~30fps
  last = now;
  ctx.clearRect(0, 0, width, height);
  drawNodes();
  drawStreams();
  }

  if (reduceMotion) {
    drawNodes(); // single static frame
    return;
  }

  // Pause when the tab is hidden to save battery and CPU
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) render();
  });
  render();
}

// =========================================================================
// INIT
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  switchHobby('motorcycle');
  renderSkills('core');
  updateProjectCard();
  updateClock();
  startBackground();
});

// After the page has loaded, quietly cache images that appear on click
window.addEventListener('load', () => {
  [...Object.values(hobbyData).map(h => h.img), ...projects.map(p => p.image)]
    .forEach(src => { new Image().src = src; });
});

const contact = document.querySelector('#contact');
new IntersectionObserver(([entry]) => {
  contact.classList.toggle('paused', !entry.isIntersecting);
}).observe(contact);
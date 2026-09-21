// ==========================================
// 1. SIDEBAR LINE GLIDE TRACKER SUB-SYSTEM
// ==========================================
const navUl = document.querySelector('.sidebar ul');
const links = document.querySelectorAll('.sidebar ul li a');
const tracker = document.querySelector('.nav-tracker');

if (navUl && tracker) {
  links.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
      const ulRect = navUl.getBoundingClientRect();
      const linkRect = e.target.getBoundingClientRect();
      
      // Calculates horizontal location relative to parent block
      tracker.style.left = `${linkRect.left - ulRect.left}px`;
      tracker.style.width = `${linkRect.width}px`;
    });
  });

  // Clears the glowing bar asset when mouse exits navigation row area completely
  navUl.addEventListener('mouseleave', () => {
    tracker.style.width = '0';
  });
}

// ==========================================
// 2. ABOUT WINDOW SYSTEM TAB SWAPPER
// ==========================================
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Step A: Remove the active highlight from all tab buttons & content panels
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));

    // Step B: Set the button that was clicked to active
    button.classList.add('active');
    
    // Step C: Look up the value inside data-target="" and show that content block
    const targetedId = button.getAttribute('data-target');
    const linkedPane = document.getElementById(`pane-${targetedId}`);
    
    if (linkedPane) {
      linkedPane.classList.add('active');
    }
  });
});

// Database of hobby content mapping
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

function switchHobby(hobbyKey, element) {
  if (!hobbyData[hobbyKey]) return;

  // 1. Remove active styling class from all driver buttons
  const drivers = document.querySelectorAll('.hobby-driver');
  drivers.forEach(drv => drv.classList.remove('active'));
  
  // 2. Set the current clicked button to active state
  if (element) element.classList.add('active');
  
  // 3. Load database data
  const data = hobbyData[hobbyKey];
  
  // 4. Dom Selection
  const activeImg = document.getElementById('hobby-active-img');
  const blurBg = document.getElementById('hobby-blur-bg');
  const title = document.getElementById('hobby-title');
  const desc = document.getElementById('hobby-desc');
  
  // 5. Apply transitions smoothly
  if (activeImg) activeImg.style.opacity = '0';
  
  setTimeout(() => {
    if (activeImg) { activeImg.src = data.img; activeImg.style.opacity = '1'; }
    if (blurBg) blurBg.style.backgroundImage = `url('${data.img}')`;
    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.desc;
  }, 150);
}

// ==========================================
// 4. SKILLS DIRECTORY DISPATCHER
// ==========================================
const skillsData = {
  core: {
    meta: ">> INITIATING CORE_LOGIC INVENTORY...",
    items: [
      { name: "C / C++", bar: "[█████████░]", status: "ADVANCED // ACTIVE", class: "green" },
      { name: "C#", bar: "[██████░░░░]", status: "STABLE // ACTIVE", class: "green" },
      { name: "JavaScript", bar: "[███████░░░]", status: "STABLE // ACTIVE", class: "green" },
      { name: "Assembly", bar: "[████░░░░░░]", status: "CORE // DEPLOYED", class: "green" },
      { name: "HTML5 / CSS3", bar: "[█████████░]", status: "STABLE // ACTIVE", class: "green" }
    ]
  },
  embedded: {
    meta: ">> PINGING HARDWARE_BUS NODES...",
    items: [
      { name: "Arduino / Micros", bar: "[██████████]", status: "STABLE // INSTALLED", class: "green" },
      { name: "Robotics & Wiring", bar: "[█████████░]", status: "STABLE // INSTALLED", class: "green" },
      { name: "IoT Architecture", bar: "[██████░░░░]", status: "STABLE // ACTIVE", class: "green" },
      { name: "VHDL / Verilog", bar: "[███████░░░]", status: "COMPLIANT // CORE", class: "green" },
      { name: "Circuit Simulation", bar: "[████████░░]", status: "STABLE // INSTALLED", class: "green" }
    ]
  },
  spatial: {
    meta: ">> LOADING SPATIAL_SCHEMATIC DESIGN DRIVERS...",
    items: [
      { name: "AutoCAD", bar: "[█████████░]", status: "STABLE // DEPLOYED", class: "green" },
      { name: "Revit", bar: "[███████░░░]", status: "STABLE // DEPLOYED", class: "green" }
    ]
  },
  aux: {
    meta: ">> RUNNING RUNTIME COMPILATION FOR AUX_DEPENDENCIES...",
    items: [
      { name: "React.js", bar: "[██░░░░░░░░]", status: "COMPILING // 54%", class: "yellow" },
      { name: "Node.js", bar: "[██░░░░░░░░]", status: "COMPILING // 48%", class: "yellow" },
      { name: "Java", bar: "[██████░░░░]", status: "STABLE // COMPILED", class: "green" },
      { name: "Laravel", bar: "[████░░░░░░]", status: "STABLE // DEPLOYED", class: "green" },
      { name: "SQL Databases", bar: "[██████░░░░]", status: "STABLE // SECURED", class: "green" },
      { name: "Git / GitHub", bar: "[████████░░]", status: "STABLE // VERSION_ON", class: "green" },
      { name: "Ubuntu (Linux)", bar: "[██████░░░░]", status: "STABLE // MAIN_OS", class: "green" },
      { name: "Cisco Tracer / Octave", bar: "[██████░░░░]", status: "STABLE // ROUTED", class: "green" }
    ]
  }
};

const folderNodes = document.querySelectorAll('.folder-node');
const reportDisplay = document.getElementById('skills-report-display');

folderNodes.forEach(node => {
  node.addEventListener('click', () => {
    folderNodes.forEach(item => item.classList.remove('active'));
    node.classList.add('active');

    const targetKey = node.getAttribute('data-target');
    const data = skillsData[targetKey];

    if (!data || !reportDisplay) return;

    let outputHTML = `<p class="report-meta">${data.meta}</p>`;
    
    data.items.forEach(item => {
      outputHTML += `
        <div class="ascii-report-line" style="animation: fadeEffect 0.2s ease-in-out forwards;">
          <span class="tech-name">${item.name}</span>
          <span class="ascii-bar">${item.bar}</span>
          <span class="tech-status ${item.class}">${item.status}</span>
        </div>
      `;
    });

    reportDisplay.innerHTML = outputHTML;
  });
});

// ==========================================
// GITHUB PORTFOLIO COMMIT NAVIGATOR
// ==========================================
const projects = [
  {
    title: "automated-toll-gate-system",
    desc: "An automated hardware-software prototype designed to streamline vehicle access control through secure physical and digital verification. This system implements real-time RFID tag authentication via SPI communication protocols, utilizing optimized microcontroller logic for low-latency sensor responsiveness. It features continuous servo motor tracking and precise calibration routines to ensure smooth, automated barrier gate deployment upon successful credentials verification.",
    image: "projects-section/rfid.jpg",
    lang: "C++ (Arduino)",
    langColor: "#f34b7d",
    tag1: "★ RC522 SPI",
    tag2: "⑂ SG90 Servo"
  },
  {
    title: "smart-water-dispenser",
    desc: "A contactless automated liquid management system engineered for high-precision proximity sensing and safe mechanical operation. The system utilizes ultrasonic sensor arrays paired with calibrated distance logic to trigger hands-free dispensing, completely isolating the fluid path. It features a dedicated 5V solenoid relay switching mechanism alongside hardware debouncing rules to prevent accidental triggers, false reads, and fluid spillage.",
    image: "projects-section/dispenser.jpg",
    lang: "C++ (Arduino)",
    langColor: "#f34b7d",
    tag1: "★ HC-SR04",
    tag2: "⑂ 5V Relay"
  },
  {
    title: "helcare-sanitizer",
    desc: "A specialized hardware appliance featuring automated dual-mode sterilization managed through responsive microcontroller execution. The device safely sequences simultaneous UV-C radiation and dry-heat sanitization cycles while enforcing strict physical safeguards. It relies on hardware interrupt routines (ISRs) paired with microswitches to instantly terminate operation upon a door breach, ensuring absolute user safety during operation.",
    image: "projects-section/helcare.jpg",
    lang: "C++ (Arduino)",
    langColor: "#f34b7d",
    tag1: "★ UV-C Safety",
    tag2: "⑂ Door ISR"
  },
  {
    title: "system-portfolio",
    desc: "A high-performance portfolio platform styled as a terminal operating system emulator to showcase multidisciplinary engineering work across hardware and software domains. Built using semantic HTML5, vanilla JavaScript, and responsive CSS Grid layouts, the interface handles smooth tab routing and interactive UI state transitions without external dependencies. The codebase is fully optimized for minimal asset overhead, achieving instant render performance across all viewports.",
    image: "projects-section/portf.jpg",
    lang: "HTML, CSS, JavaScript",
    langColor: "#f1e05a",
    tag1: "★ HTML5",
    tag2: "⑂ CSS Grid"
  },
  {
    title: "love-letter",
    desc: "An interactive and personalized digital love letter website created to turn a traditional letter into an immersive web experience. The project features a multi-page letter, animated transitions, interactive envelope elements, photo collages, decorative effects, and custom typography. Built with HTML, CSS, and JavaScript, the website focuses on creating a polished and responsive interface while incorporating interactive elements and custom animations. It allowed me to explore front-end development, DOM manipulation, responsive design, and CSS animations while turning a personal concept into a complete interactive website.",
    image: "projects-section/letter.jpg",
    lang: "HTML, CSS, JavaScript",
    langColor: "#9830dd",
    tag1: "★ HTML5",
    tag2: "⑂ CSS Grid"
  }
];

let currentIndex = 0;

function updateProjectCard() {
  const project = projects[currentIndex];
  if (!project) return;

  const img = document.getElementById("project-img");
  const bgImg = document.getElementById("project-bg-blur");
  const title = document.getElementById("repo-title");
  const desc = document.getElementById("repo-desc");
  const langText = document.getElementById("repo-lang");
  const langDot = document.querySelector(".lang-dot");
  const tag1 = document.getElementById("tech-tag-1");
  const tag2 = document.getElementById("tech-tag-2");
  const commitStatus = document.getElementById("commit-status");

  // Safeguard transition setups if elements are present
  if (img) { img.style.transition = "opacity 0.15s ease"; img.style.opacity = "0.1"; }
  if (bgImg) { bgImg.style.transition = "opacity 0.15s ease"; bgImg.style.opacity = "0.1"; }

  setTimeout(() => {
    if (img) { img.src = project.image; img.style.opacity = "0.95"; }
    if (bgImg) { bgImg.src = project.image; bgImg.style.opacity = "0.6"; }
    if (title) title.textContent = project.title;
    if (desc) desc.textContent = project.desc;
    if (langText) langText.textContent = project.lang;
    if (langDot) langDot.style.backgroundColor = project.langColor;
    if (tag1) tag1.textContent = project.tag1;
    if (tag2) tag2.textContent = project.tag2;
    if (commitStatus) commitStatus.textContent = `COMMIT ${currentIndex + 1} OF ${projects.length}`;
  }, 150);
}

function prevCommit() {
  currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
  updateProjectCard();
}

// Right Arrow [ > ] Action
function nextCommit() {
  currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
  updateProjectCard();
}

// Ensure the portfolio displays its initial structure on page generation
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("project-img")) {
    updateProjectCard();
  }
});

// ==========================================
// SEC_05: GRAPHICS CLOCK & UTILITY UTILS
// ==========================================
function updateTelemetryClock() {
  const clockElement = document.getElementById("tel-clock");
  if (!clockElement) return;

  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedHours = String(hours).padStart(2, '0');

  clockElement.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
}
setInterval(updateTelemetryClock, 1000);
updateTelemetryClock();

// Copy to clipboard fallback logic
function copyEmailNode(textToCopy, element) {
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(textToCopy).then(() => {
    const metaTag = element.querySelector('.id-status');
    if (!metaTag) return;
    
    const originalText = metaTag.textContent;
    metaTag.textContent = "COPIED!";
    metaTag.style.color = "#ff00cc";
    element.style.borderColor = "#ff00cc";
    element.style.boxShadow = "0 0 12px rgba(255, 0, 204, 0.2)";

    setTimeout(() => {
      metaTag.textContent = originalText;
      metaTag.style.color = "#8b949e";
      element.style.borderColor = "#161b22";
      element.style.boxShadow = "none";
    }, 1500);
  });
}

// Interactive clicking pop effect for link nodes
function flashToken(element) {
  if (!element) return;
  element.style.borderColor = "#ff00cc";
  setTimeout(() => {
    element.style.borderColor = "#00f0ff";
  }, 300);
}

// ==========================================================================
// BACKGROUND MATRIX: PARALLAX & CANVAS DATA INTERACTION MATRIX
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const gridOverlay = document.querySelector(".blueprint-grid-overlay");
  const canvas = document.getElementById("matrix-data-canvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");

  // 1. SCROLL PARALLAX SYSTEM (Layer 1)
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    // Moves the blueprint grid at exactly 25% of scroll speed for distinct 3D depth
    if (gridOverlay) {
      gridOverlay.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0)`;
    }
  });

  // 2. RESIZE HANDLER FOR CANVAS CANVAS GENERATION
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // 3. LAYER 2 DATA ENTITIES: THE CONSTELLATION NODE NETWORK
  const nodeCount = 35;
  const nodes = [];
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2, // Ultra-slow organic drifting
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 1.5 + 0.5
    });
  }

  // 4. LAYER 3 DATA ENTITIES: VERTICAL CODE ADDRESS STREAMS
  const codeStreamsCount = 20;
  const streams = [];
  const hexChars = "0123456789ABCDEF//x0_7A_M4".split("");

  for (let i = 0; i < codeStreamsCount; i++) {
    streams.push({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * 0.4 + 0.1, // Rhythmic continuous climb rate
      text: "",
      lastUpdate: 0
    });
  }

  // 5. MASTER RENDERING ENGINE LOOP (Continuous execution)
  function renderMatrix() {
    ctx.clearRect(0, 0, width, height);

    // --- DRAWING LAYER 2: THE NODE NETWORK ---
    nodes.forEach((node, idx) => {
      // Advance positions gently
      node.x += node.vx;
      node.y += node.vy;

      // Screen boundary wrap-arounds
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Render the tiny hardware node coordinate point
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 240, 255, 0.15)";
      ctx.fill();

      // Check proximity links to draw the dynamic node webs
      for (let j = idx + 1; j < nodes.length; j++) {
        const nextNode = nodes[j];
        const dx = node.x - nextNode.x;
        const dy = node.y - nextNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If nodes are close, weave a laser connection thread
        if (distance < 180) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(nextNode.x, nextNode.y);
          // Fades seamlessly based on proximity distance calculations
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.04 * (1 - distance / 180)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    // --- DRAWING LAYER 3: CONTINUOUS CODE DRIFT ---
    ctx.font = "9px monospace";
    streams.forEach(stream => {
      // Update data string chunks at irregular intervals
      stream.y -= stream.speed; // Drifts upward
      
      // If code climbs off screen top, reset to loop at the bottom field
      if (stream.y < -50) {
        stream.y = height + Math.random() * 100;
        stream.x = Math.random() * width;
      }

      // Periodically rewrite hexadecimal structures on the fly
      if (Math.random() < 0.02) {
        const addr = "0x" + Math.floor(Math.random() * 256).toString(16).toUpperCase();
        const stat = Math.random() > 0.7 ? "[OK]" : "";
        stream.text = `${addr} ${stat}`;
      }

      ctx.fillStyle = "rgba(0, 240, 255, 0.05)";
      ctx.fillText(stream.text, stream.x, stream.y);
    });

    requestAnimationFrame(renderMatrix);
  }

  // Boot background telemetry processes
  renderMatrix();
});


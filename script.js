const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const roles = ['Business Analyst', 'Cloud Architect', 'AI Engineer', 'Security Analyst'];
const roleElement = document.getElementById('animated-role');

if (roleElement) {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeRole() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
      charIndex += 1;
      roleElement.textContent = currentRole.slice(0, charIndex);
      if (charIndex === currentRole.length) {
        deleting = true;
        setTimeout(typeRole, 1100);
        return;
      }
    } else {
      charIndex -= 1;
      roleElement.textContent = currentRole.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(typeRole, deleting ? 40 : 85);
  }

  typeRole();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');

      entry.target.querySelectorAll('.train-bar span').forEach((bar) => {
        const width = bar.getAttribute('data-width') || '0';
        bar.style.width = `${width}%`;
      });
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));

const canvas = document.getElementById('particle-canvas');
if (canvas) {
  const context = canvas.getContext('2d');
  const particleCount = 45;
  const particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createParticles() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i += 1) {
      particles.push({
        x: randomBetween(0, canvas.width),
        y: randomBetween(0, canvas.height),
        radius: randomBetween(1, 3.4),
        speedX: randomBetween(-0.25, 0.25),
        speedY: randomBetween(-0.2, 0.2),
        alpha: randomBetween(0.2, 0.7)
      });
    }
  }

  function drawParticles() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(138, 210, 255, ${particle.alpha})`;
      context.fill();
    });

    requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  createParticles();
  drawParticles();

  window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles();
  });
}

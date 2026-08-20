// ============================================
// PIPELINE RAIL — scroll spy + progress
// ============================================
const stages = document.querySelectorAll('.rail-stage');
const sections = Array.from(stages).map(s => document.getElementById(s.dataset.target));
const railProgress = document.getElementById('railProgress');
const mobileRail = document.getElementById('mobileRail');

function updateRail() {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
  if (railProgress) railProgress.style.height = (progress * 100) + '%';

  let activeIndex = 0;
  sections.forEach((sec, i) => {
    if (!sec) return;
    const rect = sec.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.5) activeIndex = i;
  });

  stages.forEach((stage, i) => {
    stage.classList.remove('active', 'passed');
    if (i === activeIndex) stage.classList.add('active');
    else if (i < activeIndex) stage.classList.add('passed');
  });

  if (mobileRail && stages[activeIndex]) {
    mobileRail.textContent = stages[activeIndex].querySelector('.rail-label').textContent;
  }
}

window.addEventListener('scroll', updateRail, { passive: true });
window.addEventListener('resize', updateRail);
updateRail();

stages.forEach(stage => {
  stage.addEventListener('click', () => {
    const target = document.getElementById(stage.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ============================================
// REVEAL ON SCROLL
// ============================================
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ============================================
// HERO TYPING EFFECT
// ============================================
const typingEl = document.getElementById('heroTyping');
const typingStrings = [
  'building React frontends & Node.js APIs',
  'automating deploys with Jenkins & Terraform',
  'running workloads on Docker & Kubernetes',
  'watching production with Prometheus & Grafana'
];

if (typingEl) {
  let strIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = typingStrings[strIndex];
    if (!deleting) {
      charIndex++;
      typingEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1600);
        return;
      }
    } else {
      charIndex--;
      typingEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        strIndex = (strIndex + 1) % typingStrings.length;
      }
    }
    setTimeout(typeLoop, deleting ? 28 : 42);
  }
  typeLoop();
}

// ============================================
// CONTACT FORM (mailto fallback — static site, no backend)
// ============================================
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:shubham.kumarjuly@gmail.com?subject=${subject}&body=${body}`;

    formNote.textContent = 'Opening your email client…';
    contactForm.reset();
  });
}

// ---------- Mobile nav toggle ----------
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// ---------- Project card expand ----------
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', (e) => {
    card.classList.toggle('open');
  });
});

// ---------- Contact form (Formspree) ----------
const meetingForm = document.getElementById('meeting-form');
if (meetingForm) {
  meetingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const submitBtn = meetingForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
      const res = await fetch(meetingForm.action, {
        method: 'POST',
        body: new FormData(meetingForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        status.textContent = "Thanks — your message is in. I'll get back to you shortly.";
        status.className = 'form-status show ok';
        meetingForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      status.textContent = "Something went wrong sending that. Try emailing sufyanautomates@gmail.com directly.";
      status.className = 'form-status show err';
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

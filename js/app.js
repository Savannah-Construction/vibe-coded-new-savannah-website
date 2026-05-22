const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const rotator = document.querySelector('[data-review-rotator]');
if (rotator) {
  const slides = [...rotator.querySelectorAll('.review-slide')];
  let index = 0;
  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 6500);
}

document.querySelectorAll('[data-oauth]').forEach((button) => {
  button.addEventListener('click', () => {
    alert('OAuth sign-in requires Google/Microsoft app credentials. The visual button is included; connect it to your chosen authentication provider before publishing.');
  });
});

document.querySelectorAll('[data-consultation-form]').forEach((form) => {
  let demoCode = '';
  const status = form.querySelector('[data-verification-status]');
  const sendCodeButton = form.querySelector('[data-send-code]');
  const emailInput = form.querySelector('input[name="email"]');
  const codeInput = form.querySelector('input[name="verification_code"]');

  sendCodeButton?.addEventListener('click', async () => {
    if (!emailInput || !emailInput.checkValidity()) {
      emailInput?.reportValidity();
      return;
    }
    const endpoint = form.dataset.verificationEndpoint;
    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: emailInput.value })
        });
        if (!response.ok) throw new Error('Verification service error');
        status.textContent = 'Verification code sent. Check your email.';
        status.className = 'form-note success';
      } catch (error) {
        status.textContent = 'Could not send verification code. Please try again or call 0800 006 007.';
        status.className = 'form-note error';
      }
      return;
    }
    demoCode = String(Math.floor(100000 + Math.random() * 900000));
    status.textContent = `Static preview only: demo verification code is ${demoCode}. Add a server endpoint before going live.`;
    status.className = 'form-note success';
    codeInput?.focus();
  });

  form.addEventListener('submit', (event) => {
    const emailOk = emailInput?.checkValidity();
    const codeValue = codeInput?.value.trim();
    if (!emailOk) {
      event.preventDefault();
      emailInput?.reportValidity();
      return;
    }
    if (!codeValue) {
      event.preventDefault();
      status.textContent = 'Send and enter the verification code before submitting.';
      status.className = 'form-note error';
      codeInput?.focus();
      return;
    }
    if (demoCode && codeValue !== demoCode) {
      event.preventDefault();
      status.textContent = 'Verification code does not match.';
      status.className = 'form-note error';
      codeInput?.focus();
    }
  });
});

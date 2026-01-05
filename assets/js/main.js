// =============================
// SMOOTH SCROLL FOR SINGLE-PAGE LINKS (Optional)
// =============================
// Only needed if you have anchor links on same page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =============================
// ACTIVE MENU HIGHLIGHT
// =============================
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('active');
  }
});

// =============================
// CONTACT FORM VALIDATION
// =============================
const form = document.getElementById('contact-form');

if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('form-status'); // or .querySelector('.form-status')

    // Simple validation
    if(name === '' || email === '' || message === ''){
      alert('Please fill in all fields.');
      return;
    }

    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      alert('Please enter a valid email address.');
      return;
    }

    status.textContent = 'Message sent successfully!';
  status.style.color = 'green';

    // If everything is valid, submit the form
    // For Formspree integration
    form.reset();
  });
}


// Grab the necessary DOM elements
const header = document.getElementById('main-header');
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

// --- 1. Scroll Event (Logo Slide Left) ---
window.addEventListener('scroll', () => {
  // Check if page has been scrolled down by more than 50px
  if (window.scrollY > 50) {
    header.classList.add('scrolled'); // Triggers CSS slide
  } else {
    header.classList.remove('scrolled'); // Goes back to center
  }
});

// --- 2. Click Event (Hamburger Menu Toggle) ---
menuBtn.addEventListener('click', () => {
  // Toggle active class to trigger CSS animations for the 'X' and slide menu
  menuBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// --- Intersection Observer for Scroll Animations ---
// This watches elements and triggers classes when they appear on screen

const observerOptions = {
  threshold: 0.2 // Triggers when 20% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      // 1. Reveal Fleet Cards
      if (entry.target.classList.contains('reveal')) {
        entry.target.classList.add('active');
      }
      
      // 2. Trigger SVG Map Drawing
      if (entry.target.id === 'packages') {
        entry.target.classList.add('active');
      }

      // 3. Trigger Number Counters
      if (entry.target.id === 'stats' && !entry.target.classList.contains('counted')) {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
          const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 200; // Lower number = faster
            const inc = target / speed;

            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 10);
            } else {
              counter.innerText = target + "+";
            }
          };
          updateCount();
        });
        // Prevent counting again if user scrolls up and down
        entry.target.classList.add('counted'); 
      }
    }
  });
}, observerOptions);

// Attach observer to elements
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
observer.observe(document.getElementById('packages'));
observer.observe(document.getElementById('stats'));
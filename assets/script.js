document.addEventListener('DOMContentLoaded', function() {
  const mobileNav = document.getElementById('mobilenav');
  const dropdown = document.getElementById('dropdown');

  if (mobileNav && dropdown) {
    mobileNav.addEventListener('click', function(e) {
      e.preventDefault();
      dropdown.classList.toggle('active');
    });
    // Optional: Hide dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target) && !mobileNav.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  }

  // Hero/Choices logic
  const groundedButton = document.getElementById('button-1');
  const groundedDisplay = document.getElementById('grounding-choice');
  
  const softnessButton = document.getElementById('button-3');
  const softnessDisplay = document.getElementById('softness-choice');

  const freedomButton = document.getElementById('button-2');
  const freedomDisplay = document.getElementById('freedom-choice');

  const energyButton = document.getElementById('button-4');
  const energyDisplay = document.getElementById('energy-choice');

  const heroSection = document.querySelector('.hero');

  // Helper to hide all choice sections
  function hideAllChoices() {
    if (groundedDisplay) groundedDisplay.style.display = 'none';
    if (softnessDisplay) softnessDisplay.style.display = 'none';
    if (freedomDisplay) freedomDisplay.style.display = 'none';
    if (energyDisplay) energyDisplay.style.display = 'none';
  }

  if (groundedButton && groundedDisplay && heroSection) {
    groundedButton.addEventListener('click', event => {
      // Hide hero section
      heroSection.style.display = 'none';
      hideAllChoices();
      // Show grounding section
      groundedDisplay.style.display = 'block';
    });
  }



  if (freedomButton && freedomDisplay && heroSection) {
    freedomButton.addEventListener('click', event => {
      // Hide hero section
      heroSection.style.display = 'none';
      hideAllChoices();
      // Show freedom section
      freedomDisplay.style.display = 'block';
    });
 
  }

  if (softnessButton && softnessDisplay && heroSection) {
    softnessButton.addEventListener('click', event => {
      heroSection.style.display = 'none';
      hideAllChoices();
      softnessDisplay.style.display = 'block';
    });
  }

  if (energyButton && energyDisplay && heroSection) {
    energyButton.addEventListener('click', event => {
      heroSection.style.display = 'none';
      hideAllChoices();
      energyDisplay.style.display = 'block';
    });
  }

  // Return buttons for each section
  const returnBtns = document.querySelectorAll('.return-btn');
  if (returnBtns && heroSection) {
    returnBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        hideAllChoices();
        // Show hero section
        heroSection.style.display = 'block';
      });
    });
  }
});
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
});


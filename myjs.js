// Form submission simulation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    document.getElementById('thankYouMessage').style.display = 'block';
});


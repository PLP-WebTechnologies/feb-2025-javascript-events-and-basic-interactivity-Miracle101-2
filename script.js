document.getElementById('clickBtn').addEventListener('click', () => {
    alert('You clicked the button!');
  });
  
  // Hover effect handled via CSS
  
  // Keypress Detection
  document.getElementById('keyInput').addEventListener('keyup', (e) => {
    console.log('Key pressed:', e.key);
  });
  
  // Double-click / Secret action
  function secretAction() {
    alert('🎉 You found the secret action!');
  }
  
  // Toggle color
  document.getElementById('colorToggleBtn').addEventListener('click', function () {
    this.classList.toggle('highlight');
    this.textContent = this.classList.contains('highlight') ? 'Color Changed!' : 'Toggle Color';
  });
  
  // Tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(this.dataset.target).classList.add('active');
    });
  });
  
  // Image Gallery
  let currentImage = 1;
  document.getElementById('nextImage').addEventListener('click', () => {
    currentImage++;
    const image = document.getElementById('galleryImage');
    image.src = `https://picsum.photos/200/300?random=${currentImage}`;
  });
  
  // Form Validation
  document.getElementById('registerForm').addEventListener('input', () => {
    const password = document.getElementById('password');
    const feedback = document.getElementById('feedback');
    if (password.value.length > 0 && password.value.length < 8) {
      feedback.textContent = 'Password must be at least 8 characters.';
    } else {
      feedback.textContent = '';
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
  
    if (!email.checkValidity()) {
      alert('Please enter a valid email.');
      return;
    }
  
    if (password.value.length < 8) {
      alert('Password must be at least 8 characters.');
      return;
    }
  
    alert('Form submitted successfully!');
  });
  
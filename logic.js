function togglePopup(id) {
    const popup = document.getElementById(id);
    
    // Periksa apakah popup sedang aktif atau tidak
    if (popup.classList.contains('active')) {
        // Jika aktif, nonaktifkan dan tunggu transisi selesai
        popup.classList.remove('active');
        popup.addEventListener('transitionend', function handler() {
            this.style.display = 'none'; // Sembunyikan sepenuhnya setelah transisi selesai
            this.removeEventListener('transitionend', handler);
        }, { once: true });
    } else {
        popup.style.display = 'flex';
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);
    }
}

const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navLinks.forEach(link => {
      link.classList.add('scrolled');
    });
  } else {
    navLinks.forEach(link => {
      link.classList.remove('scrolled');
    });
  }
});



// -------debugging------------

// console.log('Script loaded!'); // First thing in your script

// const navLinks = document.querySelectorAll('nav a');
// console.log('Number of nav links found:', navLinks.length);

// // Add detailed logging to scroll event
// window.addEventListener('scroll', () => {
//   console.log('Scroll detected! Position:', window.scrollY);
  
//   if (window.scrollY > 50) {
//     console.log('Adding scrolled class to', navLinks.length, 'links');
//     navLinks.forEach(link => {
//       link.classList.add('scrolled');
//       console.log('✓ Added class to:', link.textContent);
//     });
//   } else {
//     console.log('Removing scrolled class');
//     navLinks.forEach(link => {
//       link.classList.remove('scrolled');
//       console.log('✗ Removed class from:', link.textContent);
//     });
//   }
// });

// // Trigger manually once to test
// console.log('Manually triggering initial scroll check...');
// window.dispatchEvent(new Event('scroll'));

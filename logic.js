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
        // Jika tidak aktif, tampilkan dan aktifkan
        popup.style.display = 'flex';
        // Jeda singkat agar browser dapat mendaftarkan perubahan 'display' sebelum transisi
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);
    }
}
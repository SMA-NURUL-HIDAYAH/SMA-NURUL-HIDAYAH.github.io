// Smooth scrolling saat mengklik tautan internal di halaman
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      const offsetTop = target.offsetTop;
  
      window.scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    });
  });
//상단 제목용 반응형
    document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".site-title, .site-subtitle");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
        }
        });
    }, { threshold: 0.5 });

    targets.forEach(t => {
        t.style.animationPlayState = "paused";
        observer.observe(t);
    });
    });

 // 메뉴 토글 기능
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      toggle.classList.toggle('active');
    });

// 스크롤 시 카드가 보이면 애니메이션 실행
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // 한 번만 실행
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));

});

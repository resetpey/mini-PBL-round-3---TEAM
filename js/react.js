// main.js

document.addEventListener("DOMContentLoaded", () => {
  /* =============== 상단 타이틀 애니메이션 옵저버 =============== */
  (function titleObserver() {
    const targets = document.querySelectorAll(".site-title, .site-subtitle");
    if (!targets.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.style.animationPlayState = "running";
      });
    }, { threshold: 0.5 });
    targets.forEach(t => {
      t.style.animationPlayState = "paused";
      observer.observe(t);
    });
  })();

  /* =============== 메뉴 토글 (안전 확인 포함) =============== */
  (function menuToggle() {
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      toggle.classList.toggle('active');
    });
  })();

  /* =============== 스크롤로 보이는 카드 애니메이션 =============== */
  (function fadeUpObserver() {
    const cards = document.querySelectorAll(".fade-up");
    if (!cards.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    cards.forEach(card => observer.observe(card));
  })();

  /* =============== 조건 섹션 지연 애니메이션 (data-delay 사용) =============== */
  (function conditionObserver() {
    const items = document.querySelectorAll(".fade-up");
    if (!items.length) return;
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || "0", 10);
        setTimeout(() => el.classList.add("show"), delay);
        observer.unobserve(el);
      });
    }, { threshold: 0.18 });
    items.forEach(it => io.observe(it));
  })();

    const openApplyBtn = document.getElementById('open-apply-btn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalBg = document.getElementById('modalBg');
    const form = document.getElementById('applyForm');

    // 모달 열기
    openApplyBtn.addEventListener('click', () => {
      modalBg.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });

    // 모달 닫기
    closeModalBtn.addEventListener('click', () => {
      modalBg.style.display = 'none';
      document.body.style.overflow = 'auto';
    });

    // 클릭 시 배경 누르면 닫기
    modalBg.addEventListener('click', (e) => {
      if (e.target === modalBg) {
        modalBg.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });

    // 폼 제출 이벤트
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // 기본 HTML 유효성 검사 통과 여부 확인
      if (!form.checkValidity()) {
        alert('입력 조건을 다시 확인해주세요.');
        return;
      }

      alert('지원서가 성공적으로 제출되었습니다!');
      form.reset();
      modalBg.style.display = 'none';
      document.body.style.overflow = 'auto';
    });

});

let swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  autoplay: {
    delay: 3000,
  },
  allowTouchMove: true,
  loop: true,
});

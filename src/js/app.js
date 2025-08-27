const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,

  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },

});




// Function Accordion
function toggleAccordion(event) {
  const element = event.currentTarget;
  const content = element.nextElementSibling;
  const svgIcon = element.querySelector('svg');
  const image = document.getElementById('image-accordion');

  document.querySelectorAll('.accordion .content').forEach((item) => {
    item.style.maxHeight = null;
    item.style.marginBottom = null;
    item.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
  })

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.marginBottom = null;
    svgIcon.classList.remove('rotate-180');
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.marginBottom = "2rem";
    svgIcon.classList.add('rotate-180');
  }

  switch (element.id) {
    case 'ipad-iphone':
      image.src = './assets/accordion/ipad_iphone.jpg';
      break;
    case 'ipad-mac':
      image.src = './assets/accordion/ipad_mac.jpg';
      break;
    case 'ipad-watch':
      image.src = './assets/accordion/ipad_watch.jpg';
      break;
  }

}
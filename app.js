var swiper = new Swiper(".swiper" , {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    speed: 600,
    preventClicks:true,
    slidesPerView: "auto",
    coverflowEffect:{
        rotate: 0,
        stretch: 80,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      },
      on: {
        click(event) {
            swiper.slideto(this.clickedIndex);
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
});
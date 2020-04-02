class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.prevButton = this.carousel.querySelector(".left-button");
        this.nextButton = this.carousel.querySelector(".right-button");
        this.slides = this.carousel.querySelectorAll(".carousel-content");
        this.slides = Array.from(this.slides);
        this.slides.forEach(slide=>slide.style.zIndex = 0);
        this.slides.forEach(slide=>slide.style.opacity = 0);
        this.slides[0].style.opacity = 1;
        this.slides[0].style.zIndex = 1;
        this.counter = 0;
        this.slidesLength = this.slides.length;
        this.slidesIndex = this.slides[this.counter]
        this.changePrev = this.changePrev.bind(this);
        this.prevButton.addEventListener('click', this.changePrev);
        this.changeNext = this.changeNext.bind(this);
        this.nextButton.addEventListener('click', this.changeNext);
    }
    changePrev() {
        this.reset2 ()
        this.reset ()
        if(this.counter > 0) {
            this.counter = this.counter - 1;
          } else {
            this.counter = this.slidesLength -1
          }
          this.slidesIndex = this.slides[this.counter];
          this.reset2 ()
          TweenMax.to(this.slidesIndex, 1, {opacity:1});
          this.slidesIndex.style.zIndex++
    }
    changeNext() {
        this.reset2 ()
        this.reset ()
        if(this.counter < this.slidesLength - 1) {
            this.counter = this.counter + 1;
          } else {
            this.counter = 0;
          } 
          this.slidesIndex = this.slides[this.counter];
          this.reset2 ()
          TweenMax.to(this.slidesIndex, 1, {opacity:1});
          this.slidesIndex.style.zIndex++
    }
    reset () {
        this.slides.forEach(slide=>slide.style.zIndex = 0);
       
    }
    reset2 () {
        this.slides.forEach(slide=>slide.style.opacity = 0);
    }
}

let carousels = document.querySelectorAll(".carousel");
carousels.forEach(carousel => new Carousel(carousel));

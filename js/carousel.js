//Author: Joseph Latina

//Initialize Element Variables
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNavs = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNavs.children);
const slideWidth = slides[0].getBoundingClientRect().width;

//for each slide in the array, arrange them next to one another
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
})

/** -------------- FUNCTION DECLARATIONS -------------------- */
//Function declaration for moving the slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    //move the slide with a certain amount (in this case the left point of the target slide)
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    //update current slide
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

//Function declaration for updating the dots
const updateDots = (currentDot, targetDot) => {
    //Update current dot
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

//Function declaration for hiding or showing arrows
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {                        //If you are at the first index,
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === (slides.length - 1)) { //If you are at the last index,
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {                                        //Otherwise,
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
        console.log("Prev Button should appear")
    }
}

/** -------------- CLICK EVENT LISTENERS -------------------- */

// when I click left, move slides to left
prevButton.addEventListener('click', e => {
    //find current and target slide
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNavs.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    //move the slide and update current nav indicator
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    //Based on current index of nav indicator, add or remove the hidden class property for the arrows
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})

// when I click right, move slides to right
nextButton.addEventListener('click', e => {
    //find current and target slide
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNavs.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    //move the slide and update current nav indicator
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    //Based on current index of nav indicator, add or remove the hidden class property for the arrows
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})
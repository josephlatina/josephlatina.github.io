//Author: Joseph Latina

//Using APOD API to retrieve data
$.getJSON("https://api.nasa.gov/planetary/apod?api_key=3uQScKsHwfr0QjIygHMPvKmezxvJeZPfSigAajem", function(data) {
    
    var img = data.hdurl;
    var title = data.title;
    var date = data.date;
    var description = data.explanation;

    $(".apod").attr("src", img);
    $(".description").append(description);
    $(".date").append(date);
    $(".title").append(title);
})

//Using Mars Rover API to retrieve data
$.getJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=3uQScKsHwfr0QjIygHMPvKmezxvJeZPfSigAajem", function(data) {

    var items = data.photos;
    $.each(items, function(i, item) {
        if (item.id == "103383") {
            $("<img>").attr("src", item.img_src).appendTo(".mars-1");
            var title_1 = item.camera.full_name;
            var date_1 = item.earth_date;
            $(".mars-1-title").append(title_1);
            $(".mars-1-date").append(date_1);
        }
        else if (item.id == '409065') {
            $("<img>").attr("src", item.img_src).appendTo(".mars-2");
            var title_2 = item.camera.full_name;
            var date_2 = item.earth_date;
            $(".mars-2-title").append(title_2);
            $(".mars-2-date").append(date_2);
        }
        else {
            return;
        }
        console.log(item.id);

    })
})

//Initialize Elements
const button = document.querySelector('#landing-button');
const carousel = document.querySelector('.carousel__track');
const carousel_slides = Array.from(carousel.children);

button.classList.add('animate__animated', 'animate__fadeInUp', 'animate-delay');

//For each slide, add an event listener to the like button
carousel_slides.forEach((slide, index) => {
    const likebtn = slide.querySelector('.like-btn');
    const heart = likebtn.querySelector('.heart');
    const text = likebtn.querySelector('.text');
    likebtn.addEventListener('click', e => {
        likebtn.classList.toggle("heart-active");
        heart.classList.toggle("heart-active");
        text.classList.toggle("heart-active");
        console.log(likebtn);
    })
})






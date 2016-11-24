//To keep the logo and tagline the same size
function pageResize() {
        var w = window.outerWidth;
        var h = window.outerHeight;
        var tagline = document.getElementById("tagline");
        var logo = document.getElementById("logo");
        if(w <= 530) {
            logo.style.fontSize = '37.5px';
            tagline.style.fontSize = '8.5px';
            tagline.style.marginTop = '-33px';
        }
    
        else {
            logo.style.fontSize = '7vw';
            tagline.style.fontSize = '1.58vw';
            tagline.style.marginTop = '-6.4vw';
        }
    }

//Text on the photos on the portfolio page

function interact(n) {
    //Fields for elements
    var el = document.getElementById(n);
    var lilText = document.getElementById("lilText");
    var caption;
    //Dimentions
    var viewportOffset = el.getBoundingClientRect();
    var top = viewportOffset.top;
    var left = viewportOffset.left;
    var width = el.width;
    var height = el.height;
    var selectImg;
    
    //Caption for hover
    if(n == "curbar"){
        caption = "Promotional Video";
        selectImg = "curbar";
    }
    else if(n == "maths"){
        caption = "Mathematics Game";
        selectImg = 'maths';
    }
    else if(n == "mySite"){
        caption = "Personal Website";
        selectImg = 'mySite';
    }
    else if(n == "word"){
        caption = "Online Word Processor";
        selectImg = 'word';
    }

    //Calculations for location
    var y = top +(height*0.33);
    
    //Styling of the text
    lilText.innerHTML = caption;
    lilText.style.left = left + "px";
    lilText.style.width = width + "px";
    lilText.style.top = y + "px";
    lilText.style.display = "block";
    
    document.getElementById(selectImg).style.filter = "brightness(15%)";
    document.getElementById(selectImg).style.WebkitFilter = "brightness(15%)";
}

function interactText(){
    var caption = document.getElementById("lilText").innerHTML;
    var selectImg;
    if(caption == 'Promotional Video'){
        selectImg = "curbar";
        n = 'curbar';
    }
    else if(caption == 'Mathematics Game'){
        selectImg = "maths";
        n = 'maths';
    }
    else if(caption == 'Personal Website'){
        selectImg = "mySite";
        n = 'mySite';
    }
    else if(caption == 'Online Word Processor'){
        selectImg = "word";
        n = 'word';
    }
    
    document.getElementById(selectImg).style.filter = "brightness(15%)";
    document.getElementById(selectImg).style.WebkitFilter = "brightness(15%)";
    
    interact(n);
}

function mouseExit(n){
    var selectImg;
    document.getElementById("lilText").style.display = "none";
    
    //Assign which image to reset brightness
    if(n == "curbar"){
        selectImg = "curbar";
    }
    else if(n == "maths"){
        selectImg = "maths";
    }
    else if(n == "mySite"){
        selectImg = "mySite";
    }
    else if(n == "word"){
        selectImg = "word";
    }
    
    document.getElementById(selectImg).style.filter = "brightness(100%)";
    document.getElementById(selectImg).style.WebkitFilter = "brightness(100%)";
}

function redirect(){
    var caption = document.getElementById('lilText').innerHTML;
    if(caption == 'Promotional Video'){
        window.location = "projectCurbar.html";
    }
    else if(caption == 'Mathematics Game'){
        window.location = "projectMaths.html";
    }
    else if(caption == 'Personal Website'){
        window.location = "projectWebsite.html";
    }
    else if(caption == 'Online Word Processor'){
        window.location = "projectWord.html";
    }
}

//Javascript for the slideshow effect on the resume page

    var slideIndex = 1;
    showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
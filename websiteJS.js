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
        caption = "Curbar Promotional Video";
        selectImg = "curbar";
    }
    else if(n == "hannigan"){
        caption = "Hannigan Music";
        selectImg = 'hannigan';
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
    else if(n == "AJAX"){
        caption = "AJAX and JQuery Assignment";
        selectImg = 'AJAX';
    }
    else if(n == "IoT"){
        caption = "Internet of Things Assignment";
        selectImg = 'IoT';
    }
    else if(n == "graphics"){
        caption = "Graphics (Blender) Assignment";
        selectImg = 'graphics';
    }
    else if(n == "final"){
        caption = "Final Group Project";
        selectImg = 'final';
    }
    else if(n == "creative"){
        caption = "Computational Creativity Project";
        selectImg = 'creative';
    }
    else if(n == "photography"){
        caption = "Photography Portfolio";
        selectImg = 'photography';
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
    if(caption == 'Curbar Promotional Video'){
        selectImg = "curbar";
        n = 'curbar';
    }
    else if(caption == 'Hannigan Music'){
        selectImg = "hannigan";
        n = 'hannigan';
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
    else if(caption == 'AJAX and JQuery Assignment'){
        selectImg = "AJAX";
        n = 'AJAX';
    }
    else if(caption == 'Internet of Things Assignment'){
        selectImg = "IoT";
        n = 'IoT';
    }
    else if(caption == 'Graphics (Blender) Assignment'){
        selectImg = "graphics";
        n = 'graphics';
    }
    else if(caption == 'Final Group project'){
        selectImg = "final";
        n = 'final';
    }
    else if(caption == 'Computational Creativity Project'){
        selectImg = "creative";
        n = 'creative';
    }
    else if(caption == 'Photography Portfolio'){
        selectImg = "photography";
        n = 'photography';
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
    else if(n == "hannigan"){
        selectImg = "hannigan";
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
    else if(n == "AJAX"){
        selectImg = "AJAX";
    }
    else if(n == "IoT"){
        selectImg = "IoT";
    }
    else if(n == "graphics"){
        selectImg = "graphics";
    }
    else if(n == "final"){
        selectImg = "final";
    }
    else if(n == "creative"){
        selectImg = "creative";
    }
    else if(n == "photography"){
        selectImg = "photography";
    }
    
    document.getElementById(selectImg).style.filter = "brightness(100%)";
    document.getElementById(selectImg).style.WebkitFilter = "brightness(100%)";
}

function redirect(){
    var caption = document.getElementById('lilText').innerHTML;
    if(caption == 'Curbar Promotional Video'){
        window.location = "projectCurbar.html";
    }
    else if(caption == 'Hannigan Music'){
        window.location = "projectLiam.html";
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
    else if(caption == 'AJAX and JQuery Assignment'){
        window.location = "projectAJAX.html";
    }
    else if(caption == 'Internet of Things Assignment'){
        window.location = "projectIoT.html";
    }
    else if(caption == 'Graphics (Blender) Assignment'){
        window.location = "projectGraphics.html";
    }
    else if(caption == 'Final Group Project'){
        window.location = "projectFinal.html";
    }
    else if(caption == 'Computational Creativity Project'){
        window.location = "projectCreative.html";
    }
    else if(caption == 'Photography Portfolio'){
        window.location = "projectPhotography.html";
    }
}

function hideText(){
    document.getElementById("lilText").style.display = none;
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
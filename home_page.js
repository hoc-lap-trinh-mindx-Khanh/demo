let slideIndex = 1;
showDivs(slideIndex);
let autoSlide = 0 


function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}
function animate() {
    let left = document.getElementById("miner_button")
    let right = document.getElementsById("plus_button")
    left.addEventListener("click", function () {
        //  for (j = 0; j < dots.length; j++) {
        //      dots[j].className = dots[j].className.replace("w3-animate-left", "");
        //  }
        document.getElementsByClassName("mySlides").className += " w3-animate-left"

    })
    right.addEventListener("click", function () {
        document.getElementsByClassName("mySlides").className += " w3-animate-right"
    })
}
function showDivs(n) {
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dots_hover");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("w3-gray", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-gray";
}
function carousel() {
    var x = document.getElementsByClassName("mySlides");
    for (k = 0; k < x.length; k++) {
      x[k].style.display = "none";  
    }
    autoSlide++;
    if (autoSlide > x.length) {autoSlide = 1}    
    x[autoSlide-1].style.display = "block";
    setTimeout(carousel, 20000);    
}
carousel()



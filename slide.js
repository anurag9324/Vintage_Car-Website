const slides = document.querySelectorAll(".slide")
var counter = 0
console.log(slides)
slides.forEach(
    (slides,index) =>{
        slides.style.left = `${index * 100}%`
    }
)

var img = ['img/car(1).jpg', 'img/car(2).jpg', 'img/car(3).jpg', 
'img/car(4).jpg', 'img/car(5).jpg', 'img/car(6).jpg', 'img/car(7).jpg','img/car(8).jpg'];

var
    i = 0;

function slideShow() {
    document.getElementById("img").src = img[i];
    if (i < img.length - 1) {
        i++;
    } else(i = 0)
    setTimeout("slideShow()",2000);
}
window.onload = slideShow;
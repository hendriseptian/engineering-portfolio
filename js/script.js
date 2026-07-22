const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-img");

const close = document.querySelector(".close");

images.forEach(img=>{

    img.addEventListener("click",function(){

        lightbox.style.display="flex";

        lightboxImage.src=this.src;

    });

});

close.addEventListener("click",function(){

    lightbox.style.display="none";

});

lightbox.addEventListener("click",function(e){

    if(e.target!==lightboxImage){

        lightbox.style.display="none";

    }

});

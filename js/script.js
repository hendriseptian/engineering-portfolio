/*=========================================================
  Engineering Portfolio
  Author : Hendri Septian
  Version : 1.0
=========================================================*/

/*=========================================================
PROJECT DATA
=========================================================*/

const projects = [

{
    title: "Downspot Layout & Detail",

    description:
    "Preparation of roof drainage layout and detailed drawings including downspout routing, gutter connections and installation details for steel buildings.",

    folder: "downspot-layout-detail",

    preview: "downspot layout & detail-1.jpg",

    images: [
        "downspot layout & detail-1.jpg",
        "downspot layout & detail-2.jpg",
        "downspot layout & detail-3.jpg"
    ]
},

{
    title: "General Arrangement Pressure Vessel",

    description:
    "Development of general arrangement drawings for pressure vessels including dimensions, nozzles, support configuration and fabrication references.",

    folder: "general-arrangement-pressure-vessel",

    preview: "PV 01A.jpg",

    images: [
        "PV 01A.jpg"
    ]
},

{
    title: "General Arrangement Steel Building",

    description:
    "Preparation of structural steel general arrangement drawings including framing plans, elevations and construction details.",

    folder: "general-arrangement-steel-building",

    preview: "general arrangement-1.jpg",

    images: [
        "general arrangement-1.jpg",
        "general arrangement-2.jpg",
        "general arrangement-3.jpg"
    ]
},

{
    title: "General Arrangement Storage Tank",

    description:
    "Development of storage tank general arrangement drawings including shell, roof, bottom plate and nozzle arrangement.",

    folder: "general-arrangement-storage-tank",

    preview: "TANK-001.jpg",

    images: [
        "TANK-001.jpg"
    ]
},

{
    title: "Pipeline Schematic",

    description:
    "Preparation of pipeline schematic drawings illustrating process flow, equipment connections and pipeline routing.",

    folder: "pipeline-schematic",

    preview: "Pipeline Schematic Drawing.jpg",

    images: [
        "Pipeline Schematic Drawing.jpg"
    ]
},

{
    title: "Piping & Instrumentation Diagram",

    description:
    "Development of piping and instrumentation diagrams showing piping systems, valves, instruments and process equipment.",

    folder: "piping-instrumentation-diagram",

    preview: "P&ID.jpg",

    images: [
        "P&ID.jpg"
    ]
}

];

/*=========================================================
ELEMENT
=========================================================*/

const portfolio = document.getElementById("portfolio");
const menu = document.getElementById("menu");

/*=========================================================
LIGHTBOX ELEMENT
(akan dipakai pada Part 2)
=========================================================*/

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const btnClose = document.getElementById("close");
const btnPrev = document.getElementById("previous");
const btnNext = document.getElementById("next");
const imageCounter = document.getElementById("image-counter");

/*=========================================================
GLOBAL VARIABLE
=========================================================*/

let currentProject = null;
let currentIndex = 0;

/*=========================================================
GENERATE PROJECT
=========================================================*/

projects.forEach(project => {

    /*==========================
      Navigation
    ==========================*/

    const menuItem = document.createElement("li");

    menuItem.innerHTML =
    `<a href="#${project.folder}">
        ${project.title}
    </a>`;

    menu.appendChild(menuItem);

    /*==========================
      Section
    ==========================*/

    const section = document.createElement("section");

    section.className = "project";

    section.id = project.folder;

    /*==========================
      Project Card
    ==========================*/

    section.innerHTML = `

    <div class="project-content">

        <h2>

            ${project.title}

        </h2>

        <p class="description">

            ${project.description}

        </p>

        <img

            class="preview"

            src="portofolio/${project.folder}/${encodeURIComponent(project.preview)}"

            alt="${project.title}"

            loading="lazy"

        >

        <div class="project-footer">

            <div class="drawing-count">

                ${project.images.length}
                Drawing${project.images.length > 1 ? "s" : ""}

            </div>

            <button class="view-btn">

                View Full Size

            </button>

        </div>

    </div>

    `;

    /*==========================
      Button Event
    ==========================*/

    const button =
        section.querySelector(".view-btn");

    button.addEventListener("click", () => {

        openGallery(project,0);

    });

    portfolio.appendChild(section);

});

/*=========================================================
OPEN GALLERY
=========================================================*/

function openGallery(project,index){

    currentProject = project;

    currentIndex = index;

    updateLightbox();

    lightbox.classList.add("active");

    document.body.style.overflow="hidden";

}

/*=========================================================
UPDATE IMAGE
=========================================================*/

function updateLightbox(){

    if(!currentProject) return;

    lightboxImage.src =
    `portofolio/${currentProject.folder}/${encodeURIComponent(currentProject.images[currentIndex])}`;

    imageCounter.textContent =
    `${currentIndex+1} / ${currentProject.images.length}`;

}
/*=========================================================
CLICK PREVIEW IMAGE
=========================================================*/

document.querySelectorAll(".preview").forEach((img,index)=>{

    img.addEventListener("click",()=>{

        openGallery(projects[index],0);

    });

});

/*=========================================================
NEXT IMAGE
=========================================================*/

function nextImage(){

    if(!currentProject) return;

    currentIndex++;

    if(currentIndex >= currentProject.images.length){

        currentIndex = 0;

    }

    updateLightbox();

}

/*=========================================================
PREVIOUS IMAGE
=========================================================*/

function previousImage(){

    if(!currentProject) return;

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = currentProject.images.length-1;

    }

    updateLightbox();

}

/*=========================================================
BUTTON EVENT
=========================================================*/

btnNext.addEventListener("click",()=>{

    nextImage();

});

btnPrev.addEventListener("click",()=>{

    previousImage();

});

/*=========================================================
CLOSE LIGHTBOX
=========================================================*/

function closeLightbox(){

    lightbox.classList.remove("active");

    document.body.style.overflow="auto";

}

btnClose.addEventListener("click",()=>{

    closeLightbox();

});

/*=========================================================
CLICK BACKGROUND TO CLOSE
=========================================================*/

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});

/*=========================================================
KEYBOARD
=========================================================*/

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    switch(e.key){

        case "ArrowRight":

            nextImage();

        break;

        case "ArrowLeft":

            previousImage();

        break;

        case "Escape":

            closeLightbox();

        break;

    }

});

/*=========================================================
IMAGE ERROR
=========================================================*/

lightboxImage.addEventListener("error",()=>{

    console.error("Image not found.");

});

/*=========================================================
PRELOAD IMAGE
=========================================================*/

function preloadImages(){

    projects.forEach(project=>{

        project.images.forEach(file=>{

            const img=new Image();

            img.src=`portofolio/${project.folder}/${encodeURIComponent(file)}`;

        });

    });

}

preloadImages();

/*=========================================================
BACK TO TOP
=========================================================*/

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.style.display="block";

    }

    else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================================
LOADING
=========================================================*/

const loading=document.getElementById("loading");

window.addEventListener("load",()=>{

    loading.style.display="none";

});

/*=========================================================
END PART 2
=========================================================*/
/*=========================================================
ZOOM & DRAG
=========================================================*/

let scale = 1;
let translateX = 0;
let translateY = 0;

let isDragging = false;

let startX = 0;
let startY = 0;

/*=========================================================
UPDATE IMAGE TRANSFORM
=========================================================*/

function updateTransform(){

    lightboxImage.style.transform =
    `translate(${translateX}px, ${translateY}px) scale(${scale})`;

}

/*=========================================================
RESET ZOOM
=========================================================*/

function resetZoom(){

    scale = 1;

    translateX = 0;

    translateY = 0;

    updateTransform();

}

/*=========================================================
RESET WHEN IMAGE CHANGES
=========================================================*/

const originalUpdateLightbox = updateLightbox;

updateLightbox = function(){

    originalUpdateLightbox();

    resetZoom();

}

/*=========================================================
MOUSE WHEEL ZOOM
=========================================================*/

lightboxImage.addEventListener("wheel",(e)=>{

    e.preventDefault();

    if(e.deltaY < 0){

        scale += 0.15;

    }else{

        scale -= 0.15;

    }

    if(scale < 1){

        scale = 1;

    }

    if(scale > 5){

        scale = 5;

    }

    updateTransform();

});

/*=========================================================
DOUBLE CLICK RESET
=========================================================*/

lightboxImage.addEventListener("dblclick",()=>{

    resetZoom();

});

/*=========================================================
DRAG IMAGE
=========================================================*/

lightboxImage.addEventListener("mousedown",(e)=>{

    if(scale <= 1) return;

    isDragging = true;

    startX = e.clientX - translateX;

    startY = e.clientY - translateY;

});

document.addEventListener("mousemove",(e)=>{

    if(!isDragging) return;

    translateX = e.clientX - startX;

    translateY = e.clientY - startY;

    updateTransform();

});

document.addEventListener("mouseup",()=>{

    isDragging = false;

});

/*=========================================================
TOUCH DRAG
=========================================================*/

lightboxImage.addEventListener("touchstart",(e)=>{

    if(scale <= 1) return;

    isDragging = true;

    startX = e.touches[0].clientX - translateX;

    startY = e.touches[0].clientY - translateY;

});

lightboxImage.addEventListener("touchmove",(e)=>{

    if(!isDragging) return;

    translateX = e.touches[0].clientX - startX;

    translateY = e.touches[0].clientY - startY;

    updateTransform();

});

lightboxImage.addEventListener("touchend",()=>{

    isDragging = false;

});

/*=========================================================
SWIPE NEXT / PREVIOUS
=========================================================*/

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart",(e)=>{

    touchStartX = e.changedTouches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

    touchEndX = e.changedTouches[0].clientX;

    const distance = touchStartX - touchEndX;

    if(Math.abs(distance) < 60) return;

    if(distance > 0){

        nextImage();

    }

    else{

        previousImage();

    }

});

/*=========================================================
PREVENT IMAGE DRAG
=========================================================*/

lightboxImage.addEventListener("dragstart",(e)=>{

    e.preventDefault();

});

/*=========================================================
RESET WHEN CLOSE
=========================================================*/

const originalClose = closeLightbox;

closeLightbox = function(){

    resetZoom();

    originalClose();

};
/*=========================================================
PART 4
FINAL FEATURES
=========================================================*/

/*=========================================================
ACTIVE MENU
=========================================================*/

const sections = document.querySelectorAll(".project");
const menuLinks = document.querySelectorAll("#menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.id;

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================================
SMOOTH IMAGE TRANSITION
=========================================================*/

function fadeImage(callback){

    lightboxImage.style.opacity = 0;

    setTimeout(() => {

        callback();

        lightboxImage.style.opacity = 1;

    },150);

}


/*=========================================================
OVERRIDE NEXT
=========================================================*/

const oldNext = nextImage;

nextImage = function(){

    fadeImage(() => {

        oldNext();

    });

}


/*=========================================================
OVERRIDE PREVIOUS
=========================================================*/

const oldPrevious = previousImage;

previousImage = function(){

    fadeImage(() => {

        oldPrevious();

    });

}


/*=========================================================
IMAGE FALLBACK
=========================================================*/

document.querySelectorAll(".preview").forEach(img=>{

    img.addEventListener("error",()=>{

        img.src="https://placehold.co/1200x800?text=Image+Not+Found";

    });

});


/*=========================================================
LIGHTBOX FALLBACK
=========================================================*/

lightboxImage.addEventListener("error",()=>{

    lightboxImage.src="https://placehold.co/1200x800?text=Image+Not+Found";

});


/*=========================================================
WINDOW RESIZE
=========================================================*/

window.addEventListener("resize",()=>{

    resetZoom();

});


/*=========================================================
ORIENTATION CHANGE
=========================================================*/

window.addEventListener("orientationchange",()=>{

    resetZoom();

});


/*=========================================================
LAZY OBSERVER
=========================================================*/

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});


document.querySelectorAll(".project").forEach(project=>{

    observer.observe(project);

});


/*=========================================================
SCROLL REVEAL
=========================================================*/

document.querySelectorAll(".project").forEach(card=>{

    card.style.opacity=0;

    card.style.transform="translateY(40px)";

});


document.querySelectorAll(".project").forEach(card=>{

    observer.observe(card);

});


/*=========================================================
PRELOAD NEXT IMAGE
=========================================================*/

function preloadNext(){

    if(!currentProject) return;

    let next=currentIndex+1;

    if(next>=currentProject.images.length){

        next=0;

    }

    const img=new Image();

    img.src=`portofolio/${currentProject.folder}/${encodeURIComponent(currentProject.images[next])}`;

}


const oldUpdate=updateLightbox;

updateLightbox=function(){

    oldUpdate();

    preloadNext();

}


/*=========================================================
COPYRIGHT
=========================================================*/

console.log(
"%cEngineering Portfolio\n© Hendri Septian",
"color:#0F4C81;font-size:16px;font-weight:bold;"
);


/*=========================================================
DISABLE RIGHT CLICK
(Optional)
=========================================================*/

// document.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
// });


/*=========================================================
DISABLE IMAGE DRAG
=========================================================*/

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("draggable","false");

});


/*=========================================================
END
=========================================================*/

console.log("Engineering Portfolio Loaded Successfully");

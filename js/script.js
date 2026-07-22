/*==================================================
ENGINEERING PORTFOLIO
Author : Hendri Septian
Version : 1.0
==================================================*/

/*==================================================
PROJECT DATA
==================================================*/

const projects = [

{
    title: "Downspot Layout & Detail",

    description:
    "Roof gutter layout and detailed engineering drawings including gutter arrangement, downspout routing and installation details.",

    folder: "downspot-layout-detail",

    preview: "downspot layout & detail-1.jpg",

    images: [

        "downspot layout & detail-1.jpg",
        "downspot layout & detail-2.jpg",
        "downspot layout & detail-3.jpg"

    ]

},

{
    title: "Pressure Vessel",

    description:
    "General arrangement drawing for pressure vessel including nozzle orientation, support configuration and principal dimensions.",

    folder: "general-arrangement-pressure-vessel",

    preview: "PV 01A.jpg",

    images: [

        "PV 01A.jpg"

    ]

},

{
    title: "Steel Building",

    description:
    "General arrangement steel building layout including view.",

    folder: "general-arrangement-steel-building",

    preview: "general arrangement-1.jpg",

    images: [

        "general arrangement-1.jpg",
        "general arrangement-2.jpg",
        "general arrangement-3.jpg"

    ]

},

{
    title: "Structural Framing Plan & Elevation",

    description:
    "Structural framing drawings including plan and elevation views with beam, column and structural member layout.",

    folder: "structural-framing-plan-and-elevation",

    preview: "01.jpg",

    images: [

        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg"
        

    ]

},

{
    title: "Architectural Insulation Layout and Detail",

    description:
    "Architectural insulation layout and detail drawings showing insulation arrangement, material application and installation details.",

    folder: "architectural-insulation-layout-and-detail",

    preview: "01.jpg",

    images: [

        "01.jpg",
        "02.jpg",
        "03.jpg"
        

    ]

},
    
{
    title: "Storage Tank",

    description:
    "General arrangement drawing of atmospheric storage tank including shell, roof, bottom plate and nozzle arrangement.",

    folder: "general-arrangement-storage-tank",

    preview: "TANK-001.jpg",

    images: [

        "TANK-001.jpg"

    ]

},

{
    title: "Pipeline Schematic",

    description:
    "Pipeline schematic drawing showing flow direction, equipment connection and pipeline routing.",

    folder: "pipeline-schematic",

    preview: "Pipeline Schematic Drawing.jpg",

    images: [

        "Pipeline Schematic Drawing.jpg"

    ]

},

{
    title: "Piping & Instrumentation Diagram",

    description:
    "Process piping and instrumentation diagram showing equipment, valves and instruments.",

    folder: "piping-instrumentation-diagram",

    preview: "P&ID.jpg",

    images: [

        "P&ID.jpg"

    ]

}

];

/*==================================================
HTML ELEMENT
==================================================*/

const menu = document.getElementById("menu");

const portfolio = document.getElementById("portfolio");

const lightbox = document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightbox-image");

const imageCounter =
document.getElementById("image-counter");

const btnClose =
document.getElementById("close");

const btnPrevious =
document.getElementById("previous");

const btnNext =
document.getElementById("next");

const loading =
document.getElementById("loading");

const backToTop =
document.getElementById("backToTop");

/*==================================================
GLOBAL VARIABLE
==================================================*/

let currentProject = null;

let currentImage = 0;

let zoom = 1;

/*==================================================
GENERATE PROJECT CARD
==================================================*/

projects.forEach(project => {

    /*==============================
    Navigation
    ==============================*/

    const menuItem = document.createElement("li");

    menuItem.innerHTML =

    `<a href="#${project.folder}">

        ${project.title}

    </a>`;

    menu.appendChild(menuItem);

    /*==============================
    Card
    ==============================*/

    const section = document.createElement("section");

    section.className = "project";

    section.id = project.folder;

    section.innerHTML =

`
<div class="project-content">

<h2>

${project.title}

</h2>

<p class="description">

${project.description}

</p>

<img

class="preview"

loading="lazy"

src="portofolio/${project.folder}/${encodeURIComponent(project.preview)}"

alt="${project.title}"

>

<div class="project-footer">

<div class="drawing-count">

${project.images.length}
Drawing${project.images.length>1?"s":""}

</div>

<button class="view-btn">

View Full Size

</button>

</div>

</div>
`;

    portfolio.appendChild(section);

    /*==============================
    Event
    ==============================*/

    const preview =
    section.querySelector(".preview");

    const button =
    section.querySelector(".view-btn");

    preview.addEventListener("click",()=>{

        openGallery(project,0);

    });

    button.addEventListener("click",()=>{

        openGallery(project,0);

    });

});

/*==================================================
OPEN GALLERY
==================================================*/

function openGallery(project,index){

    currentProject = project;

    currentImage = index;

    updateImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}

/*==================================================
UPDATE IMAGE
==================================================*/

function updateImage(){

    if(currentProject==null) return;

    lightboxImage.src =

`portofolio/${currentProject.folder}/${encodeURIComponent(currentProject.images[currentImage])}`;

    imageCounter.innerHTML =

`${currentImage+1} / ${currentProject.images.length}`;

}

/*==================================================
WINDOW LOAD
==================================================*/

window.addEventListener("load",()=>{

    loading.style.display="none";

});
/*==================================================
CLOSE GALLERY
==================================================*/

function closeGallery(){

    lightbox.classList.remove("active");

    document.body.style.overflow="auto";

}

btnClose.addEventListener("click",closeGallery);

/*==================================================
NEXT IMAGE
==================================================*/

function nextImage(){

    if(!currentProject) return;

    currentImage++;

    if(currentImage>=currentProject.images.length){

        currentImage=0;

    }

    fadeImage();

}

/*==================================================
PREVIOUS IMAGE
==================================================*/

function previousImage(){

    if(!currentProject) return;

    currentImage--;

    if(currentImage<0){

        currentImage=currentProject.images.length-1;

    }

    fadeImage();

}

/*==================================================
FADE TRANSITION
==================================================*/

function fadeImage(){

    lightboxImage.style.opacity="0";

    setTimeout(()=>{

        updateImage();

        lightboxImage.style.opacity="1";

    },180);

}

/*==================================================
BUTTON EVENT
==================================================*/

btnNext.addEventListener("click",nextImage);

btnPrevious.addEventListener("click",previousImage);

/*==================================================
CLICK OUTSIDE IMAGE
==================================================*/

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeGallery();

    }

});

/*==================================================
KEYBOARD
==================================================*/

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

            closeGallery();

        break;

    }

});

/*==================================================
BACK TO TOP
==================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

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

/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections=document.querySelectorAll(".project");

const navLinks=document.querySelectorAll("#menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        const height=section.offsetHeight;

        if(window.scrollY>=top &&
           window.scrollY<top+height){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*==================================================
IMAGE ERROR HANDLER
==================================================*/

document.querySelectorAll(".preview").forEach(img=>{

    img.addEventListener("error",()=>{

        img.alt="Image not found";

        img.style.opacity=".4";

    });

});

lightboxImage.addEventListener("error",()=>{

    lightboxImage.alt="Image not found";

});

/*==================================================
PRELOAD CURRENT PROJECT
==================================================*/

function preloadProject(project){

    project.images.forEach(file=>{

        const img=new Image();

        img.src=`portofolio/${project.folder}/${encodeURIComponent(file)}`;

    });

}

projects.forEach(preloadProject);
/*==================================================
PART 3
ZOOM - DRAG - SWIPE - FINAL
==================================================*/

/*==================================================
ZOOM VARIABLE
==================================================*/

let scale = 1;

let translateX = 0;

let translateY = 0;

let isDragging = false;

let startX = 0;

let startY = 0;

/*==================================================
UPDATE TRANSFORM
==================================================*/

function updateTransform(){

    lightboxImage.style.transform =
    `translate(${translateX}px, ${translateY}px) scale(${scale})`;

}

/*==================================================
RESET ZOOM
==================================================*/

function resetZoom(){

    scale = 1;

    translateX = 0;

    translateY = 0;

    updateTransform();

}

/*==================================================
RESET EVERY IMAGE CHANGE
==================================================*/

const originalUpdateImage = updateImage;

updateImage = function(){

    originalUpdateImage();

    resetZoom();

}

/*==================================================
MOUSE WHEEL ZOOM
==================================================*/

lightboxImage.addEventListener("wheel",(e)=>{

    e.preventDefault();

    const step = 0.15;

    if(e.deltaY < 0){

        scale += step;

    }else{

        scale -= step;

    }

    if(scale < 1){

        scale = 1;

    }

    if(scale > 5){

        scale = 5;

    }

    updateTransform();

},{passive:false});

/*==================================================
DOUBLE CLICK RESET
==================================================*/

lightboxImage.addEventListener("dblclick",()=>{

    resetZoom();

});

/*==================================================
START DRAG
==================================================*/

lightboxImage.addEventListener("mousedown",(e)=>{

    if(scale <= 1) return;

    isDragging = true;

    startX = e.clientX - translateX;

    startY = e.clientY - translateY;

    lightboxImage.style.cursor = "grabbing";

});

/*==================================================
DRAGGING
==================================================*/

document.addEventListener("mousemove",(e)=>{

    if(!isDragging) return;

    translateX = e.clientX - startX;

    translateY = e.clientY - startY;

    updateTransform();

});

/*==================================================
STOP DRAG
==================================================*/

document.addEventListener("mouseup",()=>{

    isDragging = false;

    lightboxImage.style.cursor = "grab";

});

/*==================================================
TOUCH DRAG
==================================================*/

lightboxImage.addEventListener("touchstart",(e)=>{

    if(scale<=1) return;

    isDragging=true;

    startX=e.touches[0].clientX-translateX;

    startY=e.touches[0].clientY-translateY;

});

lightboxImage.addEventListener("touchmove",(e)=>{

    if(!isDragging) return;

    translateX=e.touches[0].clientX-startX;

    translateY=e.touches[0].clientY-startY;

    updateTransform();

});

lightboxImage.addEventListener("touchend",()=>{

    isDragging=false;

});

/*==================================================
SWIPE
==================================================*/

let touchStartX=0;

let touchEndX=0;

lightbox.addEventListener("touchstart",(e)=>{

    touchStartX=e.changedTouches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

    touchEndX=e.changedTouches[0].clientX;

    const distance=touchStartX-touchEndX;

    if(Math.abs(distance)<60) return;

    if(distance>0){

        nextImage();

    }

    else{

        previousImage();

    }

});

/*==================================================
PREVENT IMAGE DRAG
==================================================*/

lightboxImage.setAttribute("draggable","false");

lightboxImage.addEventListener("dragstart",(e)=>{

    e.preventDefault();

});

/*==================================================
RESET WHEN CLOSE
==================================================*/

const originalCloseGallery = closeGallery;

closeGallery = function(){

    resetZoom();

    originalCloseGallery();

}

/*==================================================
WINDOW RESIZE
==================================================*/

window.addEventListener("resize",()=>{

    resetZoom();

});

/*==================================================
ORIENTATION CHANGE
==================================================*/

window.addEventListener("orientationchange",()=>{

    resetZoom();

});

/*==================================================
SMOOTH REVEAL
==================================================*/

const revealObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".project").forEach(card=>{

    revealObserver.observe(card);

});

/*==================================================
CONSOLE
==================================================*/

console.log(
"%cEngineering Portfolio Loaded",
"color:#0F4C81;font-size:16px;font-weight:bold;"
);

/*==================================================
END
==================================================*/

const projects = [

{
title:"Downspot Layout & Detail",
folder:"downspot-layout-detail",
images:[
"downspot layout & detail-1.jpg",
"downspot layout & detail-2.jpg",
"downspot layout & detail-3.jpg"
]
},

{
title:"General Arrangement Pressure Vessel",
folder:"general-arrangement-pressure-vessel",
images:[
"PV 01A.jpg"
]
},

{
title:"General Arrangement Steel Building",
folder:"general-arrangement-steel-building",
images:[
"general arrangement-1.jpg",
"general arrangement-2.jpg",
"general arrangement-3.jpg"
]
},

{
title:"General Arrangement Storage Tank",
folder:"general-arrangement-storage-tank",
images:[
"TANK-001.jpg"
]
},

{
title:"Pipeline Schematic",
folder:"pipeline-schematic",
images:[
"Pipeline Schematic Drawing.jpg"
]
},

{
title:"Piping & Instrumentation Diagram",
folder:"piping-instrumentation-diagram",
images:[
"P&ID.jpg"
]
}

];

const container = document.getElementById("portfolio");
const menu = document.getElementById("menu");

projects.forEach(project => {

    const li = document.createElement("li");
    li.innerHTML = `<a href="#${project.folder}">${project.title}</a>`;
    menu.appendChild(li);

    const section = document.createElement("section");
    section.className = "project";
    section.id = project.folder;

    section.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.images.length} Drawing(s)</p>
        <div class="gallery"></div>
    `;

    const gallery = section.querySelector(".gallery");

    project.images.forEach(file => {

        const img = document.createElement("img");

        img.src = `portofolio/${project.folder}/${file}`;

        img.loading = "lazy";

        img.alt = project.title;

        gallery.appendChild(img);

    });

    container.appendChild(section);

});

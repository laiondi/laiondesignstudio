// funcion para que cuando hago scroll hacia abajo aparezca el menubar y la barra 
//para regresar arriba, y si no que desaparezca
// busco la opcion de window, le digo que si hace scroll y si el scroll en Y es 
// mayor a 20 entonces agregar el menu y cualquier otro caso que lo saque


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");   
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500 ){
            $('.scroll-up-btn').addClass("show");

        }else{
            $('.scroll-up-btn').removeClass("show");
        }
});


// barra para regresar arriba

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0})
})


// barra de menu (hamburguesa)
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

// cerrar el menu mobile al tocar un link
// (antes esto pasaba "por accidente" porque los <a> del menu
// tambien tenian la clase .menu-btn, lo que ademas rompia el
// toggle del icono hamburguesa. Ahora es explícito.)
$('.menu-link').click(function(){
    $('.navbar .menu').removeClass("active");
    $('.menu-btn i').removeClass("active");
});

// animacion de tipeo (solo si existe un elemento .typing)
if (document.querySelector(".typing")) {
    new Typed(".typing", {
        strings: ["Designer", "Ilustrator", "Developer", "Photographer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}


});


// =========================================================
// PORTFOLIO DINÁMICO
// Los datos se cargan desde projects.js.
// =========================================================
(function initPortfolio() {
    const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
    const archive = Array.isArray(window.PORTFOLIO_ARCHIVE) ? window.PORTFOLIO_ARCHIVE : [];

    const grid = document.getElementById("portfolio-grid");
    const filters = document.getElementById("portfolio-filters");
    const archiveWrap = document.getElementById("portfolio-archive-wrap");
    const archiveGrid = document.getElementById("portfolio-archive");
    const modal = document.getElementById("project-modal");

    if (!grid || !filters || !modal) return;

    let currentProjectIndex = 0;
    let activeCategory = "All";
    let lastFocusedElement = null;

    const escapeHtml = (value = "") => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    function normalizeProject(project, index) {
        return {
            id: project.id || `project-${index + 1}`,
            title: project.title || `Project ${index + 1}`,
            category: project.category || "Other",
            subtitle: project.subtitle || "",
            cover: project.cover || "",
            year: project.year || "",
            description: project.description || "",
            tags: Array.isArray(project.tags) ? project.tags : [],
            gallery: Array.isArray(project.gallery) ? project.gallery : []
        };
    }

    const normalizedProjects = projects.map(normalizeProject);

    function createImage(src, alt, missingText) {
        const wrap = document.createElement("div");
        wrap.className = "project-card__image";

        const img = document.createElement("img");
        img.src = src || "";
        img.alt = alt || "";
        img.loading = "lazy";

        const missing = document.createElement("span");
        missing.className = "project-card__missing";
        missing.textContent = missingText || "Add project image";

        img.addEventListener("error", () => {
            img.style.display = "none";
            missing.style.display = "grid";
        });

        wrap.append(img, missing);
        return wrap;
    }

    function renderFilters() {
        const categories = ["All", ...new Set(normalizedProjects.map(project => project.category))];
        filters.innerHTML = "";

        categories.forEach(category => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "portfolio-filter";
            button.textContent = category;
            button.dataset.category = category;
            button.classList.toggle("is-active", category === activeCategory);
            button.setAttribute("aria-pressed", category === activeCategory ? "true" : "false");

            button.addEventListener("click", () => {
                activeCategory = category;
                filters.querySelectorAll(".portfolio-filter").forEach(btn => {
                    const active = btn.dataset.category === activeCategory;
                    btn.classList.toggle("is-active", active);
                    btn.setAttribute("aria-pressed", active ? "true" : "false");
                });
                filterCards();
            });

            filters.appendChild(button);
        });
    }

    function renderProjects() {
        grid.innerHTML = "";

        if (!normalizedProjects.length) {
            grid.innerHTML = '<p style="color:rgba(255,255,255,.5);padding:30px 0;">Add your first project in <strong>projects.js</strong>.</p>';
            return;
        }

        normalizedProjects.forEach((project, index) => {
            const card = document.createElement("article");
            card.className = "project-card";
            card.dataset.category = project.category;
            card.tabIndex = 0;
            card.setAttribute("role", "button");
            card.setAttribute("aria-label", `Open project: ${project.title}`);

            const image = createImage(project.cover, project.title, `Add cover: ${project.title}`);

            const body = document.createElement("div");
            body.className = "project-card__body";
            body.innerHTML = `
                <div>
                    <span class="project-card__category">${escapeHtml(project.category)}</span>
                    <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
                    ${project.subtitle ? `<div class="project-card__subtitle">${escapeHtml(project.subtitle)}</div>` : ""}
                </div>
                <span class="project-card__arrow" aria-hidden="true">→</span>
            `;

            card.append(image, body);
            card.addEventListener("click", () => openProject(index));
            card.addEventListener("keydown", event => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProject(index);
                }
            });

            grid.appendChild(card);
        });
    }

    function filterCards() {
        grid.querySelectorAll(".project-card").forEach(card => {
            card.hidden = activeCategory !== "All" && card.dataset.category !== activeCategory;
        });
    }

    function renderArchive() {
        if (!archiveWrap || !archiveGrid || !archive.length) return;
        archiveWrap.hidden = false;
        archiveGrid.innerHTML = "";

        archive.forEach(item => {
            const figure = document.createElement("figure");
            figure.className = "portfolio-archive__item";

            const img = document.createElement("img");
            img.src = item.image || "";
            img.alt = item.title || "Archive image";
            img.loading = "lazy";

            const missing = document.createElement("span");
            missing.className = "portfolio-archive__missing";
            missing.textContent = "Add image";

            img.addEventListener("error", () => {
                img.style.display = "none";
                missing.style.display = "grid";
            });

            figure.append(img, missing);
            if (item.title) {
                const caption = document.createElement("figcaption");
                caption.className = "portfolio-archive__caption";
                caption.textContent = item.title;
                figure.appendChild(caption);
            }
            archiveGrid.appendChild(figure);
        });
    }

    const cover = document.getElementById("project-modal-cover");
    const modalCategory = document.getElementById("project-modal-category");
    const modalTitle = document.getElementById("project-modal-title");
    const modalYear = document.getElementById("project-modal-year");
    const modalDescription = document.getElementById("project-modal-description");
    const modalTags = document.getElementById("project-modal-tags");
    const modalGallery = document.getElementById("project-modal-gallery");
    const modalGalleryWrap = document.getElementById("project-modal-gallery-wrap");
    const prevButton = document.getElementById("project-prev");
    const nextButton = document.getElementById("project-next");

    function fillProject(index) {
        const project = normalizedProjects[index];
        if (!project) return;

        currentProjectIndex = index;
        cover.src = project.cover || "";
        cover.alt = project.title;
        modalCategory.textContent = project.category;
        modalTitle.textContent = project.title;
        modalYear.textContent = project.year;
        modalDescription.textContent = project.description;

        modalTags.innerHTML = "";
        project.tags.forEach(tag => {
            const span = document.createElement("span");
            span.className = "project-modal__tag";
            span.textContent = tag;
            modalTags.appendChild(span);
        });

        modalGallery.innerHTML = "";
        modalGalleryWrap.hidden = project.gallery.length === 0;

        project.gallery.forEach((item, galleryIndex) => {
            const galleryItem = typeof item === "string" ? { image: item, caption: "" } : item;
            const figure = document.createElement("figure");
            figure.className = "project-gallery-item";

            const image = document.createElement("img");
            image.src = galleryItem.image || "";
            image.alt = galleryItem.alt || `${project.title} — image ${galleryIndex + 1}`;
            image.loading = "lazy";
            figure.appendChild(image);

            if (galleryItem.caption) {
                const caption = document.createElement("figcaption");
                caption.textContent = galleryItem.caption;
                figure.appendChild(caption);
            }

            modalGallery.appendChild(figure);
        });

        prevButton.disabled = index <= 0;
        nextButton.disabled = index >= normalizedProjects.length - 1;
        modal.querySelector(".project-modal__panel").scrollTop = 0;
    }

    function openProject(index) {
        if (!normalizedProjects[index]) return;
        lastFocusedElement = document.activeElement;
        fillProject(index);
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("project-open");
        modal.querySelector(".project-modal__close").focus();
    }

    function closeProject() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("project-open");
        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }
    }

    modal.querySelectorAll("[data-project-close]").forEach(button => {
        button.addEventListener("click", closeProject);
    });

    prevButton.addEventListener("click", () => {
        if (currentProjectIndex > 0) fillProject(currentProjectIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        if (currentProjectIndex < normalizedProjects.length - 1) fillProject(currentProjectIndex + 1);
    });

    document.addEventListener("keydown", event => {
        if (!modal.classList.contains("is-open")) return;
        if (event.key === "Escape") closeProject();
        if (event.key === "ArrowLeft" && !prevButton.disabled) fillProject(currentProjectIndex - 1);
        if (event.key === "ArrowRight" && !nextButton.disabled) fillProject(currentProjectIndex + 1);
    });

    renderFilters();
    renderProjects();
    renderArchive();
})();


// owl carousel script

$('.carousel').owlCarousel({
    margin:20,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,

// aca eligo la cantidad de items y como se empiezan a repetir

    responsive: {
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
});

// =========================================================
// HOME NOTE / GADGET
// Cambiá solamente estos valores cuando quieras publicar una nueva nota.
// =========================================================
const homeNote = {
    date: "20.08.2026",
    title: "WT# i do?",
    text: "Industrial Design · Furniture · Product Development",
    author: "— Leandro AKA Laion"
};

document.addEventListener("DOMContentLoaded", function () {
    const date = document.getElementById("home-note-date");
    const title = document.getElementById("home-note-title");
    const text = document.getElementById("home-note-text");
    const author = document.getElementById("home-note-author");

    if (date) date.textContent = homeNote.date;
    if (title) title.textContent = homeNote.title;
    if (text) text.textContent = homeNote.text;
    if (author) author.textContent = homeNote.author;
});


// =========================================================
// PIZARRA
// =========================================================
document.addEventListener("DOMContentLoaded", function () {
    const btnAbrir = document.getElementById("btnAbrir");
    const btnCerrar = document.getElementById("btnCerrar");
    const contenedor = document.getElementById("pizarraContenedor");
    const canvas = document.getElementById("pizarra");

    if (!btnAbrir || !btnCerrar || !contenedor || !canvas) return;

    const ctx = canvas.getContext("2d");
    let dibujando = false;

    function redimensionarCanvas() {
        const ratio = window.devicePixelRatio || 1;
        canvas.width = Math.floor(window.innerWidth * ratio);
        canvas.height = Math.floor(window.innerHeight * ratio);
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
    }

    function obtenerPosicion(event) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    btnAbrir.addEventListener("click", () => {
        contenedor.style.display = "block";
        contenedor.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        redimensionarCanvas();
    });

    btnCerrar.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        contenedor.style.display = "none";
        contenedor.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    });

    canvas.addEventListener("pointerdown", (event) => {
        dibujando = true;
        canvas.setPointerCapture(event.pointerId);
        const punto = obtenerPosicion(event);
        ctx.beginPath();
        ctx.moveTo(punto.x, punto.y);
    });

    canvas.addEventListener("pointermove", (event) => {
        if (!dibujando) return;
        const punto = obtenerPosicion(event);
        ctx.lineTo(punto.x, punto.y);
        ctx.stroke();
    });

    function terminarTrazo(event) {
        dibujando = false;
        if (event.pointerId !== undefined && canvas.hasPointerCapture(event.pointerId)) {
            canvas.releasePointerCapture(event.pointerId);
        }
    }

    canvas.addEventListener("pointerup", terminarTrazo);
    canvas.addEventListener("pointercancel", terminarTrazo);

    window.addEventListener("resize", () => {
        if (contenedor.style.display === "block") {
            redimensionarCanvas();
        }
    });
});



// BOTON DE APAGAR

document.addEventListener("DOMContentLoaded", () => {
    const shutdownBtn = document.getElementById("shutdown-btn");
    const screenOverlay = document.getElementById("screen-overlay");

    if (shutdownBtn && screenOverlay) {
        shutdownBtn.addEventListener("click", () => {
            screenOverlay.classList.add("active");
        });

        screenOverlay.addEventListener("click", () => {
            screenOverlay.classList.remove("active");
        });
    }
});

// LANDING PAGE INICIO

document.addEventListener("DOMContentLoaded", () => {
    const tourLanding = document.getElementById("tour-landing");
    const closeTourBtn = document.getElementById("close-tour-btn");

    if (closeTourBtn && tourLanding) {
        closeTourBtn.addEventListener("click", () => {
            tourLanding.classList.add("exit");
            
            // Opcional: Si quieres guardar en el navegador que el usuario ya vio el tour
            // para que no le vuelva a aparecer cada vez que recarga, puedes usar localStorage:
            // localStorage.setItem("tourCompleted", "true");
        });
    }
});


// =========================================================
// RELOJ DEL HOME
// Usa la hora local del dispositivo del visitante
// =========================================================

(function initHomeClock() {

    const clockTime = document.getElementById("home-clock-time");
    const clockDate = document.getElementById("home-clock-date");

    function updateClock() {

        const now = new Date();

        if (clockTime) {
            clockTime.textContent = new Intl.DateTimeFormat(undefined, {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            }).format(now);
        }

        if (clockDate) {
            clockDate.textContent = new Intl.DateTimeFormat(undefined, {
                weekday: "short",
                day: "2-digit",
                month: "short"
            }).format(now);
        }
    }

    updateClock();

    window.setInterval(updateClock, 1000);

})();


// Hide and show menu

const menuBtn = document.querySelector("#hamburger");
const menuBtnClose = document.querySelector("#close-menu");
const menu = document.querySelector("nav");

function showMenu () {
    menu.classList.add("show-menu");
    menuBtn.style.display = "none";
    menuBtnClose.style.display = "block";
}

function hideMenu () {
    menu.classList.remove("show-menu");
    menuBtn.style.display = "block";
    menuBtnClose.style.display = "none";
}

menuBtn.addEventListener("click", () => {
    showMenu()
})

menuBtnClose.addEventListener("click", () => {
    hideMenu()
})


// Navigation

const aboutBtn = document.getElementById("about__btn");
const workBtn = document.getElementById("work__btn");
const logo = document.querySelector(".logo");

const about = document.getElementById("about");
const work = document.getElementById("my-work__watermark");

aboutBtn.addEventListener("click", () => {
    about.scrollIntoView({ behavior: "smooth" })
    hideMenu()
})

workBtn.addEventListener("click", () => {
    work.scrollIntoView({ behavior: "smooth" })
    hideMenu()
})

logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    })
})

// Project Modal

const readMore = document.querySelectorAll(".readMore");
const showModal = document.querySelector(".show-modal");
const closeModal = document.querySelector("#close-modal");

const modalContainer = document.querySelector("#modal-container");

const hbp = document.querySelector("#modal-content__hpb");
const modalContent = document.querySelector("#modal__input");
const rainydays = document.querySelector("#modal-content__rainydays");

readMore.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn);

        modalContainer.style.display = "flex";

        if (btn.classList.contains("show-hpb")) {
            modalContent.innerHTML = `
            <div>
                <h1 class="underline">Helt På Bærtur</h1>
                <div class="modal-text">
                    <p>This was the school exam for the first year at Noroff. The task was to create a blog about a topic of our own choosing, and give it life using HTML, CSS and JavaScript only. We  were also to use WordPress as a headless CMS, to store the images and blogposts.</p>
                    <p>I chose to make a travel blog where i wrote about everything outdoorsy, which is something i am passionate about.</p>
                    <p>During this project, i learned a lot about the fundamentals of JavaScript. We had to implement many elements i had little to none experience with, which was a bit of a challenge. But in the end everything worked it self out, and i had alot more skills in my toolbox of web-creation.</p>
                </div>        
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>                 
                <div class="icons">
                    <a href="https://github.com/PederZzen/exam1" target="_blank"><img src="./media/github.svg" alt="Github Icon"></a>
                    <a href="https://heltpabaertur.netlify.app/" target="_blank"><img src="./media//link-to-page.svg" alt="Go to web page icon "></a>
                </div> 
            </div>
            `
        }

        if (btn.classList.contains("show-csm")) {
            modalContent.innerHTML = `
            <div>
                <h1 class="underline">Community Science Museum</h1>
                <div class="modal-text">
                    <p>This was the final project on the first term at Noroff. We were to create the website for a museum, using HTML and CSS. I learned alot about the foundations of web-creation during this project.</p>
                    <p></p>
                </div>        
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>            
                <div class="icons">
                    <a href="https://github.com/PederZzen/Semester_Project_1" target="_blank"><img src="./media/github.svg" alt="Github Icon"></a>
                    <a href="https://thecsm.netlify.app/" target="_blank"><img src="./media//link-to-page.svg" alt="Go to web page icon "></a>
                </div>           
            </div> `
        } 

        if (btn.classList.contains("show-rainydays")) {
            modalContent.innerHTML = `
            <div>
                <h1 class="underline">RainyDays</h1>
                <div class="modal-text">
                    <p>An online store, specialized in selling high quality rain jackets. This was the first big project at Noroff. I learned alot in regards to design during this project. This is where the journey began!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eius a tenetur exercitationem tempore atque veniam esse beatae suscipit, eos quasi sit sapiente repellat porro quis voluptatibus non? Ad quae rerum quod non quo dolores molestiae est vitae tempora vero!</p>
                </div>        
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>        
                <div class="icons">
                    <a href="https://github.com/PederZzen/RainyDays" target="_blank"><img src="./media/github.svg" alt="Github Icon"></a>
                    <a href="https://rainydaysnorway.netlify.app/index.html" target="_blank"><img src="./media//link-to-page.svg" alt="Go to web page icon "></a>
                </div>
            </div> `
        } 
    })
})

closeModal.addEventListener("click", () => {
    modalContent.innerHTML = "";
    modalContainer.style.display = "none";
})

 

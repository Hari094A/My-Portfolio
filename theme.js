// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        menu.classList.toggle("show");

    });

}

// ===============================
// Close menu after click
// ===============================

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("show");

    });

});

// ===============================
// Dark Mode
// ===============================

const themeBtn=document.getElementById("theme-toggle");

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML='<i class="fas fa-sun"></i>';

}

themeBtn.onclick=function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML='<i class="fas fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML='<i class="fas fa-moon"></i>';

    }

};

// ===============================
// Typing Animation
// ===============================

const words=[

"Full Stack Developer",

"Web Developer",

"Java Developer",

"Frontend Developer"

];

let wordIndex=0;

let charIndex=0;

let currentWord="";

let isDeleting=false;

const typing=document.getElementById("typing");

function typeEffect(){

    currentWord=words[wordIndex];

    if(isDeleting){

        typing.textContent=currentWord.substring(0,charIndex--);

    }

    else{

        typing.textContent=currentWord.substring(0,charIndex++);

    }

    if(!isDeleting && charIndex===currentWord.length){

        isDeleting=true;

        setTimeout(typeEffect,1200);

        return;

    }

    if(isDeleting && charIndex===0){

        isDeleting=false;

        wordIndex++;

        if(wordIndex===words.length){

            wordIndex=0;

        }

    }

    setTimeout(typeEffect,isDeleting?50:120);

}

typeEffect();

// ===============================
// Scroll Animation
// ===============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

document.querySelectorAll(".about,.skills,.projects,.contact").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

// ===============================
// Active Navbar
// ===============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// Back To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

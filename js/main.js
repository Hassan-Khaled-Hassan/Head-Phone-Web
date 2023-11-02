let span = document.querySelector(".nav__toggle"),
  list = document.querySelector(".nav__list"),
  links = document.querySelectorAll(".nav__link"),
  blink=[...links];

span.onclick=function(){
    list.classList.toggle("active");
    span.classList.toggle("active")
}
links.forEach((link) => {
  link.addEventListener("click", function () {
    for (let i = 0; i < blink.length; i++) {
      blink[i].classList.remove("active-link");
    }
    link.classList.toggle("active-link");
  });
});
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);



const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);



var now = document.querySelectorAll(".nav__linkk"),
  noww = [...now],
  first=document.querySelectorAll(".products__card"),
  second=[...first]


now.forEach((link) => {
  link.addEventListener("click", function () {
    for (let i = 0; i < noww.length; i++) {
      noww[i].classList.remove("active-link");
    }
    link.classList.add("active-link");
    for (let i = 0; i < second.length; i++) {second[i].classList.remove("show");}
    for (let i = 0; i < second.length; i++) {
      if(!second[i].classList.contains(link.dataset.goal)){
        second[i].classList.add("show")
      }
    }
  });
});


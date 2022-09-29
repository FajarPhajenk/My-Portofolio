// ======== SHOW SIDEBAR =========
const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// ======== SIDEBAR SHOW =========
// = Validate if constatn Exist =
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

// ======== SIDEBAR HIDDEN =========
// = Validate if constatn Exist =
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

// ======== SKILLS TABS =========
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
    });

    target.classList.add("skills__active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });

    target.classList.add("skills__active");
  });
});

// ======== MIXITUP FILTER PORTOFOLIO =========
let mixerPortofolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

// ======== Link Active work =========
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((L) => L.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((L) => L.addEventListener("click", activeWork));

// ======== WORK POPUP =========
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__botton")) {
    togglePortofolioPopup();
    portofolioItemDetails(e.target.parentElement);
  }
});

function togglePortofolioPopup() {
  document.querySelector(".portofolio__popup").classList.toggle("open");
}

document
  .querySelector(".portofolio__popup-close")
  .addEventListener("click", togglePortofolioPopup);

function portofolioItemDetails(portofolioItem) {
  document.querySelector(".pp__thumbnail img").src =
    portofolioItem.querySelector(".work__img").src;
  document.querySelector(".portofolio__popup-subtittle span").innerHTML =
    portofolioItem.querySelector(".work__tittle").innerHTML;
  document.querySelector(".portofolio__popup-body").innerHTML =
    portofolioItem.querySelector(".work__item-details").innerHTML;
}
// ======== SERVICE MODAL =========
const modalViews = document.querySelectorAll(".services__modal"),
  modelBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modelBtns.forEach((modelBtns, i) => {
  modelBtns.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalCloses) => {
  modalCloses.addEventListener("click", () => {
    modalViews.forEach((modalViews) => {
      modalViews.classList.remove("active-modal");
    });
  });
});

// ======== Input Animation =========
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.add("focus");
  }
}
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// ======== SCROLL SECTION ACTIVE Link =========
// ======== get all section that have an id defined =========
const sections = document.querySelectorAll("section[id]");

// ======== Add an even listener listening for scroll =========
window, addEventListener("scroll", navHightLighter);

function navHightLighter() {
  let scrollY = window.pageYOffset;
  // ======== Got current scroll section =========
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
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

  // ======== Now we loop throught to get height, top and ID values for each =========
}

const NAV_BAR = document.querySelector("#header");
const NAV_BUTTON = document.querySelectorAll(".nav-link");
const NAV_DIST = document.querySelectorAll(".nav-distination");

NAV_BUTTON.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const ID = e.currentTarget.hash;
    const DIST = document.querySelector(ID);

    scrollTo(0, DIST.offsetTop - (NAV_BAR.offsetHeight - 1.5));
  });
});

// change navigation active on scroll
window.addEventListener("scroll", () => {
  processChange();
});

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function saveInput() {
  NAV_DIST.forEach((dist) => {
    const client = dist.getBoundingClientRect();
    const TOP = client.top - NAV_BAR.offsetHeight;
    const BOTTOM = client.bottom - NAV_BAR.offsetHeight;
    if (TOP <= 0 && BOTTOM >= 0) {
      if (dist.getAttribute("id") == "home") {
        changeActiveNav("home");
      }
      if (dist.getAttribute("id") == "about") {
        changeActiveNav("about");
      }
      if (dist.getAttribute("id") == "songs") {
        changeActiveNav("songs");
      }
    }
  });
}

function changeActiveNav(id) {
  NAV_BUTTON.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("href") == `#${id}`) {
      btn.classList.add("active");
    }
  });
}

const processChange = debounce(() => saveInput(), 50);

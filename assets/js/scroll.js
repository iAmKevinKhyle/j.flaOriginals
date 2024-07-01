// add animation to content on scroll
window.addEventListener("scroll", () => {
  addContentAnimation();
});

function addContentAnimation() {
  const SONG_CONTENT_ITEMS = document.querySelectorAll(".animation");

  SONG_CONTENT_ITEMS.forEach((item, i) => {
    const hasClass = item.classList.contains("pace");
    const content = item.getBoundingClientRect();
    const visible = content.y - (content.height + 225);

    if (hasClass) {
      if (visible <= -700) {
        item.classList.add("top");
        item.classList.remove("pace");
      }
      if (visible >= 201) {
        item.classList.remove("top");
        item.classList.remove("pace");
      }

      return;
    }

    const delay = item.dataset.delay;
    item.style.transitionDelay = delay + "ms";

    if (visible <= 200 && visible >= -699 && !hasClass) {
      item.classList.add("pace");
      item.classList.remove("top");
    }
  });
}

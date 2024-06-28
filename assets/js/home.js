const play = document.querySelector(".jfla-voice");

// play.addEventListener("mouseenter", (e) => playClip(e));
play.addEventListener("click", (e) => playClip(e));

function playClip(e) {
  removeFrame(thumbnail);

  let target = e.currentTarget;

  if (target.children[0].localName === "video") {
    return;
  }

  let clip = document.createElement("video");
  clip.src = "assets/clip/bedroom-singer-shorts.mp4";
  let icon = target.innerHTML;

  target.innerHTML = clip.outerHTML;
  clip.play();

  videoOnEnded(clip, icon, target);
}

function videoOnEnded(video, icon, target) {
  video.addEventListener("ended", () => {
    target.innerHTML = icon;
  });
}

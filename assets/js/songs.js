const ORIGINAL_SONGS = [
  {
    title: "Riding a T-Rex (with VIVINOS)",
    singer: "J.fla",
    published: "June 2, 2023",
    link: "https://www.youtube.com/watch?v=SiYR4ZCfHMo&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=1",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/SiYR4ZCfHMo?si=kG9aCNgbJRG9mVAR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "To Me",
    singer: "J.fla",
    published: "May 19, 2023",
    link: "https://www.youtube.com/watch?v=ZS6HeUBNWVw&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=2",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/ZS6HeUBNWVw?si=GD-qjAGQHTXOmGHj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Before I Met You",
    singer: "J.fla",
    published: "Febuary 3, 2023",
    link: "https://www.youtube.com/watch?v=gHy-005FOTE&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=3",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/gHy-005FOTE?si=Dn1rpfXPHCpcavd-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "The Hare",
    singer: "J.fla",
    published: "November 11, 2022",
    link: "https://www.youtube.com/watch?v=QaOM-82fb10&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=4",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/QaOM-82fb10?si=JGTxeCzCbb0r1pMx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Bedroom Singer",
    singer: "J.fla",
    published: "October 7, 2022",
    link: "https://www.youtube.com/watch?v=g_UuZAOOkiA&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=5",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/g_UuZAOOkiA?si=T2HyGj8ZjjlScZFO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Starlight",
    singer: "J.fla",
    published: "November 8, 2019",
    link: "https://www.youtube.com/watch?v=K6f-xTWMMuI&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=6",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/K6f-xTWMMuI?si=qqduxccl4xFSFmGL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Are You My Villain",
    singer: "J.fla",
    published: "October 11, 2019",
    link: "https://www.youtube.com/watch?v=kdy_fe71-0I&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=7",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/kdy_fe71-0I?si=bEJvM2eNiHQOhRVy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Good Vibe",
    singer: "J.fla",
    published: "September 6, 2019 ",
    link: "https://www.youtube.com/watch?v=NdoNRP-9shw&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=8",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/NdoNRP-9shw?si=N01By5RC6CDN48Ep" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Baby Baby Baby",
    singer: "J.fla",
    published: "June 13, 2016",
    link: "https://www.youtube.com/watch?v=MSPJt1onxVI&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=9",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/MSPJt1onxVI?si=kcUPQaCNv0wPVB4C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Hoping To Reach You",
    singer: "J.fla",
    published: "May 2, 2016",
    link: "https://www.youtube.com/watch?v=0BTwRjx3XuU&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=10",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/0BTwRjx3XuU?si=pwhmBjkyBB3cKAbT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Grey Skies",
    singer: "J.fla",
    published: "March 21, 2016",
    link: "https://www.youtube.com/watch?v=U27q1nja44c&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=11",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/U27q1nja44c?si=lC_7BT9RUi4uOTCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Already 2 Years",
    singer: "J.fla",
    published: "April 4, 2016",
    link: "https://www.youtube.com/watch?v=UBR7tnUJtq4&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=12",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/UBR7tnUJtq4?si=EvJoWxv77Ut4owvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Why",
    singer: "J.fla",
    published: "Febuary 16, 2015",
    link: "https://www.youtube.com/watch?v=wPKhPeifMFk&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=13",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/wPKhPeifMFk?si=Mzg8CGe_63q9xS6q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Good Vibe (GOLDHOUSE Remix)",
    singer: "J.fla",
    published: "October 4, 2019",
    link: "https://www.youtube.com/watch?v=i_uybtVVd4s&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=14",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/i_uybtVVd4s?si=--CFXC3WgYlAH5qc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "It Never Gets Easier",
    singer: "J.fla",
    published: "March 28, 2016",
    link: "https://www.youtube.com/watch?v=71IDL_TafIg&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=15",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/71IDL_TafIg?si=5T-0i4lOq0PR7Ukj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Good Vibe (Acoustic)",
    singer: "J.fla",
    published: "September 27, 2019",
    link: "https://www.youtube.com/watch?v=yc4SYQtgabI&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=16",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/yc4SYQtgabI?si=tWm6MSG3jsbs8WRB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "바보같은 STORY",
    singer: "J.fla",
    published: "July 26, 2013",
    link: "https://www.youtube.com/watch?v=JpDyYPxy3YA&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=17",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/JpDyYPxy3YA?si=Cp_ub7M7gB3xIsWL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Are You My Villain (Acoustic)",
    singer: "J.fla",
    published: "October 18, 2019",
    link: "https://www.youtube.com/watch?v=ePAyeQUDsAU&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=18",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/ePAyeQUDsAU?si=RqScL9pjSpwNG__Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "At The Time We Were",
    singer: "J.fla",
    published: "December 8, 2014",
    link: "https://www.youtube.com/watch?v=kVSaQnPyhMQ&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=20",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/kVSaQnPyhMQ?si=_5-CSrisOXoV4yHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Are You My Villain (SJUR Remix)",
    singer: "J.fla",
    published: "October 25, 2019",
    link: "https://www.youtube.com/watch?v=DJJ_721k5-g&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=21",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/DJJ_721k5-g?si=g8zGQKBgL-UYAau9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Stupid Story (Acoustic)",
    singer: "J.fla",
    published: "November 10, 2014",
    link: "https://www.youtube.com/watch?v=HgN9sGDk0qU&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=22",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/HgN9sGDk0qU?si=kb5YIi1uAQqW6ufy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "My Tiny Miracle",
    singer: "J.fla",
    published: "September 1, 2014",
    link: "https://www.youtube.com/watch?v=_k9T4dmo0js&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=23",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/_k9T4dmo0js?si=-9f1_8vd7HaYovHp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Sweet",
    singer: "J.fla",
    published: "October 18, 2013",
    link: "https://www.youtube.com/watch?v=kTWUWOi1ojw&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=24",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/kTWUWOi1ojw?si=WIe2auyMprev6-Yi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Invisible Me",
    singer: "J.fla",
    published: "June 9, 2023",
    link: "https://www.youtube.com/watch?v=LGJrotrHuTA&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=28",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/LGJrotrHuTA?si=-na1adn_ReYO3C75" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "My Childhood Dream",
    singer: "J.fla",
    published: "June 23, 2023",
    link: "https://www.youtube.com/watch?v=iivRH_79JhE&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=29",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/iivRH_79JhE?si=hU8za6eIo8S6EpG-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "A Four Leaf Clover (Visualizer)",
    singer: "J.fla",
    published: "July 14, 2023",
    link: "https://www.youtube.com/watch?v=MezczBL2fz0&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=30",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/MezczBL2fz0?si=9gIjj-K3L73WhN6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Hoping To Reach You (Live at FLARE concert)",
    singer: "J.fla",
    published: "November 3, 2023",
    link: "https://www.youtube.com/watch?v=KQFa22OJKSY&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=31",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/KQFa22OJKSY?si=dvI7iIjRQMrbrt9r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "On My Way To Meet You",
    singer: "J.fla",
    published: "March 22, 2024",
    link: "https://www.youtube.com/watch?v=MtltehPu888&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=32",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/MtltehPu888?si=j-3Ol3NFRvczjf5G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Aurora",
    singer: "J.fla",
    published: "May 4, 2024",
    link: "https://www.youtube.com/watch?v=Mj9_hrQ1TYM&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=33",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/Mj9_hrQ1TYM?si=MmFck_YnjANhiXvy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "Just Our Concert",
    singer: "J.fla",
    published: "May 11, 2024",
    link: "https://www.youtube.com/watch?v=Mj9_hrQ1TYM&list=PL4C2OaC1jQqTmP6vEECBB4HR8AGOuzspB&index=34",
    frame: `<iframe class="song-content-thumbnail" src="https://www.youtube.com/embed/WDxEe52SPO0?si=fWnvBokUD1hYgyn5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
];

const MUSIC_CONTAINER = document.querySelector(".music-content-container");
const SONG_LIST_CONTAINER = document.querySelector(".songs-list-container");

ORIGINAL_SONGS.forEach((music, i) => {
  createContent(music, i);
  createSongList(music, i);
});

function createContent(music, i) {
  const CARD = document.createElement("div");
  CARD.classList.add("card", "animation");
  CARD.setAttribute("id", createId(music.title, i));
  CARD.setAttribute("data-delay", Math.floor(Math.random() * 300) + 50);
  CARD.innerHTML = `
        <div class="card-left">
          <div class="image song-content-thumbnail" onclick="frameEventListener(this, ${i})" style="background: linear-gradient(360deg, #F8F4E1, rgba(255, 87, 34, 1) 45%);"><i class="fa-solid fa-music"></i></div>
        </div>
        <div class="card-right">
            <div class="card-right-top">
                <span class="label-title">Title: </span>
                <p class="song-title">${music.title}</p>
                <p class="singer">By ${music.singer}</p>
                <p class="published label">published:</p>
                <p class="published">${music.published}</p>
            </div>
            <div class="card-right-bottom">
                <button class="redirect redirect-button" data-link="${music.link}">Open in Youtube</button>
            </div>
        </div>
    `;
  MUSIC_CONTAINER.append(CARD);
}
function createSongList(music, i) {
  const li = document.createElement("li");
  li.setAttribute("data-id", createId(music.title, i));
  li.addEventListener("click", (e) => scrollToContent(e));
  li.classList.add("list-items");
  li.innerHTML = `
    <b><span class="songs-list-items">${music.title}</span></b>
  `;
  SONG_LIST_CONTAINER.append(li);
}
function createId(title, index) {
  let splitTitle = title.toLowerCase();
  splitTitle = splitTitle.split(" ");
  let id = splitTitle[0] + index + splitTitle[1];

  return id;
}
function generateRandomColor() {
  const red = Math.floor(Math.random() * 255 + 1);
  const green = Math.floor(Math.random() * 255 + 1);
  const blue = Math.floor(Math.random() * 255 + 1);
  const color = `rgba(${red}, ${green}, ${blue}, 1)`;

  return color;
}

const REDIRECT_BUTTONS = document.querySelectorAll(".redirect-button");
const SONG_LIST_ITEMS = document.querySelectorAll(".songs-list-items");

REDIRECT_BUTTONS.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const link = e.target.dataset.link;

    let a = document.createElement("a");
    a.target = "_blank";
    a.href = link;
    a.click();
  });
});

let frame, thumbnail, thumbnailParent, lastThumbnail;

function frameEventListener(e, i) {
  // get frame and parent alement
  frame = ORIGINAL_SONGS[i].frame;
  lastThumbnail = thumbnail;
  thumbnail = e;
  thumbnailParent = e.parentElement;

  // remove frame and add new frame
  removeFrame(lastThumbnail);
  thumbnail.remove();
  thumbnailParent.innerHTML = frame;

  // add and remove loader
  frameLoader();

  // clear console embeb error
  console.clear();
}
function removeFrame(item) {
  const NEW_SONG_CONTENT_THUMBNAIL = document.querySelectorAll(
    ".song-content-thumbnail"
  );
  NEW_SONG_CONTENT_THUMBNAIL.forEach((content) => {
    if (content.localName == "iframe") {
      const parent = content.parentElement;
      content.remove();
      parent.innerHTML = item.outerHTML;
    }
  });
}
function scrollToContent(e) {
  const id = e.currentTarget.dataset.id;
  const el = document.querySelector("#" + id);
  const top = el.getBoundingClientRect().top + window.scrollY;

  scrollTo(0, top - (NAV_BAR.offsetHeight + 16) - 200);
}
function frameLoader() {
  const frame = document.querySelector("iframe.song-content-thumbnail");
  const frameParent = frame.parentElement;
  const div = document.createElement("div");
  div.classList.add("loader");
  frameParent.append(div);

  frame.addEventListener("load", () => {
    div.remove();
  });
}

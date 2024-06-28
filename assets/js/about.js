const DETAILS = [
  ["Real Name", "김정화 (Kim Jung Hwa)"],
  ["Birthday", "June 10, 1987"],
  ["Age"],
  ["Occupations", "Singer - Songwriter - Youtuber"],
  ["Channel", "JFlaMusic", "https://www.youtube.com/user/JFlaMusic"],
];

const MONTHS = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function calculateAge() {
  const d = DETAILS[1][1].split(" ");
  const birthmonth = d[0];
  const birthday = parseInt(d[1]);
  const birthyear = parseInt(d[2]);

  const date = new Date();
  const monthAge = date.getMonth();
  const dayAge = date.getDate();
  const yearAge = date.getFullYear() - birthyear;
  let age = yearAge;

  if (MONTHS.indexOf(birthmonth) >= monthAge && birthday >= dayAge) {
    age--;
  }

  DETAILS[2].push(age);
}
calculateAge();

const DETAILS_CONTAINER = document.querySelector(".details-list-container");

DETAILS.forEach((detail) => {
  createContent(detail);
});

function createContent(details) {
  const ul = document.createElement("li");
  if (details[0] !== "Channel") {
    ul.innerHTML = `
              ${details[0]}: <b>${details[1]}</b>
          `;
  } else {
    ul.innerHTML = `
                  ${details[0]}: <b><a
                  href="${details[2]}"
                  class="reference"
                  target="_blank"
                  >${details[1]}</a
                ></b>
              `;
  }

  DETAILS_CONTAINER.append(ul);
}

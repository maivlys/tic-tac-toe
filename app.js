//-----⚪-----

const pos1 = {
  html: document.querySelector(".js-positon-1"),
  empty: true,
};
const pos2 = {
  html: document.querySelector(".js-positon-2"),
  empty: true,
};
const pos3 = {
  html: document.querySelector(".js-positon-3"),
  empty: true,
};
const pos4 = {
  html: document.querySelector(".js-positon-4"),
  empty: true,
};
const pos5 = {
  html: document.querySelector(".js-positon-5"),
  empty: true,
};
const pos6 = {
  html: document.querySelector(".js-positon-6"),
  empty: true,
};
const pos7 = {
  html: document.querySelector(".js-positon-7"),
  empty: true,
};
const pos8 = {
  html: document.querySelector(".js-positon-8"),
  empty: true,
};
const pos9 = {
  html: document.querySelector(".js-positon-9"),
  empty: true,
};

//---------------------------------------------------

pos1.html.addEventListener("click", () => {
  playersChoice(pos1);
  checkPosition();
});
pos2.html.addEventListener("click", () => {
  playersChoice(pos2);
  checkPosition();
});
pos3.html.addEventListener("click", () => {
  playersChoice(pos3);
  checkPosition();
});
pos4.html.addEventListener("click", () => {
  playersChoice(pos4);
  checkPosition();
});
pos5.html.addEventListener("click", () => {
  playersChoice(pos5);
  checkPosition();
});
pos6.html.addEventListener("click", () => {
  playersChoice(pos6);
  checkPosition();
});
pos7.html.addEventListener("click", () => {
  playersChoice(pos7);
  checkPosition();
});
pos8.html.addEventListener("click", () => {
  playersChoice(pos8);
  checkPosition();
});
pos9.html.addEventListener("click", () => {
  playersChoice(pos9);
  checkPosition();
});

//---------------------------------------------------

function playersChoice(playersPosition) {
  playersPosition.empty = false;
  playersPosition.html.innerHTML = `<p class="cross">✕</p>`;
  //FUNCTION
}

function checkPosition() {
  const wantedPosition = getObject(choosePosition());
  console.log(wantedPosition);
  if (wantedPosition.empty) {
    wantedPosition.empty = false;
    setTimeout(() => (wantedPosition.html.innerHTML = `<p>⚪</p>`), 1000);
    //FUNCTION
  } else {
    checkPosition();
  }
}

function name(params) {} //FUNCTION- game-over check

function choosePosition() {
  const position = Math.floor(Math.random() * 9 + 1);
  return position;
}

function getObject(position) {
  switch (position) {
    case 1:
      object = pos1;
      break;
    case 2:
      object = pos2;
      break;
    case 3:
      object = pos3;
      break;
    case 4:
      object = pos4;
      break;
    case 5:
      object = pos5;
      break;
    case 6:
      object = pos6;
      break;
    case 7:
      object = pos7;
      break;
    case 8:
      object = pos8;
      break;
    case 9:
      object = pos9;
      break;
  }
  return object;
}

//-----⚪-----

const btn1 = document.querySelector(".js-positon-1");
const btn2 = document.querySelector(".js-positon-2");
const btn3 = document.querySelector(".js-positon-3");
const btn4 = document.querySelector(".js-positon-4");
const btn5 = document.querySelector(".js-positon-5");
const btn6 = document.querySelector(".js-positon-6");
const btn7 = document.querySelector(".js-positon-7");
const btn8 = document.querySelector(".js-positon-8");
const btn9 = document.querySelector(".js-positon-9");

btn1.addEventListener(
  "click",
  () => (btn1.innerHTML = `<p class="cross">X</p>`)
);

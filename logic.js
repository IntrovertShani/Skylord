let btn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".Reset");
let newBtn = document.querySelector(".new");
let heading = document.querySelector("#heading");
let container = document.querySelector(".msg-container");

let arr = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

let btnVal = true;

const reset = () => {
  btnVal = true;
  enablebtn();
};

btn.forEach((box) => {
  box.addEventListener("click", () => {
    if (btnVal == true) {
      box.innerText = "x";
      btnVal = false;
    } else {
      box.innerText = "o";
      btnVal = true;
    }
    box.disabled = true;
    gameWinner();
  });
});

const enablebtn = () => {
  for (let val of btn) {
    val.disabled = false;
    val.innerText = "";
    container.classList.add("hide");
  }
};

const disablebtn = () => {
  for (let val of btn) {
    val.disabled = true;
  }
};

const showWinner = (winner) => {
  heading.innerText = `Winner is: ${winner};`;
  container.classList.remove("hide");
  disablebtn();
};

const gameWinner = () => {
  for (let val of arr) {
    let game1 = btn[val[0]].innerText;
    let game2 = btn[val[1]].innerText;
    let game3 = btn[val[2]].innerText;

    if (game1 != "" && game2 != "" && game3 != "") {
      if (game1 === game2 && game2 === game3) {
        showWinner(game1);
      }
    }
  }
};

resetBtn.addEventListener("click", enablebtn);
newBtn.addEventListener("click", enablebtn);

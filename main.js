// ELEMENTS
const trexElement = document.querySelector(".charecter");
const treeElement = document.querySelector(".block");
const jumpingAudio = new Audio('./images/ep.m4a')
const gameOver = new Audio('./images/over.mp3')
const restartPage = document.querySelector(".restart-page");
const restartButton = document.querySelector(".restart-btn");


document.addEventListener("click", (e) => {
  jumpingAudio.play(); 
    trexElement.classList.add("jumpAnimate");

    setTimeout(() => {
      trexElement.classList.remove("jumpAnimate");
    }, 500);
});


document.addEventListener("keydown", (e) => {

  if (e.key === " ") {
    trexElement.classList.add("jumpAnimate");
  jumpingAudio.play(); 
    setTimeout(() => {
      trexElement.classList.remove("jumpAnimate");
    }, 500);
  }
});




// CHECK IF WE LOSE OR NOT
const checkCondition = () => {
  const trexTop = parseInt(window.getComputedStyle(trexElement).top);
  const treeLeft = parseInt(window.getComputedStyle(treeElement).left);

  if (treeLeft < 90 && trexTop >= 230) {
    trexElement.style.top = `${trexTop}px`;
    treeElement.style.display = "none";
    restartPage.classList.add("show-restart-page");
    clearInterval(tirexInterval);
    gameOver.play();
  }
};


const tirexInterval = setInterval(checkCondition, 10);

restartButton.addEventListener("click", () => {
  restartPage.classList.remove("show-restart-page");
  trexElement.style.top = "";
  treeElement.style.display = "block";
  setInterval(checkCondition, 10);
});

// ELEMENTS
const trexElement = document.querySelector(".charecter");
const treeElement = document.querySelector(".block");
const jumpingAudio = new Audio('./images/ep.m4a')
const gameOver = new Audio('./images/over.mp3')
const restartPage = document.querySelector(".restart-page");
const restartButton = document.querySelector(".restart-btn");
const score = document.querySelector(".score");
const fart = document.querySelector(".fart");

    let dynamic = 0;


    // for (let i=1; i<100000; i++)   {

// setTimeout(function(){
//         dynamic++;

// score.textContent = dynamic;

// }, 3000)



    // };


if (!restartPage.classList.contains("show-restart-page")) {

    setInterval(displayHello, 90);

  
function displayHello() {
  dynamic++
  score.textContent = dynamic;
  }

}else{
  score.textContent = 0;

}

// JUMP T-REX CHARACTER WHEN WE CLICK SPACE BUTTON
document.addEventListener("click", (e) => {
  jumpingAudio.play(); 
    trexElement.classList.add("jumpAnimate");

    setTimeout(() => {
      trexElement.classList.remove("jumpAnimate");
    }, 500);
    setTimeout(() => {
      fart.style.display = "flex";
    }, 50);
    setTimeout(() => {
      fart.style.display = "none";
    }, 520);


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


  if (window.screen.width < 768) {
    if (treeLeft < 55 && trexTop >= 280  ) {


    
  
      trexElement.style.top = `${trexTop}px`;
      treeElement.style.display = "none";
      restartPage.classList.add("show-restart-page");
      clearInterval(tirexInterval);
      gameOver.play();
      score.style.display = "none";

      dynamic = 0
    }
  }  else if (window.screen.width < 1024) {
    if (treeLeft < 70 && trexTop >= 300) {


    
  
      trexElement.style.top = `${trexTop}px`;
      treeElement.style.display = "none";
      restartPage.classList.add("show-restart-page");
      clearInterval(tirexInterval);
      gameOver.play();
      score.style.display = "none";

      dynamic = 0

    }
  }else {
  if (treeLeft < 90 && trexTop >= 230) {


    
  
    trexElement.style.top = `${trexTop}px`;
    treeElement.style.display = "none";
    restartPage.classList.add("show-restart-page");
    clearInterval(tirexInterval);
    gameOver.play();
    score.style.display = "none";
    dynamic = 0

  }
}

};

// CALLS CHECKCONDITION FUNCTOIN EVERY 10MS
const tirexInterval = setInterval(checkCondition, 10);

// RESTART GAME WHEN WE CLICK RESTART BUTTON
restartButton.addEventListener("click", () => {
  restartPage.classList.remove("show-restart-page");
  trexElement.style.top = "";
  treeElement.style.display = "block";
  trexElement.style.display = "block";
// treeElement.style.setProperty(animation-delay, "0s");         ;
  setInterval(checkCondition, 10);
  dynamic = 0;

  score.style.display = "inline";
  if (!restartPage.classList.contains("show-restart-page")) {

    setTimeout(function(){
        setInterval(displayHello, 90);
    
      
    function displayHello() {
      dynamic++
      score.textContent = dynamic;
      }
    }, 1860);
    
    }else{
      score.textContent = 0;
    
    }

});

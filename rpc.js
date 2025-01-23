let result = "";
let move = "";
let win = "0";
let lose = "0";
let tie = "0";

function shake() {
  const nom3 = Math.random();
  console.log(nom3);

  if (nom3 < 1 / 3) {
    result = "Rock";
  } else if (nom3 > 1 / 3 && nom3 < 2 / 3) {
    result = "Paper";
  } else {
    result = "Scissors";
  }

  if (result == "Rock") {
    document.querySelector(".who").innerHTML = `Computer choose ${result}`;
  } else if (result == "Paper") {
    document.querySelector(".who").innerHTML = `Computer choose ${result}`;
  } else {
    document.querySelector(".who").innerHTML = `Computer choose ${result}`;
  }
}

function rock() {
  document.querySelector(".move").innerHTML = `You pick Rock`;
  move = "Rock";
  console.log(move);
  console.log(result);
}

function paper() {
  document.querySelector(".move").innerHTML = `You pick Paper`;
  move = "Paper";
  console.log(move);
  console.log(result);
}

function scissors() {
  document.querySelector(".move").innerHTML = `You pick Scissors`;
  move = "Scissors";
  console.log(move);
  console.log(result);
}


function updateResult() {
    if ((move === "Rock" && result === "Scissors") || 
    (move === "Paper" && result === "Rock") || 
    (move === "Scissors" && result === "Paper")) {
    win++;
    console.log(`Win= ${win}`);
    document.querySelector(".showScore").innerHTML = `Win ${win} Tie ${tie} Lose ${lose}`;
} else if (move === result) {
    tie++;
    console.log(`tie= ${tie}`);
    document.querySelector(".showScore").innerHTML = `Win ${win} Tie ${tie} Lose ${lose}`;
} else {
    lose++;
    console.log(`lose= ${lose}`);
    document.querySelector(".showScore").innerHTML = `Win ${win} Tie ${tie} Lose ${lose}`;
}

}


function reset() {
    win = "0";
 lose = "0";
 tie = "0";

 document.querySelector(".move").innerHTML = `Your Move`;
 document.querySelector(".who").innerHTML = `Computer Move`;

 document.querySelector(".showScore").innerHTML = `Win ${win} Tie ${tie} Lose ${lose}`;
}






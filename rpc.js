let result = "";
let move = "";
let win = "";
let lose = "";
let tie = "";

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
  document.querySelector(".move").innerHTML = `you pick Rock`;
  move = "Rock";
  console.log(move);
  console.log(result);
}

function paper() {
  document.querySelector(".move").innerHTML = `you pick Paper`;
  move = "Paper";
  console.log(move);
  console.log(result);
}

function scissors() {
  document.querySelector(".move").innerHTML = `you pick Scissors`;
  move = "Scissors";
  console.log(move);
  console.log(result);
}

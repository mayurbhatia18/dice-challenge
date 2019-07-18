function rollDice(){
  var n1 = Math.random();
  n1 = Math.floor(n1*6)+1;
  var n2 = Math.random();
  n2 = Math.floor(n2*6)+1;

  var player1 = document.querySelector("img.img1");
  player1.setAttribute("src","images/dice"+n1+".png");

  var player2 = document.querySelector("img.img2");
  player2.setAttribute("src","images/dice"+n2+".png");

  if(n1 === n2){
    document.querySelector("h1").innerHTML = "Draw";
  }else if(n1 > n2){
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins";
  }else if(n1 < n2){
    document.querySelector("h1").innerHTML = "Player2 Wins 🚩";
  }
}

console.log("javascript run");

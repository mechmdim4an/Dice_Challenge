// Random image-1 rolling 
var x =(Math.floor((Math.random()*6)+1))
document.querySelectorAll("img")[0].setAttribute("src", "./images/" + "dice_" + x + ".png");

// Random image-2 rolling 
var y = Math.floor((Math.random()*6)+1);
document.querySelectorAll("img")[1].setAttribute("src", "./images/" + "dice_" + y + ".png");

// players position after rolling 

if (x > y){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (x < y){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}
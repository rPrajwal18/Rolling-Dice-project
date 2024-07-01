var randomNumber1 = Math.random();

randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomImg = "images/" + "dice" + randomNumber1 + ".png";

var Img1 = document.querySelectorAll("img")[0].setAttribute("src", randomImg);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imggg = "images/" + "dice" + randomNumber2 + ".png";

var Img2 = document.querySelectorAll("img")[1].setAttribute("src",imggg);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "DRAW!";
}
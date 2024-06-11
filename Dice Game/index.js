var randomNumer1 = Math.floor(Math.random() * 6 + 1);

var randomImage = "dice" + randomNumer1 + ".png";

var imageSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);

var randomNumer2 = Math.floor(Math.random() * 6 + 1);

var randomImage2 = "dice" + randomNumer2 + ".png";

var imageSource2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imageSource2);

if (randomNumer1 > randomNumer2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumer2 > randomNumer1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}



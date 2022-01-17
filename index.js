//randomise the images
var img = ["/images/dice1.png", "/images/dice2.png", "/images/dice3.png", "/images/dice4.png", "/images/dice5.png", "/images/dice6.png"];
        
function imgRandom(img) {
            return img[Math.floor(Math.random() * img.length)];
        }
    // console.log(imgRandom(img));

//set a random dice image for the left img element
document.querySelector(".img1").setAttribute("src", (imgRandom(img)));
//and for the right image (right img element)
document.querySelector(".img2").setAttribute("src", (imgRandom(img)));

var output1 = document.querySelector(".img2").getAttribute("src", (imgRandom(img)));
var output2 = document.querySelector(".img1").getAttribute("src", (imgRandom(img)));

//change the title to display the winner
function returnWinner () {
    if (output1 > output2) {

        var twoWins = document.querySelector("h1").innerHTML = "Player 2 Wins!";
        var oneWins = document.querySelector("h1").innerHTML = "Player 1 Wins!";
        var nobodyWins = document.querySelector("h1").innerHTML = "It's a draw!";
        return twoWins;
    } else if (document.querySelector(".img2").setAttribute("src", (imgRandom(img))) < document.querySelector(".img1").setAttribute("src", (imgRandom(img)))) {
        return oneWins;
    } else {
        return nobodyWins;
    }
}




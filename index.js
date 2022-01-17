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

var output1 = document.querySelector(".img1").getAttribute("src", (imgRandom(img)));
var output2 = document.querySelector(".img2").getAttribute("src", (imgRandom(img)));

//change the title to display the winner
function returnWinner() {
    if (img.indexOf(output1) > img.indexOf(output2))  {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (img.indexOf(output1) < img.indexOf(output2)) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";;
    } else {
        document.querySelector("h1").innerHTML = "It's a draw!";;
    }
}

//call the function if you want it to work :)
returnWinner();





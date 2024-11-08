const randomNumber1 = Math.floor((Math.random() * 6) + 1 );
const randomNumber2 = Math.floor((Math.random() * 6) + 1 );

const img1 = document.querySelector(".img1");
const img1Random = "images/dice" + randomNumber1 + ".png";
img1.setAttribute("src", img1Random);


const img2 = document.querySelector(".img2");
const img2Random = "images/dice" + randomNumber2 + ".png";
img2.setAttribute("src", img2Random);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "You won 🎉 ";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Computer won 💔 ";
}else{
    document.querySelector("h1").innerHTML = "🎲 DRAW 🎲"
}
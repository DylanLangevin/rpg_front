let canvasBackground = document.getElementById('canvas-background');
const ctxBackground = canvasBackground.getContext('2d');

// Récupération des images en background (test)
let cityMapImg = document.querySelector('#city-map-img');
<<<<<<< HEAD
let cityMapRight = document.querySelector('#city-map-right-img')
let coffeeShop = document.querySelector('#coffee-shop-img')
=======
let cityMapRight = document.querySelector('#city-map-right-img');
let cityMapLeft = document.querySelector('#city-map-left-img');
let coffeeShop = document.querySelector('#coffee-shop-img');
let parc = document.querySelector('#parc-img');
>>>>>>> main

// Dessin de l'image de background
ctxBackground.drawImage(cityMapImg, 0, 0,1024,640);

let currentMap = 0;





// Coordonnées du carré bleu porte entre deux zones
// let squareColliderX  = 1005
// let squareColliderY  = 142
// let squareColliderWidth  = 19
// let squareColliderHeight  = 50

// ctx.fillStyle = "rgba(0,0,255,0.3)";
// ctx.fillRect(squareColliderX, squareColliderY, squareColliderWidth, squareColliderHeight)
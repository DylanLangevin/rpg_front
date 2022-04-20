let canvasBackground = document.getElementById('canvas-background');
const ctxBackground = canvasBackground.getContext('2d');

// Récupération des images en background (test)
let cityMapImg = document.querySelector('#city-map-img');
let cityMapRight = document.querySelector('#city-map-right-img');
let cityMapLeft = document.querySelector('#city-map-left-img');
let coffeeShop = document.querySelector('#coffee-shop-img');
let parc = document.querySelector('#parc-img');
let indoorLibraryFirstMap = document.querySelector('#indoor-library-first-map');
let indoorLibrarySecondMap = document.querySelector('#indoor-library-second-map');
// Dessin de l'image de background
ctxBackground.drawImage(cityMapImg, 0, 0,1024,640);

let currentMap = 0;

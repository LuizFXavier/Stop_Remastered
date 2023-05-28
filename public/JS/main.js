import Games from "./Games/Games";
import Input from "./UI/Input";
var canvas = document.getElementById('canvas1');
Games.ctx = canvas.getContext('2d');
var CANVAS_WIDTH = canvas.width = window.innerWidth * 0.99;
var CANVAS_HEIGHT = canvas.height = window.innerHeight * 0.99;
var CANVAS_X = canvas.getBoundingClientRect().x;
var CANVAS_Y = canvas.getBoundingClientRect().y;
window.addEventListener('click', function (e) {
    console.log(Input.clicou = e.button == 0);
    Input.clicou = e.button == 0;
});
window.addEventListener('mousemove', function (e) {
    Input.x = e.x;
    Input.y = e.y;
});
var game = new Games();
game.start();

import Games from "./Games/Games";

const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
Games.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const CANVAS_WIDTH = canvas.width = window.innerWidth * 0.99;
const CANVAS_HEIGHT = canvas.height = window.innerHeight * 0.99;
const CANVAS_X = canvas.getBoundingClientRect().x
const CANVAS_Y = canvas.getBoundingClientRect().y

window.addEventListener('click', (e) => {
    console.log(Math.floor(e.clientX), Math.floor(e.clientY))
})
// canvas.style.background = "#0FF0CB"

const game = new Games()

game.start()
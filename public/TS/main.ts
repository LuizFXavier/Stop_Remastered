import Games from "./Games/Games";
import Input from "./UI/Input";

const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
Games.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const CANVAS_WIDTH = canvas.width = window.innerWidth * 0.99;
const CANVAS_HEIGHT = canvas.height = window.innerHeight * 0.99;
const CANVAS_X = canvas.getBoundingClientRect().x
const CANVAS_Y = canvas.getBoundingClientRect().y

window.addEventListener('click', (e) => {
    
    Input.clicou = e.button == 0

})

window.addEventListener('mousemove', (e) => {
    Input.x = e.clientX
    Input.y = e.clientY
})

const game = new Games()

game.start()
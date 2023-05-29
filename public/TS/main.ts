import Games from "./Games/Games";
import Input from "./UI/Input";

const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
Games.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('click', (e) => {
    
    Input.clicou = e.button == 0

})

window.addEventListener('mousemove', (e) => {
    Input.x = e.clientX
    Input.y = e.clientY
})

const game = new Games()

game.start()
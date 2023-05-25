import Imagem from "../spriteSheet/Imagem";

class Games{
    public static ctx: CanvasRenderingContext2D
    public static gameObjects: any[] = []

    public static WIDTH:number = window.innerWidth * 0.99;
    public static HEIGHT:number = window.innerHeight * 0.99;

    update(){

    }
    render(){
        Games.ctx.clearRect(0, 0, Games.WIDTH, Games.HEIGHT)
        Games.ctx.fillStyle = "#0FF0CB"
        Games.ctx.fillRect(0, 0, Games.WIDTH, Games.HEIGHT)

        Games.gameObjects.forEach(e => {
            e.desenhar(20, 20, 71, 103)
        })
    
        window.requestAnimationFrame(() => this.render())
    }
    start(){
        

        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 13; j++){
                const img_baralho = new Imagem(j*71, i*103, 71, 103, "./public/image/do_meu_avo.png")
                
                Games.gameObjects.push(img_baralho)
            }
        }

        
        this.render()
    }
}
export default Games
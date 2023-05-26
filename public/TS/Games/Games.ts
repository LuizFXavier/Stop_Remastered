import Imagem from "../spriteSheet/Imagem";
import Carta from "../gameObject/Carta";
import Input from "../UI/Input";

class Games{
    public static ctx: CanvasRenderingContext2D
    public static gameObjects: any[] = []

    public static WIDTH:number = window.innerWidth * 0.99;
    public static HEIGHT:number = window.innerHeight * 0.99;

    update(){
        Games.gameObjects.forEach(e => {
            e.colidir()
            
        })
        if (Input.clicou){
            Input.clicou = !Input.clicou
        }
        window.requestAnimationFrame(() => this.update())
    }
    render(){

        Games.ctx.clearRect(0, 0, Games.WIDTH, Games.HEIGHT)
        Games.ctx.fillStyle = "#0FF0CB"
        Games.ctx.fillRect(0, 0, Games.WIDTH, Games.HEIGHT)

        Games.gameObjects.forEach(e => {
            e.desenhar()
            
        })
    
        window.requestAnimationFrame(() => this.render())
    }
    start(){
        
        let naipes= ["PAUS","OUROS","COPAS","ESPADAS"]
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 13; j++){
                const img_baralho = new Imagem(j*71, i*103, 71, 103, "./public/image/do_meu_avo.png")
                
                let valor = j + 1

                if (valor == 13 && (naipes[i] == "OUROS" || naipes[i] == "COPAS")){
                    valor = 0
                }
                
                const carta_baralho = new Carta(j*70,i*100,70,100,valor,naipes[i],img_baralho)
                
                Games.gameObjects.push(carta_baralho)
            }
        }

        
        this.render()
        this.update()
    }
}
export default Games
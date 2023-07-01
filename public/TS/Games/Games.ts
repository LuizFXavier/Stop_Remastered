//TODO: arrumar essa gambiarra da colidir do Player

import Imagem from "../spriteSheet/Imagem";
import Carta from "../gameObject/Carta";
import Input from "../UI/Input";
import Baralho from "../gameObject/Baralho";
import Mao from "../gameObject/Mao";
import Player from "../gameObject/Player";
import GameObject from "../gameObject/GameObject";
import Interface from "../UI/Interface";
import Botao from "../UI/Botao";

class Games {
    public static ctx: CanvasRenderingContext2D
    public static gameObjects: GameObject[] = []
    public static interfaces: Interface[] = [] 

    public static WIDTH: number = window.innerWidth;
    public static HEIGHT: number = window.innerHeight;

    public static getObjectByTag(tag:string){
        for(let i = 0; i < Games.gameObjects.length; i++){
            if (Games.gameObjects[i].tag == tag){
                return Games.gameObjects[i]
            }
        }
    }
    public static getInterfaceByTag(tag:string){
        for(let i = 0; i < Games.interfaces.length; i++){
            if (Games.interfaces[i].tag == tag){
                return Games.interfaces[i]
            }
        }
    }

    update() {
        Games.gameObjects.forEach(e => {
            e.update()

        })
        // Games.interfaces.forEach(e =>{
        //     e.update()
        // })
        if (Input.clicou) {
            Input.clicou = !Input.clicou
        }
        
        window.requestAnimationFrame(() => this.update())
    }
    render() {

        Games.ctx.clearRect(0, 0, Games.WIDTH, Games.HEIGHT)
        Games.ctx.fillStyle = "#0FF0CB"
        Games.ctx.fillRect(0, 0, Games.WIDTH, Games.HEIGHT)

        Games.gameObjects.forEach(e => {
            e.desenhar()

        })
        Games.interfaces.forEach(e=>{
            e.desenhar()
        })

        window.requestAnimationFrame(() => this.render())
    }
    start() {

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                let valor = j + 1

                if (valor == 13 && (Carta.naipes[i] == "OUROS" || Carta.naipes[i] == "COPAS")) {
                    valor = 0
                }

                let chave = valor.toString() + Carta.naipes[i]

                Carta.cardsCut.set(chave, { x: (j * 71), y: (i * 103), width: 71, height: 103 })

            }
        }

        const monte = new Baralho("monte")
        monte.create()
        const descarte = new Baralho("descarte")

        const player1 = new Player("player1", Games.WIDTH / 2, Games.HEIGHT / 2, new Mao())


        monte.embaralhar()
        console.log(monte);

        monte.distribuir(player1)

        player1.arrumarCartas()
        
        // console.log(monte);

        Games.gameObjects.push(monte)
        Games.gameObjects.push(descarte)
        Games.gameObjects.push(player1)

        const botao1 = new Botao("descartar",100,400,50,30)
        Games.interfaces.push(botao1)

        this.render()
        this.update()
    }
}
export default Games
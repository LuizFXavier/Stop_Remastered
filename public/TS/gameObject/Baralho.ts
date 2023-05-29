import Carta from "./Carta"
import Imagem from "../spriteSheet/Imagem"
import Mao from "./Mao"
import Player from "./Player"
import GameObject from "./GameObject"
import Games from "../Games/Games"

class Baralho extends GameObject {

    cartas: Carta[] = []

    public static widthC: number = 70
    public static heightC: number = 100

    constructor() {
        super()
        this.create()

    }

    create() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {

                let valor = j + 1

                if (valor == 13 && (Carta.naipes[i] == "OUROS" || Carta.naipes[i] == "COPAS")) {
                    valor = 0
                }
                const corte = Carta.cardsCut.get(valor.toString() + Carta.naipes[i]) as { x: number, y: number, width: number, height: number }
                const img_baralho = new Imagem(corte, "./public/image/do_meu_avo.png")

                const carta_baralho = new Carta(j * 8, 0, Baralho.widthC, Baralho.heightC, valor, Carta.naipes[i], img_baralho)

                this.cartas.push(carta_baralho)
            }
        }
    }

    desenhar() {

        this.cartas.forEach(e => {
            e.desenhar()
        })
    }

    colidir() {
        // this.cartas.forEach(e => {
        //     e.colidir()
        // })
        const colisor = this.cartas[this.cartas.length - 1].colidir()
        
        if (colisor.colidiu) {

            for (let i = 0; i< Games.gameObjects.length; i++){
                console.log(Games.gameObjects[i].tag);
                
                if(Games.gameObjects[i].tag === "player1"){

                    //@ts-ignore
                    Games.gameObjects[i].comprar(this.retirar())
                }

            }

        }
    }

    retirar(): Carta {

        let temp = this.cartas[this.cartas.length - 1]

        this.cartas.pop()
        
        return temp
    }

    embaralhar() {
        for (let i = this.cartas.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = this.cartas[i]
            let temp2 = { x: this.cartas[i].x, y: this.cartas[i].y }

            this.cartas[i].x = this.cartas[j].x
            this.cartas[i].y = this.cartas[j].y
            this.cartas[i] = this.cartas[j]

            this.cartas[j].x = temp2.x
            this.cartas[j].y = temp2.y
            this.cartas[j] = temp
        }
    }

    distribuir(player: Player) {

        for (let i = 0; i < 4; i++) {
            player.mao.cartas.push(this.cartas[this.cartas.length - 1])
            this.cartas.pop()
        }
    }

}
export default Baralho
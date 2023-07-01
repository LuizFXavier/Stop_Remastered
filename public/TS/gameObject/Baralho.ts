//TODO: Colisão com o próprio baralho?

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

    public static cartaNula: Carta = new Carta(0,0,0,0,-1,"NULO")

    constructor(tag:string) {
        super(tag)
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
    public update(): void {
        this.colidir()
    }

    colidir() {
        if (this.cartas.length > 0){

            const colisor = this.cartas[this.cartas.length - 1].colidir()
    
            return colisor.colidiu
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

    colocar(carta: Carta){
        carta.x = Games.WIDTH / 2
        carta.y = Games.HEIGHT/8
        this.cartas.push(carta)
    }

}
export default Baralho
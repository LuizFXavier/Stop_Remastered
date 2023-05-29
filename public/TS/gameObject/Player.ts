import Mao from "./Mao"
import Baralho from "./Baralho"
import Carta from "./Carta"
import GameObject from "./GameObject"
import Games from "../Games/Games"

class Player extends GameObject {

    x: number
    y: number
    mao: Mao
    comprada: Carta | null = null

    constructor(x: number, y: number, mao: Mao) {
        super()
        this.x = x
        this.y = y
        this.mao = mao
    }

    arrumarCartas() {

        for (let i = 0; i < this.mao.cartas.length; i++) {

            if (i % 2 == 0) {
                this.mao.cartas[i].y = this.y - Baralho.heightC
            }
            else {
                this.mao.cartas[i].y = this.y
            }

            this.mao.cartas[i].x = this.x - Baralho.widthC + (Baralho.widthC * Math.floor(i / 2))

        }
    }

    desenhar() {
        this.mao.desenhar()

        if (this.comprada) {

            this.comprada?.desenhar()
        }
    }
    colidir() {

        let colisor = this.mao.colidir()

        if (colisor){

            this.trocar(colisor.index)
        }
    }

    comprar(carta: Carta) {
        this.comprada = carta
        console.log(this.comprada);

        this.comprada.x = Baralho.widthC * 3
        this.comprada.y = this.y
    }
    trocar(index: number) {

        if (this.comprada) {
            this.mao.trocar(this.comprada, index)
        }
    }

}
export default Player
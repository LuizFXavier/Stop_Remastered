import Carta from "./Carta"
import Imagem from "../spriteSheet/Imagem"

class Baralho {

    cartas: Carta[] = []

    constructor() {
        this.create()

    }

    create() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                
                let valor = j + 1
                
                if (valor == 13 && (Carta.naipes[i] == "OUROS" || Carta.naipes[i] == "COPAS")) {
                    valor = 0
                }
                const corte = Carta.cardsCut.get(valor.toString() + Carta.naipes[i]) as {x:number, y:number, width:number, height:number}
                const img_baralho = new Imagem(corte, "./public/image/do_meu_avo.png")

                const carta_baralho = new Carta(j * 70, i * 100, 70, 100, valor, Carta.naipes[i], img_baralho)

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
        this.cartas.forEach(e => {
            e.colidir()
        })
    }

}
export default Baralho
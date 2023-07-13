import Carta from "./Carta"
import GameObject from "./GameObject"
import Baralho from "./Baralho"

class Mao  extends GameObject{
    cartas: Carta[] = []

    desenhar() {
        this.cartas.forEach(e => {

            e.desenhar()
        })
    }
    colidir(){

        for (let i = 0; i<this.cartas.length; i++){
            let colisor = this.cartas[i].colidir()
            
            if(colisor.colidiu){
                return {carta:colisor.carta, index:i}
            }
        }
        return null

    }
    trocar(carta:Carta, index:number){
        
        carta.x = this.cartas[index].x
        carta.y = this.cartas[index].y

        this.cartas[index] = carta
    }

    colocar(carta:Carta){
        // Escrever aqui
    }
    posicionar(index:number){
        // Aqui também
    }
    retirar(index:number){
        this.cartas[index] = Baralho.cartaNula
    }
}
export default Mao
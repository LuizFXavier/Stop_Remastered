import Carta from "./Carta"
import GameObject from "./GameObject"

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
}
export default Mao
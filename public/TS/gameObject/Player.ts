import Mao from "./Mao"
import Baralho from "./Baralho"
import Carta from "./Carta"
import GameObject from "./GameObject"
import Games from "../Games/Games"
import Collision from "../math/Collision"
import Input from "../UI/Input"
import Botao from "../UI/Botao"

class Player extends GameObject {
    
    posx: number
    posy: number
    mao: Mao
    comprada: Carta | null = null
    comprou: boolean = false

    constructor(tag:string, x: number, y: number, mao: Mao) {
        super(tag)
        this.posx = x
        this.posy = y
        this.mao = mao
        this.width = 1
        this.height = 1
    }

    arrumarCartas() {

        for (let i = 0; i < this.mao.cartas.length; i++) {

            if (i % 2 == 0) {
                this.mao.cartas[i].y = this.posy - Baralho.heightC
            }
            else {
                this.mao.cartas[i].y = this.posy
            }

            this.mao.cartas[i].x = this.posx - Baralho.widthC + (Baralho.widthC * Math.floor(i / 2))

        }
    }

    desenhar() {
        this.mao.desenhar()

        if (this.comprada) {

            this.comprada?.desenhar()
        }
    }
    update() {
        this.x = Input.x
        this.y = Input.y
        // console.log(this.comprou);
        
        
        if(this.comprou){
            //@ts-ignore
            Games.getInterfaceByTag("descartar").visivel = true
            let botao = Games.getInterfaceByTag("descartar") as Botao
            if(botao.colidir()){
                console.log(botao.colidir());

                this.descartar()
            }
        }else{
            //@ts-ignore
            Games.getInterfaceByTag("descartar").visivel = false
            this.comprar()
            this.cortar  
        }
        this.colidir()
    }
    colidir() {


        let colisor = this.mao.colidir()

        if (!colisor){return}

        if (this.comprou){
            let descarte = Games.getObjectByTag("descarte") as Baralho
            //@ts-ignore
            this.trocar(descarte, colisor)
        }
        else{
            //@ts-ignore
            this.cortar(colisor)
        }
        
    }
    comprar(){

        let monte = Games.getObjectByTag("monte") as GameObject
        let descarte = Games.getObjectByTag("descarte") as GameObject
        //@ts-ignore
        if(monte.colidir()){
            console.log(monte);
            //@ts-ignore
            this.comprada = monte.retirar() as Carta
            this.comprada.x = this.posx * (3/5)
            this.comprada.y = this.posy
            this.comprou = true
        }
        //@ts-ignore
        if(descarte.colidir()){
            console.log(descarte);
            //@ts-ignore
            this.comprada = descarte.retirar() as Carta
            this.comprada.x = this.posx * (3/5)
            this.comprada.y = this.posy
            this.comprou = true
        }
    }
    trocar(descarte: Baralho, card:{carta:Carta, index:number}){
        
        if (this.comprada) {
            this.mao.trocar(this.comprada, card.index)
            descarte.colocar(card.carta)
            this.comprou = false
            this.comprada = null
        }
    }

    descartar(){

        let descarte = Games.getObjectByTag("descarte") as Baralho
        
        //@ts-ignore
        descarte.colocar(this.comprada)
        this.comprada = null
        this.comprou = false
    }

    cortar(card:{carta:Carta, index:number}){
        let descarte = Games.getObjectByTag("descarte") as Baralho
        let ultDesc = descarte.getUltima() as Carta

        if (!ultDesc){return}

        card.carta.x = ultDesc.x
        card.carta.y = ultDesc.y

        setTimeout(()=>{

            if (ultDesc.valor == card.carta.valor){
    
                this.mao.retirar(card.index)
                descarte.colocar(card.carta)
            }
            else{
                console.log("Corte errado");
                card.carta.x = 0
                card.carta.y = 200
                
            }
        }, 1000)

    }
    penalidade(monte:Baralho){

    }

}
export default Player
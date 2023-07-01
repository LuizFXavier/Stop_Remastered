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

        if (this.comprou){
            if (colisor){

                this.trocar(colisor.index)
            }
        }
        else{
            if(colisor){

                this.cortar(colisor.index)
            }
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

    trocar(index: number) {

        if (this.comprada) {
            this.mao.trocar(this.comprada, index)
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
    cortar(index: number){
        let descarte = Games.getObjectByTag("descarte") as Baralho
        
        this.mao.cortar(index, descarte)
        console.log(this.mao.cartas);
          

    }

}
export default Player
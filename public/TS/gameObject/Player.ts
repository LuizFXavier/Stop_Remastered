import Mao from "./Mao"
import Baralho from "./Baralho"
import Carta from "./Carta"
import GameObject from "./GameObject"
import Games from "../Games/Games"
import Collision from "../math/Collision"
import Input from "../UI/Input"

class Player extends GameObject {
    
    posx: number
    posy: number
    mao: Mao
    comprada: Carta | null = null

    constructor(x: number, y: number, mao: Mao) {
        super()
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

        this.comprar2()
        this.descartar()
        this.colidir()
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

        this.comprada.x = this.posx * (3/5)
        this.comprada.y = this.posy
    }
    comprar2(){

        // let colisor = Collision.onCollision("monte", this)
        
        // if(colisor?.colidiu){
        //     console.log(colisor);
        //     // @ts-ignore
        //     this.comprada = colisor.objeto.retirar() as Carta
        //     this.comprada.x = this.posx * (3/5)
        //     this.comprada.y = this.posy
        // }

        for (let i = 0; i< Games.gameObjects.length; i++){
            console.log(Games.gameObjects[i].tag);
                    
            if(Games.gameObjects[i].tag === "monte"){

                //@ts-ignore
                if(Games.gameObjects[i].colidir()){


                    //@ts-ignore
                    this.comprada = Games.gameObjects[i].retirar() as Carta
                    this.comprada.x = this.posx * (3/5)
                    this.comprada.y = this.posy
                }
                
            }
    
        }
        
    }

    trocar(index: number) {

        if (this.comprada) {
            this.mao.trocar(this.comprada, index)
        }
    }

    descartar(){
        for (let i = 0; i< Games.gameObjects.length; i++){
            console.log(Games.gameObjects[i].tag);
                    
            if(Games.gameObjects[i].tag === "descarte"){

                //@ts-ignore
                if(Games.gameObjects[i].colidir()){


                    //@ts-ignore
                    this.comprada = Games.gameObjects[i].colocar(this.comprada)
                    this.comprada = null
                }
                
            }
    
        }
    }

}
export default Player
import Collision from "../math/Collision"
import Imagem from "../spriteSheet/Imagem"
import Input from "../UI/Input"
import GameObject from "./GameObject"

class Carta  extends GameObject{
    x: number
    y: number
    width: number
    height: number
    valor: number
    naipe: string
    imagem: Imagem | null = null
    private virada: boolean = false

    public static naipes:string[] = ["PAUS","OUROS","COPAS","ESPADAS"]
    public static cardsCut = new Map<string, { x: number, y: number, width: number, height: number }>()

    constructor(x: number, y: number, width: number, height: number, valor: number, naipe: string, imagem?: Imagem) {
        super()
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.valor = valor;
        this.naipe = naipe;
        if (imagem){

            this.imagem = imagem;
        }
    }
    desenhar() {
        if (this.imagem){

            this.imagem.desenhar(this.x, this.y, this.width, this.height)
    
            if (this.virada){
                this.imagem.x = 141
                this.imagem.y = 410
            }
            else{
                const corteC = Carta.cardsCut.get(this.valor.toString() + this.naipe) as { x: number, y: number, width: number, height: number }
                
                this.imagem.x = corteC.x
                
                this.imagem.y = corteC.y
    
            }
        }
    }
    colidir() {
        if (Collision.rectangleCollision(this, { x: Input.x, y: Input.y, width: 1, height: 1 }) && Input.clicou) {
            console.log(this.valor + this.naipe);
            
            // this.virar()
            return {carta:this as Carta, colidiu:true}
        }
        return {colidiu:false}
    }
    virar(){
        this.virada = !this.virada

        
    }

}
export default Carta
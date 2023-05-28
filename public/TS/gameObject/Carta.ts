import Collision from "../math/Collision"
import Imagem from "../spriteSheet/Imagem"
import Input from "../UI/Input"

class Carta {
    x: number
    y: number
    width: number
    height: number
    valor: number
    naipe: string
    imagem: Imagem
    private virada: boolean = false

    public static naipes:string[] = ["PAUS","OUROS","COPAS","ESPADAS"]
    public static cardsCut = new Map<string, { x: number, y: number, width: number, height: number }>()

    constructor(x: number, y: number, width: number, height: number, valor: number, naipe: string, imagem: Imagem) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.valor = valor;
        this.naipe = naipe;
        this.imagem = imagem;
    }
    desenhar() {
        this.imagem.desenhar(this.x, this.y, this.width, this.height)
    }
    colidir() {
        if (Collision.rectangleCollision(this, { x: Input.x, y: Input.y, width: 1, height: 1 }) && Input.clicou) {
            console.log(this.valor + this.naipe);
            console.log(Carta.cardsCut.get(this.valor.toString() + this.naipe));
            this.virar()
        }
    }
    virar(){
        this.virada = !this.virada

        if (this.virada){
            this.imagem.x = 141
            this.imagem.y = 410
        }
        else{
            const corte = Carta.cardsCut.get(this.valor.toString() + this.naipe)
            //@ts-ignore
            this.imagem.x = corte.x
            //@ts-ignore
            this.imagem.y = corte.y

        }
    }

}
export default Carta
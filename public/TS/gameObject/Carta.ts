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
    colidir(){
        if (Collision.rectangleCollision(this, {x:Input.x, y:Input.y, width:1, height:1}) && Input.clicou){
            alert(this.valor + this.naipe);
            
        }
    }

}
export default Carta
import Interface from "./Interface";
import Collision from "../math/Collision";
import Input from "./Input";

class Botao extends Interface {
    constructor(tag: string, x: number, y: number, width: number, height: number) {
        super(tag, x, y, width, height)
    }
    colidir() {


        if (Collision.rectangleCollision(this, Input) && Input.clicou) {
            console.log("Apertado");
        }

        return Collision.rectangleCollision(this, Input) && Input.clicou
    }
    update(): void {
        this.colidir()
    }
}

export default Botao
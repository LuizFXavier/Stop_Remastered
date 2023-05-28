import Imagem from "../spriteSheet/Imagem";
import Carta from "../gameObject/Carta";
import Input from "../UI/Input";
import Baralho from "../gameObject/Baralho";

class Games {
    public static ctx: CanvasRenderingContext2D
    public static gameObjects: any[] = []

    public static WIDTH: number = window.innerWidth * 0.99;
    public static HEIGHT: number = window.innerHeight * 0.99;

    update() {
        Games.gameObjects.forEach(e => {
            e.colidir()

        })
        if (Input.clicou) {
            Input.clicou = !Input.clicou
        }
        window.requestAnimationFrame(() => this.update())
    }
    render() {

        Games.ctx.clearRect(0, 0, Games.WIDTH, Games.HEIGHT)
        Games.ctx.fillStyle = "#0FF0CB"
        Games.ctx.fillRect(0, 0, Games.WIDTH, Games.HEIGHT)

        Games.gameObjects.forEach(e => {
            e.desenhar()

        })

        window.requestAnimationFrame(() => this.render())
    }
    start() {

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                let valor = j + 1

                if (valor == 13 && (Carta.naipes[i] == "OUROS" || Carta.naipes[i] == "COPAS")) {
                    valor = 0
                }

                let chave = valor.toString() + Carta.naipes[i]

                Carta.cardsCut.set(chave, { x: (j * 71), y: (i * 103), width: 71, height: 103 })

            }
        }
        
        const monte = new Baralho()

        Games.gameObjects.push(monte)

        this.render()
        this.update()
    }
}
export default Games
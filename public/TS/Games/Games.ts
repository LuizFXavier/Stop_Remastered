import Imagem from "../spriteSheet/Imagem";
import Carta from "../gameObject/Carta";
import Input from "../UI/Input";
import Baralho from "../gameObject/Baralho";
import Mao from "../gameObject/Mao";
import Player from "../gameObject/Player";
import GameObject from "../gameObject/GameObject";

class Games {
    public static ctx: CanvasRenderingContext2D
    public static gameObjects: GameObject[] = []

    public static WIDTH: number = window.innerWidth;
    public static HEIGHT: number = window.innerHeight;

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

        const player1 = new Player(Games.WIDTH / 2, Games.HEIGHT / 2, new Mao())

        

        monte.embaralhar()
        console.log(monte);


        monte.distribuir(player1)

        player1.arrumarCartas()
        player1.tag = "player1"
        // console.log(monte);

        Games.gameObjects.push(monte)
        Games.gameObjects.push(player1)

        this.render()
        this.update()
    }
}
export default Games
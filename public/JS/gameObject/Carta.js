import Collision from "../math/Collision";
import Input from "../UI/Input";
var Carta = /** @class */ (function () {
    function Carta(x, y, width, height, valor, naipe, imagem) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.valor = valor;
        this.naipe = naipe;
        this.imagem = imagem;
    }
    Carta.prototype.desenhar = function () {
        this.imagem.desenhar(this.x, this.y, this.width, this.height);
    };
    Carta.prototype.colidir = function () {
        if (Collision.rectangleCollision(this, { x: Input.x, y: Input.y, width: 1, height: 1 }) && Input.clicou) {
            alert(this.valor + this.naipe);
        }
    };
    return Carta;
}());
export default Carta;

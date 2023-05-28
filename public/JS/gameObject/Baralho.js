import Carta from "./Carta";
import Imagem from "../spriteSheet/Imagem";
var Baralho = /** @class */ (function () {
    function Baralho() {
        this.cartas = [];
        this.naipes = ["PAUS", "OUROS", "COPAS", "ESPADAS"];
        this.create();
    }
    Baralho.prototype.create = function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 13; j++) {
                var img_baralho = new Imagem(j * 71, i * 103, 71, 103, "./public/image/do_meu_avo.png");
                var valor = j + 1;
                if (valor == 13 && (this.naipes[i] == "OUROS" || this.naipes[i] == "COPAS")) {
                    valor = 0;
                }
                var carta_baralho = new Carta(j * 70, i * 100, 70, 100, valor, this.naipes[i], img_baralho);
                this.cartas.push(carta_baralho);
            }
        }
    };
    Baralho.prototype.desenhar = function () {
        this.cartas.forEach(function (e) {
            e.desenhar();
        });
    };
    Baralho.prototype.colidir = function () {
        this.cartas.forEach(function (e) {
            // e.colidir()
        });
    };
    return Baralho;
}());
export default Baralho;

import Input from "../UI/Input";
import Baralho from "../gameObject/Baralho";
var Games = /** @class */ (function () {
    function Games() {
    }
    Games.prototype.update = function () {
        var _this = this;
        Games.gameObjects.forEach(function (e) {
            e.colidir();
        });
        if (Input.clicou) {
            Input.clicou = !Input.clicou;
        }
        window.requestAnimationFrame(function () { return _this.update(); });
    };
    Games.prototype.render = function () {
        var _this = this;
        Games.ctx.clearRect(0, 0, Games.WIDTH, Games.HEIGHT);
        Games.ctx.fillStyle = "#0FF0CB";
        Games.ctx.fillRect(0, 0, Games.WIDTH, Games.HEIGHT);
        Games.gameObjects.forEach(function (e) {
            e.desenhar();
        });
        window.requestAnimationFrame(function () { return _this.render(); });
    };
    Games.prototype.start = function () {
        var monte = new Baralho();
        Games.gameObjects.push(monte);
        this.render();
        this.update();
    };
    Games.gameObjects = [];
    Games.WIDTH = window.innerWidth * 0.99;
    Games.HEIGHT = window.innerHeight * 0.99;
    return Games;
}());
export default Games;

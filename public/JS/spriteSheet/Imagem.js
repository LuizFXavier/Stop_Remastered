import Games from "../Games/Games";
var Imagem = /** @class */ (function () {
    function Imagem(x, y, width, height, url) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = url;
    }
    Imagem.prototype.desenhar = function (x, y, width, height) {
        Games.ctx.drawImage(this.image, this.x, this.y, this.width, this.height, x, y, width, height);
    };
    return Imagem;
}());
export default Imagem;

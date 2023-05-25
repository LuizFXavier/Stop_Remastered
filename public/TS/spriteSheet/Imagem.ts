import Games from "../Games/Games"

class Imagem {
    x: number
    y: number
    width: number
    height: number
    image: HTMLImageElement

    constructor(x:number, y:number, width:number, height:number, url:string) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = url;
    }
    desenhar(x:number, y:number, width:number, height:number) {
        Games.ctx.drawImage(this.image, this.x, this.y, this.width, this.height, x, y, width, height);
        
    }
}

export default Imagem
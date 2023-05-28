import Games from "../Games/Games"

class Imagem {
    x: number
    y: number
    width: number
    height: number
    image: HTMLImageElement

    constructor(coord: {x:number, y:number, width:number, height:number}, url:string) {
        this.width = coord.width;
        this.height = coord.height;
        this.x = coord.x;
        this.y = coord.y;
        this.image = new Image();
        this.image.src = url;
    }
    desenhar(x:number, y:number, width:number, height:number) {
        Games.ctx.drawImage(this.image, this.x, this.y, this.width, this.height, x, y, width, height);
        
    }
}

export default Imagem
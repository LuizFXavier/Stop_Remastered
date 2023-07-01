import Games from "../Games/Games"

class Interface{

    public tag: string
    visivel:boolean = true
    public x: number = 0
    public y: number = 0
    public width: number = 0
    public height: number = 0

    constructor(tag: string, x: number, y: number, width: number, height: number){
        this.tag = tag
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
    desenhar(){
        if (this.visivel){
            Games.ctx.fillStyle = "#F00"
            Games.ctx.fillRect(this.x,this.y,this.width,this.height)
        }
    }
    update(){

    }
}
export default Interface
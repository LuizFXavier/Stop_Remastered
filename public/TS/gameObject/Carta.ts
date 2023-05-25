class Carta{
    x: number
    y: number
    width: number
    height: number
    valor: number
    naipe: string

    constructor(x:number, y:number, width:number, height:number, valor:number, naipe:string){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.valor = valor; 
        this.naipe = naipe;
    }
    desenhar(){
        
    }
    
}
export default Carta
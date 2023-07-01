class GameObject{

    public tag: string = ""
    public x: number = 0
    public y: number = 0
    public width: number = 0
    public height: number = 0

    constructor(tag?:string){
        
        if (tag){

            this.tag = tag;
        }
    }

    public hasCode() {

        return (Reflect.getPrototypeOf(this) as object).constructor.name

    }

    public colidir(){

    }
    public desenhar(){

    }

    public update(){
        
    }
}
export default GameObject
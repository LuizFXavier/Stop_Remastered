class GameObject{

    public tag: string

    constructor(){
        this.tag = ""
    }

    public hasCode() {

        return (Reflect.getPrototypeOf(this) as object).constructor.name

    }

    public colidir(){

    }
    public desenhar(){

    }
}
export default GameObject
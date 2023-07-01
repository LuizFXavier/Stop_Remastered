import Interface from "./Interface";
declare class Botao extends Interface {
    constructor(tag: string, x: number, y: number, width: number, height: number);
    colidir(): boolean | undefined;
    update(): void;
}
export default Botao;

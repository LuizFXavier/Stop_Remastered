import Carta from "./Carta";
declare class Baralho {
    cartas: Carta[];
    constructor();
    create(): void;
    desenhar(): void;
    colidir(): void;
}
export default Baralho;

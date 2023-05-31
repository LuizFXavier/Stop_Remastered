import GameObject from "../gameObject/GameObject";
declare class Collision {
    static rectangleCollision(rect1: {
        x: number;
        y: number;
        width: number;
        height: number;
    }, rect2: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): boolean;
    static circleCollision(circle1: {
        x: number;
        y: number;
        radius: number;
    }, circle2: {
        x: number;
        y: number;
        radius: number;
    }): boolean;
    static onCollision(tag: string, principal: GameObject): {
        objeto: GameObject;
        colidiu: boolean;
    } | null;
}
export default Collision;

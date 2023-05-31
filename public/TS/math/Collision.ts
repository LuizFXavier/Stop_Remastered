import GameObject from "../gameObject/GameObject";
import Games from "../Games/Games";

class Collision {
    public static rectangleCollision(rect1: { x: number, y: number, width: number, height: number }, rect2: { x: number, y: number, width: number, height: number }) {
        return rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
    }

    public static circleCollision(circle1: { x: number, y: number, radius: number }, circle2: { x: number, y: number, radius: number }) {
        let distance = Math.sqrt(Math.pow(circle2.x - circle1.x, 2) + Math.pow(circle2.y - circle1.y, 2));
        return distance < circle1.radius + circle2.radius;
    }

    public static onCollision(tag:string, principal:GameObject){

        for (let i = 0; i< Games.gameObjects.length; i++){
            
            if (Games.gameObjects[i].tag == tag){
                let colisor = {objeto:Games.gameObjects[i], colidiu:this.rectangleCollision(Games.gameObjects[i], principal)}
                return colisor
            }
        }
        return null
    } 
}
export default Collision
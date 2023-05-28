var Collision = /** @class */ (function () {
    function Collision() {
    }
    Collision.rectangleCollision = function (rect1, rect2) {
        return rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
    };
    Collision.circleCollision = function (circle1, circle2) {
        var distance = Math.sqrt(Math.pow(circle2.x - circle1.x, 2) + Math.pow(circle2.y - circle1.y, 2));
        return distance < circle1.radius + circle2.radius;
    };
    return Collision;
}());
export default Collision;

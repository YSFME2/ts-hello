var drawPoint = function (point) {
    //expexted point{x:number,y:number}
};
drawPoint({
    name: 'hello'
});
/* Inline annotation */
var draw = function (point) {
    //....
};
draw({
    x: 34,
    y: 78
});
var drawInterface = function (point) {
    // ...
};
var getDistance = function (pointA, pointB) {
    // ...
};
drawInterface({
    x: 2,
    y: 7
});
/* Class */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: ".concat(this.x, " Y: ").concat(this.y));
    };
    Point.prototype.getDistance = function (point) {
        var distance = Math.sqrt(Math.pow((this.x - point.x), 2) + Math.pow((this.y - point.y), 2));
        console.log("the distance between : \n        \tX: ".concat(this.x, " Y: ").concat(this.y, "\n        \tX: ").concat(point.x, " Y: ").concat(point.y, "\n        Is equal to : ").concat(distance));
    };
    return Point;
}());
var point = new Point(1, 3);
point.draw();
var point2 = new Point(5);
point2.y = 0;
point2.draw();
point.getDistance(point2);

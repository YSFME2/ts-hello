export  class Point {
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    x: number;
    y: number;
    draw() {
        console.log(`X: ${this.x} Y: ${this.y}`);
    }

    getDistance(point: Point) {
        let distance = Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2);
        console.log(`the distance between : 
        \tX: ${this.x} Y: ${this.y}
        \tX: ${point.x} Y: ${point.y}
        Is equal to : ${distance}`)
    }
}
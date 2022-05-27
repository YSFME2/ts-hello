import {Point} from './Point'
let drawPoint = (point) => {
    //expexted point{x:number,y:number}
}

drawPoint({
    name: 'hello'
});


/* Inline annotation */
let draw = (point: { x: number, y: number }) => {
    //....
}

draw({
    x: 34,
    y: 78
});



/* Interfaces */  //violated the cohesion principle
interface PointInterface {
    x: number,
    y: number
}

let drawInterface = (point: PointInterface) => {
    // ...
}

let getDistance = (pointA: PointInterface, pointB: PointInterface) => {
    // ...
}

drawInterface({
    x: 2,
    y: 7
})


/* Class */


let point = new Point(1, 3);
point.draw();
let point2 = new Point(5);
point2.y = 0;
point2.draw();
point.getDistance(point2);



/* define variables in constractor */


class Car {
    constructor(public color: string,
        private licenseNum?: string,
        public maxSpeed?: number) {

    }

    get LicenseNumber() {
            return this.licenseNum;
    }
}
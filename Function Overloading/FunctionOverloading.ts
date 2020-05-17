class Perimeter {
    perimeter(a: number, b: number, c: number): void;
    perimeter(a: number, b: number, c: number, d?: number): void;
    perimeter(a: number, b: number, c: number, d?: number, e?: number): void;
    perimeter(a: number, b: number, c: number, d?: number, e?: number): void {
        if (e === undefined && d === undefined) {
            let trianglePerimeter = a + b + c;
            console.log(`Triangle Perimeter: ${trianglePerimeter}`);
        }
        else if (e === undefined) {
            let rectangularPerimeter = a + b + c + d;
            console.log(`Rectangular Perimeter: ${rectangularPerimeter}`);
        }
        else {
            let PolygonPerimeter = a + b + c + d + e;
            console.log(`Polygon Perimeter: ${PolygonPerimeter}`);
        }
    };
}

let triangle = new Perimeter;
triangle.perimeter(4, 5, 6);

let rectangular = new Perimeter;
rectangular.perimeter(4, 5, 6, 7);

let polygon = new Perimeter;
polygon.perimeter(4, 5, 6, 7, 8);
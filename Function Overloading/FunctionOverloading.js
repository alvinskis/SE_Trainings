var Perimeter = /** @class */ (function () {
    function Perimeter() {
    }
    Perimeter.prototype.perimeter = function (a, b, c, d, e) {
        if (e === undefined && d === undefined) {
            var trianglePerimeter = a + b + c;
            console.log("Triangle Perimeter: " + trianglePerimeter);
        }
        else if (e === undefined) {
            var rectangularPerimeter = a + b + c + d;
            console.log("Rectangular Perimeter: " + rectangularPerimeter);
        }
        else {
            var PolygonPerimeter = a + b + c + d + e;
            console.log("Polygon Perimeter: " + PolygonPerimeter);
        }
    };
    ;
    return Perimeter;
}());
var triangle = new Perimeter;
triangle.perimeter(4, 5, 6);
var rectangular = new Perimeter;
rectangular.perimeter(4, 5, 6, 7);
var polygon = new Perimeter;
polygon.perimeter(4, 5, 6, 7, 8);

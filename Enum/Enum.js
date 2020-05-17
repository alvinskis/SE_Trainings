var Week;
(function (Week) {
    Week["Monday"] = "Monday";
    Week["Tuesday"] = "Tuesday";
    Week["Wednesday"] = "Wednesday";
    Week["Thursday"] = "Thursday";
    Week["Friday"] = "Friday";
    Week["Saturday"] = "Saturday";
    Week["Sunday"] = "Sunday";
})(Week || (Week = {}));
var CustomClass = /** @class */ (function () {
    function CustomClass() {
    }
    CustomClass.prototype.workDayOrChillDay = function (day) {
        switch (day) {
            case (Week.Monday):
                console.log("Go to work");
                break;
            case (Week.Tuesday):
                console.log("Go to work");
                break;
            case (Week.Wednesday):
                console.log("Go to work");
                break;
            case (Week.Thursday):
                console.log("Go to work");
                break;
            case (Week.Friday):
                console.log("Go to work");
                break;
            case (Week.Saturday):
                console.log("Stay at home and chill");
                break;
            case (Week.Sunday):
                console.log("Stay at home and chill");
                break;
        }
    };
    return CustomClass;
}());
var weekDay = new CustomClass;
weekDay.workDayOrChillDay("Saturday");

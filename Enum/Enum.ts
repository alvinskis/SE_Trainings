enum Week {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

class CustomClass {
    workDayOrChillDay(day: string): void {
        switch (day) {
            case (Week.Monday):
                console.log("Go to work");
                break;
            case (Week.Tuesday):
                console.log("Go to work");
                break
            case (Week.Wednesday):
                console.log("Go to work");
                break
            case (Week.Thursday):
                console.log("Go to work");
                break
            case (Week.Friday):
                console.log("Go to work");
                break
            case (Week.Saturday):
                console.log("Stay at home and chill");
                break
            case (Week.Sunday):
                console.log("Stay at home and chill");
                break
        }
    }
}

let weekDay = new CustomClass;
weekDay.workDayOrChillDay("Saturday");
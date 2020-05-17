"use strict";
exports.__esModule = true;
var ElectricityBillService = /** @class */ (function () {
    function ElectricityBillService() {
        this.account = [];
    }
    ElectricityBillService.prototype.billCalculator = function (id, name, unit) {
        switch (true) {
            case (unit < 199):
                this.bill = unit * 1.2;
                break;
            case (200 <= unit && unit < 400):
                this.bill = unit * 1.5;
                break;
            case (400 <= unit && unit < 600):
                this.bill = unit * 1.8 * 1.15;
                break;
            case (600 <= unit):
                this.bill = unit * 2 * 1.15;
                break;
        }
        if (this.bill < 100)
            this.bill = 100;
        this.account.push({ id: id, name: name, unit: unit, bill: this.bill.toFixed(2) });
        console.log(this.account);
    };
    return ElectricityBillService;
}());
exports.ElectricityBillService = ElectricityBillService;

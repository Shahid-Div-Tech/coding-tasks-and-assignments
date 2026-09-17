"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "1M";
let apiRequestStatus = "pending";
let airlineSeat = "window";
const orders = ["12", "23", "25", "78", "90"];
let currentOrder;
for (let order of orders) {
    if (order === "25") {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
//# sourceMappingURL=unionAndany.js.map
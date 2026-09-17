"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === "string") {
        console.log(`your chai is ${kind}`);
    }
    else if (typeof kind === "number") {
        console.log(`your chai is ${kind} cups`);
    }
}
function serveChai(msg) {
    if (msg) {
        console.log(`your chai is ${msg}`);
    }
    return "chai is served";
}
function orderChai(size) {
    if (size === "small") {
        return "small";
    }
    else if (size === "large") {
        return "large";
    }
    else if (size === "medium") {
        return "medium";
    }
    else if (typeof size === "number") {
        return `your chai is ${size} cups`;
    }
}
class kulhadChai {
    serve() {
        return "serving kulhad chai";
    }
}
class Cutting {
    serve() {
        return "cutting chai";
    }
}
function serveChaiInKulhad(chai) {
    if (chai instanceof kulhadChai) {
        console.log(chai.serve());
    }
    else if (chai instanceof Cutting) {
        console.log(chai.serve());
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" && obj !== null && typeof obj.type === "string" && typeof obj.sugar === "number");
}
function serveChaiOrder(item) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `serving custom chai ${item}`;
}
function makeChai(order) {
    switch (order.type) {
        case "masala":
            return `making masala chai with spice level ${order.spiceLevel}`;
            break;
        case "ginger":
            return `making ginger chai with amount ${order.amount}`;
            break;
        case "elaichi":
            return `making elaichi chai with aroma ${order.aroma}`;
            break;
    }
}
function brew(order) {
    if ("spiceLevel" in order) {
    }
}
//# sourceMappingURL=typeNarrowing.js.map
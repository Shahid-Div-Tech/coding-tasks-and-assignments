let subs :number | string="1M"

let apiRequestStatus:"pending" |"success"|"error"="pending"

let airlineSeat: "aisle"|"window"|"middle"="window"

const orders=["12","23","25","78","90"]

let currentOrder:string |undefined;

for(let order of orders){
    if(order==="25"){
        currentOrder=order
        break;
    }
}

console.log(currentOrder) 


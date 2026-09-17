function getChai(kind:string |number){
   
    if(typeof kind==="string"){
        console.log(`your chai is ${kind}`)
    }
    else if(typeof kind==="number"){
        console.log(`your chai is ${kind} cups`)
    }   
}


function serveChai(msg?:string){
  if(msg){
    console.log(`your chai is ${msg}`)
  }

  return "chai is served"
}


function orderChai(size:"small"|"medium"|"large"|number){
  if( size==="small"){   
     return "small"
  }

  else if(size==="large"){
    return "large"
  }


  else if(size==="medium"){
    return "medium"
  }

  else if(typeof size==="number"){
     return `your chai is ${size} cups`
  }
}

class kulhadChai{
     serve () {
        return "serving kulhad chai"
    }
}


class Cutting{
     serve () {
        return "cutting chai"
    }
}


function serveChaiInKulhad(chai:kulhadChai|Cutting){
    if(chai instanceof kulhadChai){
        console.log(chai.serve())
    }
    else if(chai instanceof Cutting){
        console.log(chai.serve())
    }       }

    type chaiOrder={
        type:string
        sugar:number
    }

    function isChaiOrder(obj:any):obj is chaiOrder{
        return (typeof obj==="object" && obj!==null && typeof obj.type==="string" && typeof obj.sugar==="number")
    }

    function serveChaiOrder(item:chaiOrder){
        if(isChaiOrder(item)){
            return `serving ${item.type} chai with ${item.sugar} sugar`
        }    

        return `serving custom chai ${item}`
        }


        type MasalaChai={type:"masala",spiceLevel:number}
        type GingerChai={type:"ginger",amount:number}
        type ElaichiChai={type:"elaichi",aroma:number}
        
        type Chai=MasalaChai|GingerChai|ElaichiChai


        function makeChai(order:Chai){
            switch(order.type){
                case "masala" :
                    return `making masala chai with spice level ${order.spiceLevel}`
                    break
                case   "ginger" :
                    return `making ginger chai with amount ${order.amount}`
                    break
                case "elaichi" :
                    return `making elaichi chai with aroma ${order.aroma}`
                    break
            }
        }

        function brew(order:MasalaChai |GingerChai){
            if("spiceLevel" in order){
                
            }

        }
let bagsitem = []

window.onload = function(){
  showitems()
  displayBagIcon()  
}

function addToBag(itemId){

  bagsitem.push(itemId)

  displayBagIcon() 
  

}

function displayBagIcon() {

  let bagItemCountElement = document.querySelector('.bag-item-count')
  
  if(!bagItemCountElement){
    return
  }

  if (bagsitem.length > 0) {
    
    bagItemCountElement.style.display = 'inline'
    bagItemCountElement.innerText = bagsitem.length

  } else {

    bagItemCountElement.style.display = 'none'

  }
}

function showitems(){

  let items_container = document.querySelector(".items-container")


  let allitems = ""

  for(let i=0 ; i<items.length ; i++){
    
    
    allitems += `
    <div class="item-container">
      <img class="item-image" src="${items[i].image}" alt="item image">
      <div class="rating">
          ${items[i].rating.stars} ⭐ | ${items[i].rating.count}
      </div>
      <div class="company-name">${items[i].company}</div>
      <div class="item-name">${items[i].item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${items[i].current_price}</span>
          <span class="original-price">Rs ${items[i].original_price}</span>
          <span class="discount">(${items[i].discount_percentage}% OFF)</span>
      </div>

      <!-- ✅ id pass ho rahi hai -->
      <button class="btn-add-bag" onclick="addToBag(${items[i].id})">
        Add to Bag
      </button>

    </div>`
  }

  items_container.innerHTML = allitems
}
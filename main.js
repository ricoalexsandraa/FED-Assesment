const buttons = document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const data = {
  "product": [{
    "name": "iphone 1",
    "brand": "apple",
    "description": "iphone 1",
    "price": "100",
    "image": "img/iphone1.jpg"
  },
  {
    "name": "iphone 2",
    "brand": "apple",
    "description": "iphone 2",
    "price": "200",
    "image": "img/iphone1.jpg"
  },
  {
    "name": "iphone 3",
    "brand": "apple",
    " description": "iphone 3",
    "price": "300",
    "image": "img/iphone3.jfif"
  },
  {
    "name": "iphone 4",
    "brand": "apple",
    "description": "iphone 4",
    "price": "400",
    "image": "img/iphone4.jpg"
  },
  {
    "name": "iphone 5",
    "brand": "apple",
    "description": "iphone 5",
    "price": "500",
    "image": "img/iphone3.jfif"
  },
  {
    "name": "iphone 6",
    "brand": "apple",
    "description": "iphone 6",
    "price": "600",
    "image": "img/img2.png"
  },
  {
    "name": "iphone 7",
    "brand": "apple",
    "description": "iphone 7",
    "price": "700",
    "image": "img/img2.png"
  },
  {
    "name": "iphone 8",
    "brand": "apple",
    "description": "iphone 8",
    "price": "800",
    "image": "img/img2.png"
  }]
}

for(var x in data.product){
  document.getElementsByClassName("product")[x].innerText = data.product[x].name;
  //document.getElementsByClassName("brand")[x].innerText = data.product[x].brand;
  //document.getElementsByClassName("desc")[x].innerText  += data.product[x].desc;
  document.getElementsByClassName("price")[x].innerText  = data.product[x].price;
  document.getElementsByClassName("img")[x].src = data.product[x].image;
}

var orderButton = document.getElementsByClassName("btn-order");
for(var i=0; i<orderButton.length; i++){
  var button = orderButton[i];
  button.addEventListener('click', addToCart);
}
function addToCart(event){
  var button = event.target;
  var item = button.parentElement;
  var product = item.getElementsByClassName("product")[0].innerText;
  var price = item.getElementsByClassName("price")[0].innerText;
  var image = item.getElementsByClassName("img")[0].src;
  var qty = 1;
  saveToCart(product, price, image, qty);
}

function saveToCart(product, price, image, qty){
  var cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  var cartItem = document.getElementsByClassName("cart-row")[0];
  var cartItemNames = cartItem.getElementsByClassName('item-product');
  for(var i=0; i<cartItemNames.length; i++){
    if(cartItemNames[i].innerText == product){
      qty += 1;
      return
    }
  }
  var content = `
    <td class="item-product"> ${image} </td>
    <td class="item-price"> ${product} </td>
    <td class="item-qty"> $${price} </td>
    <td class="item-qty"> ${qty} </td>
  `
  cartRow.innerHTML = content;
  cartItem.append(cartRow);
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
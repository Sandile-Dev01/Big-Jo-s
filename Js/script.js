
//Animated ads carousel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("animatedAds");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Recommendations

let shop = document.getElementById("recommended");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, img } = x;

            let search = basket.find((x) => x.id === id) || [];
            return `
        
<div id="${id}" class="recommended">
    <img src=${img} class="recommended-item">
    <h5 class="Name">${name}</h5>
    <p class="Price">R ${price}</p>
    <button class="add-to-cartBtn" onclick="increment(${id})">ADD TO CART</button>
</div>

`;
        }).join(""));

};

generateShop();

let increment = (id) => {
    let selectedItem = id;

    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {

        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        alert("item already exist in the cart!");

        return
    }

    localStorage.setItem("data", JSON.stringify(basket));

    update(selectedItem.id);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id)

    calculation();
}

let calculation = () => {
    let cartValue = document.getElementById("cartValue");

    cartValue.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
};

calculation();
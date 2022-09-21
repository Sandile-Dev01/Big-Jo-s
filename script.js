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


//Burgers

//Chicken

//Chips

//Drinks

//Hake

//Shwarma


//Forms

const myForm = document.getElementById("customer-form");
const nameInput = document.getElementById("customer-name");
const lastName = document.getElementById("customer-surname")
const emailInput = document.getElementById("customer-email");
const phoneNumber = document.getElementById("customer-number");
const message = document.querySelector("customer-message");
const msg = document.getElementById("customer-msg");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || lastName.value === '' || emailInput.value === '' || phoneNumber.value === '' || message.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields!';

        setTimeout(() => msg.remove(), 1500);
    } else {
        msg.classList.add('success');
        msg.innerHTML = 'Form Submitted Succesfully!';

        setTimeout(() => msg.remove(), 2000)
    }
}
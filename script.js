//Recommendations

let shop = document.getElementById("recommended");

let shopItemsData = [{
    id : "tummyPleaser",
    name:"Tummy Pleaser and Chips",
    price: "119,99",
    img: "TummyPleaser.png"
},
{
    id: "hakeFam",
    name:"Hake Family Feast",
    price: "249,99",
    img: "HakeFeast.png"
},
{
    id: "BurgerCombo",
    name:"3 Way Burger Combo and Chips",
    price: "199,99",
    img: "ThreeWay.png"
},
{
    id: "hotWingsFeast",
    name:"Hot Wings Feast and Chips",
    price: "189,99",
    img: "hotWingsFeast.png"
}
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData
        .map((x)=>{
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

let increment = (id) =>{
    let selectedItem = id;
    
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined){
        
    basket.push({
        id: selectedItem.id,
        item: 1,
    });
    }else{
        alert("item already exist in the cart!");

        return
    }

    localStorage.setItem("data", JSON.stringify(basket));

    update(selectedItem.id);
};

let update = (id) =>{
    let search = basket.find((x)=> x.id === id)

    calculation();
}

let calculation = () => {
    let cartValue = document.getElementById("cartValue");

    cartValue.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0)
}

calculation();


//Burgers

//Chicken

//Chips

//Drinks

//Hake

//Shwarma


//Forms

const myForm = document.querySelector('#customer-form');
const nameInput = document.querySelector('#customer-name');
const lastName = document.querySelector('#customer-last-name')
const emailInput = document.querySelector('#customer-email');
const phoneNumber = document.querySelector('#customer-phone-number');
const message = document.querySelector('#customer-message');
const msg = document.querySelector('#customer-msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value ==='' || lastName.value ==='' || emailInput.value ==='' || phoneNumber.value ==='' || message.value ===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields!';

        setTimeout(() => msg.remove(), 1500);
    } else {
        msg.classList.add('success');
        msg.innerHTML = 'Form Submitted Succesfully!';

        setTimeout(() => msg.remove(), 2000)
    }
}

var noti = document.querySelector('h1');
	var select = document.querySelector('.select');
	var button = document.getElementsByClassName('add-to-cartBtn');
	for(var but of button)
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')})
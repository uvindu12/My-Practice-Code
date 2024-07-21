let products = 
[
    {
        id: 1,
        name: 'product name',
        image: 'jacket.png',
        price: "$12.50"
    },
    {
        id: 1,
        name: 'product name',
        image: 'jacket.png',
        price: "$12.50"
    },
    {
        id: 1,
        name: 'product name',
        image: 'jacket.png',
        price: "$12.50"
    },
    {
        id: 1,
        name: 'product name',
        image: 'jacket.png',
        price: "$12.50"
    },
    {
        id: 1,
        name: 'product name',
        image: 'jacket.png',
        price: "$12.50"
    },
    {
        id: 1,
        name: 'product name',
        image: 'jacket.png',
        price: "$12.50"
    },
    {
        id: 1,
        name: 'product name',
        image: 'jacket.png',
        price: "$12.50"
    },
    {
        id: 1,
        name: 'product name',
        image: 'jacket.png',
        price: "$12.50"
    }

];

let listCards = [];

function initApp(){
    const list = document.getElementById('list');
    products.forEach((value,key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = 
        `<img src="images/${value.image}" alt="${value.name}" onclick="handleImageClick(${value.id})">
            <div class="title">${value.name}</div>
            <div class="About">${value.About}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">View More</button>
            <button class="btn02" onclick="buynow(${key})">Buy Now</button>`;
        list.appendChild(newDiv);
    });
}

document.addEventListener("DOMContentLoaded", initApp);
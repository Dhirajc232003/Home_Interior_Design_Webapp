const product = [
    {
        id: 0,
        image: 'img/decor1.jpg',
        title: 'Sofa-set',
        price: 120,
    },
    {
        id: 1,
        image: 'img/decor2.jpg',
        title: 'Night-Lamp',
        price: 60,
    },
    {
        id: 2,
        image: 'img/decor3.jpg',
        title: 'Chair',
        price: 1200,
    },
    {
        id: 3,
        image: 'img/decor4.jpg',
        title: 'Chair',
        price: 1200,
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const rootElement = document.getElementById('root');
    
    product.forEach(item => {
        const { image, title, price } = item;
        const box = document.createElement('div');
        box.className = 'box';
        
        const imgBox = document.createElement('div');
        imgBox.className = 'img-box';
        
        const img = document.createElement('img');
        img.className = 'images';
        img.src = image;
        img.alt = title;
        
        const bottom = document.createElement('div');
        bottom.className = 'bottom';
        
        const titleParagraph = document.createElement('p');
        titleParagraph.textContent = title;
        
        const priceHeading = document.createElement('h2');
        priceHeading.textContent = `$ ${price}.00`;
        
        const button = document.createElement('button');
        button.textContent = 'Add to cart';
        button.onclick = () => addtocart(item);
        
        imgBox.appendChild(img);
        box.appendChild(imgBox);
        box.appendChild(bottom);
        box.appendChild(titleParagraph);
        box.appendChild(priceHeading);
        box.appendChild(button);
        
        rootElement.appendChild(box);
    });
});

let cart = [];

function addtocart(item) {
    cart.push(item);
    updateCartUI();
}

function updateCartUI() {
    const cartItemElement = document.getElementById('cartItem');
    const totalElement = document.getElementById('total');
    const cartCountElement = document.getElementById('count');
    
    cartItemElement.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemElement.textContent = 'Your cart is empty';
        totalElement.textContent = '$0.00';
        cartCountElement.textContent = '0';
        return;
    }
    
    let totalPrice = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = item.title;
        cartItemElement.appendChild(cartItem);
        
        totalPrice += item.price;
    });
    
    totalElement.textContent = `$ ${totalPrice.toFixed(2)}`;
    cartCountElement.textContent = cart.length;
}

var cartItemElement = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function displaycart() {
    let j = 0;
    const cartItemElement = document.getElementById('cartItem');
    
    if (cart.length == 0) {
        cartItemElement.innerHTML = "Your cart is empty";
    } else {
        cartItemElement.innerHTML = cart.map((item) => {
            const { image, title, price } = item;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            const rowImg = document.createElement('div');
            rowImg.className = 'row-img';
            
            const img = document.createElement('img');
            img.className = 'rowing';
            img.src = image;
            
            const titleParagraph = document.createElement('p');
            titleParagraph.style.fontSize = '12px';
            titleParagraph.textContent = title;
            
            const priceHeading = document.createElement('h2');
            priceHeading.style.fontSize = '15px';
            priceHeading.textContent = `$ ${price}.00`;
            
            const trashIcon = document.createElement('i');
            trashIcon.className = 'fa-solid fa-trash';
            trashIcon.setAttribute('onclick', `delElement(${j++})`);
            
            cartItem.appendChild(rowImg);
            rowImg.appendChild(img);
            cartItem.appendChild(titleParagraph);
            cartItem.appendChild(priceHeading);
            cartItem.appendChild(trashIcon);
            
            return cartItem.outerHTML;
        }).join('');
    }
}



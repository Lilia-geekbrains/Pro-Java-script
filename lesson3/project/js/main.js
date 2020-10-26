const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
https://github.com/GeekBrainsTutorial/online-store-api/tree/master/responses

// Переделать в ДЗ не использовать fetch а Promise
let getRequest = (url, cb) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        console.log('Error');
      } else {
        cb(xhr.responseText);
      }
    }
  };
  xhr.send();
};
//test
// –--------------------------------

class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this._allProducts = [];

    // this._fetchGoods();
    this.#getProducts().then((data) => {
      this.#goods = [...data];
      // this.#goods = Array.from(data);
      this.#render();
    });

    console.log(this.sum());
  }

  // _fetchGoods() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     console.log(data);
  //     this.#goods = JSON.parse(data);
  //     this.#render();
  //     console.log(this.#goods);
  //   });
  // }

  #getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(response => response.json())
        .catch((error) => {
          console.log(error);
        });
  }

  sum() {
    return this.#goods.reduce((sum, { price }) => sum + price, 0);
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
    }
  }

  createCart() {
      return new Cart();
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  getGoodHTML() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
            </div>`;
  }
}

const list = new ProductList();


class Cart {
  #goods;

  constructor(container = '.cart') {
    this.container = container;
    this.#goods = [];


    this.#addToCart().then((data) => {
      if(data = true) {
      this.#render();
    });
      console.log(this.#goods);
  }
  #addToCart() {
    return fetch(`${API}/addToBasket.json`)
        .then(response => response.json())
        .catch((error) => {
          console.log(error);
        });
  }

  sum() {
    return this.#goods.reduce((sum, { price }) => sum + price, 0);
  }

  #render() {
    const basket = document.querySelector(this.container);

    for (let product of this.#goods) {
      const cartProductObject = new CartItem(product);

      this.#goods.push(cartProductObject);

      block.insertAdjacentHTML('beforeend', cartProductObject.getGoodHTML());
    }
  }
}

  class CartItem {
    constructor(cartItem, img='https://placehold.it/200x150') {
      this.title = cartItem.title;
      this.price = cartItem.price;
      this.id = cartItem.id;
      this.amount = cartItem.amount;
      this.img = img;
    }

  getGoodHTML() {
      
    
      let newCartItem = `<div class="cart-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="cartItemDesc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="delete-btn">удалить</button>
                </div>
              </div>`;
      return newCartItem;
      
  
    } 

    ItemAmount() {
      let buy-btn = document.querySelector('.buy-btn');
      let delete-btn = document.querySelector('.delete-btn');

      buy-btn.
    }


  }
    
class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this.#render();
  }

  _fetchGoods() {
    this.#goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
    }
  }

  totalCost() { 
    let totalCost = 0;
    this._allProducts.forEach (function (product) {
      totalCost += product.price;
    });
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


class Basket {
  constructor(container = '.btn-cart'){
    this.container = container;
    this.items = [];
  }

 renderItems() {


   //метод генерирует состав выбранных товаров (в разметке должен быть дата-атрибут со стоимостью товаров, чтобы использовать его при подсчете)
 }


 
}


const basket = new Basket();


class BasketElem {
  constructor (product, amount) {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.amount = amount;
  }

  renderElement(){

    //метод будет формировать разметку элемента корзины, с учетом количества позиций и стоимости
    /*return `<div class="basketElem" data-id="${this.id}" data-totalPrice="${(this.price)*(this.amount)}">
              <div class="basketDesc">
                  <h3 class="baskH3">${this.title}</h3>
                  <p class="amount">${this.amount}</p>
                  <p class="baskP">${(this.price)*(this.amount)} \u20bd</p>
              </div>
            </div>` */
    
  }

  addToBasket() {
     //метод будет решать, какой товар добавить в корзину с помощью слушателя события клика по кнопке Добавить в корзину

    //let buyButton = document.querySelector('.buy-btn');

    //buyButton.addEventListener('click', function (event) {
    //    let basketElem = current.target.renderElement();
    //})
   
  }
}


// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        searchLine: '',
        showCart: false,
        filtred: [],
        cartUrl: '/getBasket.json',
        cartItems: [],
        imgCart: 'https://placehold.it/50x100'


        

    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            this.getJson(`${API}/addToBasket.json`)
                .then (data => {
                    if (data === 1){
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if(find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cartItems.push(prod);
                        }
                    } else {
                        console.log ('Error!');
                    }
                })
            },

        filterGoods(searchLine) {
            const regexp = new RegExp(searchLine, 'gi');
            this.filtred = this.products.filter(product => regexp.test(product.product_name));
        },
           

            
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
        this.getJson(`${API}${this.catalogUrl}`)
            .then(data => {
                for (el of data) {
                    this.products.push(el);
                    this.filtred.push(el);
                }
            });
        this.getJson(`${API}${this.cartUrl}`)
            .then(data => {
                for (el of data.contents) {
                    this.cartItems.push(el);
                }
            });    
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },
});

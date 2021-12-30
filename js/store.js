new Vue({
    el: '#myApp',

    data: {
        selectedGarment: '',
        cartQuantity: 0,
        cartItems: [],
        visible: false,

        newGarments: [
            {
                id: '1',
                name: 'Layla blazer',
                description: 'Our Layla blazer is made from the luxurious Cordroy fabric.',
                price: '700',
                colours: ['gray','pink'],
                sizes: ['S','M','L'],
                category: 'New',
                imagePath: './images/new/Layla1.jpg'
            },
            {
                id: '2',
                name: 'Stella coat',
                description: 'This coat is perfect for the cold winter days.',
                price: '800',
                colours: ['gray'],
                sizes: ['S','M'],
                category: 'New',
                imagePath: './images/new/Stella1.jpg'
            },
            {
                id: '3',
                name: 'Leah blouse',
                description: 'Our beautiful Leah blouse with her delicate sleeve detail is perfect for these cooler days.',
                price: '500',
                colours: ['floral'],
                sizes: ['S','M','L','XL'],
                category: 'New',
                imagePath: './images/new/Leah1.jpg'
            },

        ],

        shopGarments: [
            {
                id: '4',
                name: 'Bea Kimomo',
                description: 'Bea Kimono',
                price: '200',
                colours: ['paizley'],
                sizes: ['S','M','L'],
                category: 'Kimono',
                imagePath: './images/shop/Bea.jpg'
            },
            {
                id: '5',
                name: 'Emma dress',
                description: 'Emma dress',
                price: '900',
                colours: ['floral'],
                sizes: ['S','M','L'],
                category: 'Dress',
                imagePath: './images/shop/Emma.jpg'
            },
            {
                id: '6',
                name: 'Lize blouse',
                description: 'Lize blouse',
                price: '500',
                colours: ['pink'],
                sizes: ['S','M','L','XL'],
                category: 'Blouse',
                imagePath: './images/shop/Lize.jpg'
            },
            {
                id: '7',
                name: 'Luna dress',
                description: 'Luna dress',
                price: '650',
                colours: ['leopard'],
                sizes: ['S','M','L','XL'],
                category: 'Dress',
                imagePath: './images/shop/Luna.jpg'
            },

        ],
       
    },

     created: function () {
        this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        this.cartQuantity = this.cartItems.length;
        if (this.cartQuantity > 0){
            this.visible = true;
        }
        else{
            this.visible = false;
            }
    },
 
     updated: function () {
        this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        this.cartQuantity = this.cartItems.length;
        if (this.cartQuantity > 0){
            this.visible = true;
        }
        else{
            this.visible = false;
        }
    },
 
     methods: {
        storeSelectedGarment: function (myIndex, fromPage) {
            if (fromPage == "index"){
                localStorage.setItem("selectedGarment", JSON.stringify(this.newGarments[myIndex]));
            }
            else{
                localStorage.setItem("selectedGarment", JSON.stringify(this.shopGarments[myIndex]));
            }
            
            window.open("view.html","_self");
        },
    },
})




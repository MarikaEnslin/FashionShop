new Vue({
    el: '#myView',

    data: {
        selectedGarment: '',
        selectedColour: null,
        selectedSize: null,
        cartQuantity: 0,
        visible: false,

        cartItem: {
                id: '',
                name: '',
                description: '',
                price: '',
                colour: '',
                size: '',
                imagePath: ''
            },

            cartItems: [],
    },

    created: function () {
        this.selectedGarment = JSON.parse(localStorage.getItem("selectedGarment")) || [];
        this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        
        if (this.cartItems.length > 0){
            this.cartQuantity = this.cartItems.length;
            this.visible = true;
        }
        else{
            this.subTotal = "No items in the cart";
            this.visible = false;
        }
    },
    
    methods: {
         
        saveColourSelection: function (myColour){
            this.selectedColour = myColour;
        },

        saveSizeSelection: function (mySize){
            this.selectedSize = mySize;
        },

        addToCart: function(){
            this.cartItem.name = this.selectedGarment.name;
            this.cartItem.description = this.selectedGarment.description;
            this.cartItem.price = this.selectedGarment.price;
            this.cartItem.colour = this.selectedColour;
            this.cartItem.size = this.selectedSize;
            this.cartItem.imagePath = this.selectedGarment.imagePath;

            this.cartItems.push(this.cartItem);

            if (this.cartItems.length > 0){
                this.cartQuantity = this.cartItems.length;
                this.visible = true;
            }
            else{
                this.subTotal = "No items in the cart";
                this.visible = false;
            }
    
            localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
        }
        
    },

})




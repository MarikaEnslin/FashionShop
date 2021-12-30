new Vue({
    el: '#myCart',

    data: {
        subTotal: "",
        cartQuantity: 0,
        visible: false,
        cartItems: [],
    },

    created: function () {
        this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        if (this.cartItems.length > 0){
            this.cartQuantity = this.cartItems.length;
            this.visible = true;
            let mySubTotal = 0;
            for (let i=0; i < this.cartItems.length; i++){
                mySubTotal = mySubTotal + parseInt(this.cartItems[i].price);
            }
            this.subTotal = "R " + mySubTotal.toString();
        }
        else{
            this.subTotal = "No items in the cart";
            this.visible = false;
        }
    },

    updated: function(){
        if (this.cartItems.length > 0){
            this.cartQuantity = this.cartItems.length;
            this.visible = true;
            let mySubTotal = 0;
            for (let i=0; i < this.cartItems.length; i++){
                mySubTotal = mySubTotal + parseInt(this.cartItems[i].price);
            }
            this.subTotal = "R " + mySubTotal.toString();
        }
        else{
            this.subTotal = "No items in the cart";
            this.visible = false;
        }
    },
 
    methods: {
        removeFromCart: function(myIndex){
            console.log("remove from cart");
            this.cartItems.splice(myIndex, 1);
            console.log(this.cartItems);
            localStorage.setItem("cartItems", JSON.stringify(this.cartItems));

        },
    },

})




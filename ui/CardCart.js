import QuantityBlock from "./QuantityBlock.js"
export default{
    components:{
        QuantityBlock
    },
    name:'cardcart',
    props:['product'],
    methods:{
        increaseQuantity(event){
            console.log(event)
            event.quantity++
            event.totalPrice=event.quantity*event.price

        },
        decreaseQuantity(event){
            console.log(event)
            if(event.quantity==0)return
            event.quantity--
            event.totalPrice=event.quantity*event.price
        },
        removeFromCart(event){
            this.$store.commit('cart/removeFromCart',event)
        },
    },
    computed:{
        getTotalProductPrice(){
            return this.product.quantity*this.product.price + ' \u{20BD}'
        }
    },
    template: /*html*/ `
        <div class="card-cart">
            <div class="card-cart__wrap-img">
                <img :src="product.image" alt="">
            </div>
            <div class="card-cart__wrap-info">
                <div class="card-cart__product-name">{{product.name}}</div>
                <div class="card-cart__product-price">{{getTotalProductPrice}}</div>
            </div>

            <div class="card-cart__wrap-buttons">
                <Quantity-Block class="card-cart__quantity-block" :item="product" @increase="increaseQuantity" @decrease="decreaseQuantity"></Quantity-Block>
                
                <button class="card-cart__delete-btn delete-btn" @click="removeFromCart(product)">
                    <i class="gg-math-plus r45"></i>
                </button>
            </div>
        </div>
    `
}
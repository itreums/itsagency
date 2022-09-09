import CardCart from "./CardCart.js"
export default{
    name:"Cart",
    components:{
        CardCart
    },
    props:{
    
    },
    methods:{
        toggleCart(){
            this.$store.commit('cart/toggleCart')
        },
        clearCart(){
            this.$store.commit('cart/clearCart')
        },
        
    },
    computed:{
        getTotalPrice(){
            return this.$store.getters['cart/getTotalPrice'] + '\u{20BD}'
        },
        getQuantityCart(){
            return this.$store.getters['cart/getQuantityCart'] 
        } 
    },
    template:/*html */ `
    <div class="modal"  v-if="$store.state.cart.enabled">
        <div class="cart">
            <div class="cart__wrap-title">
                <div class="cart__title">Корзина</div>
                <button class="close-btn" @click="toggleCart"><i class="gg-math-plus r45"></i></button>
            </div>
            <div class="cart__wrap-info">
                <div class="cart__products-quantity">{{getQuantityCart}} {{$filters.suffix(getQuantityCart)}}</div>
                <div class="cart__clear-cart-btn" @click="clearCart">Очистить список</div>
            </div>
            <div class="cart__products-list" >
                <card-cart v-for="product in $store.state.cart.selectedGoods" :key="product.id" :product="product"></card-cart>  
                
            </div>
            <div class="cart__total-row">
                <div class="cart__wrap-total">
                    <span class="cart__total-title">Итого</span>
                    <div class="cart__total-price">{{getTotalPrice}}</div>        
                </div>
                <button class="cart__buy-btn">оформить заказ</button>
                
            </div>
        </div>
    </div>   
    `

}
export default{
    name:"Cart",
    props:{
    
    },
    methods:{
        toggleCart(){
            this.$store.commit('cart/toggleCart')
        },
        clearCart(){
            this.$store.commit('cart/clearCart')
        },
        removeFromCart(event){
            this.$store.commit('cart/removeFromCart',event)
        },
        increaseQuantity(event){
            console.log(event)
            event.quantity++
            event.totalPrice=event.quantity*event.price

        },
        decreaseQuantity(event){
            if(event.quantity==0)return
            event.quantity--
            event.totalPrice=event.quantity*event.price
        },
    },
    computed:{
        getTotalPrice(){
            return this.$store.getters['cart/getTotalPrice']
        },
        getQuantityCart(){
            return this.$store.getters['cart/getQuantityCart']
        } 
    },
    template:/*html */ `
    <div class="modal"  v-if="$store.state.cart.enabled">
        <div class="cart">
            <div class="d-center cart__title">
                <div class="">Корзина</div>
                <button class="close-btn" @click="toggleCart"><i class="gg-math-plus r45"></i></button>
            </div>
            <div class="d-center cart-info cart__info">
                <div class="cart__info__all-product-quantity quantityGoods">{{getQuantityCart}} {{$filters.suffix(getQuantityCart)}}</div>
                <div class=" cart__info__clear-cart-btn clearCart" @click="clearCart">Очистить список</div>
            </div>
            <div class="listOfGoodsInCart cart__products-list-wrap" >
                <div class="cart__product-card goodInCart d-flex" v-for="good in $store.state.cart.selectedGoods" :key="good.id">
                    <div class="cart__wrap-img">
                        <img :src="good.image" alt="">
                    </div>
                    <div class="good-info__wrap cart__product-info">
                        <div class="product-info__name name">{{good.name}}</div>
                        <div class="product-info__price good-info__price">{{good.quantity*good.price}} &#8381;</div>
                    </div>

                    <div class="cart__btn-group cart__btn-group-wrap">
                        <div class="cart__btn-group-count btn-group-count">
                            <button class="btn-group-count__count-btn count-btn" @click="decreaseQuantity(good)"><i class="gg-math-minus"></i></button>
                            <div class="btn-group-count__quantity quantity">{{good.quantity}}</div>
                            <button class="btn-group-count__count-btn count-btn" @click="increaseQuantity(good)"><i class="gg-math-plus"></i></button>
                        </div>
                        <button class="cart__btn-group-wrap__delete-btn delete-btn" @click="removeFromCart(good)"><i class="gg-math-plus r45"></i></button>
                    </div>
                </div>
            </div>
            <div class="cart__total-wrap total-wrap total d-center">
                <div class="cart__total-price totalPrice">
                    <span class="totalPrice-sub total-price__title">Итого</span>
                    <div class="total-price__sum">{{getTotalPrice}}&#8381;</div>
                    
                    
                </div>
                <button class="cart__buy-btn buy-btn">оформить заказ</button>
                
            </div>
        </div>
    </div>   
    `

}
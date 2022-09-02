export default{
    name:"Cart",
    props:{
        selectedGoods:Array,
        isCartOpen:Boolean,
        getQuatitityCart:Number
    },
    methods:{
        toggleCart(){
            this.$emit('toggleCart')
        },
        clearCart(){
            this.$emit('clearCart')
        },
        removeFromCart(event){
            let index=this.selectedGoods.indexOf(event)
            if(index>-1){
                this.selectedGoods.splice(index,1)
            }
            // console.log(index)
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
            let total=0
            for(let good of this.selectedGoods){
                total+=parseFloat(good.totalPrice)
            }
            return total
        },
    },
    template:/*html */ `
    <div class="modal"  v-if="isCartOpen">
        <div class="cart">
            <div class="d-center cart__title">
                <div class="">Корзина</div>
                <button class="close-btn" @click="toggleCart"><i class="gg-math-plus r45"></i></button>
            </div>
            <div class="d-center cart-info">
                <div class="quantityGoods">{{getQuatitityCart}} {{$filters.suffix(getQuatitityCart)}}</div>
                <div class="clearCart" @click="clearCart">Очистить список</div>
            </div>
            <div class="listOfGoodsInCart" >
                <div class="goodInCart d-flex" v-for="good in selectedGoods" :key="good.id">
                    <div class="cart__wrap-img">
                        <img :src="good.image" alt="">
                    </div>
                    <div class="good-info__wrap">
                        <div class="name">{{good.name}}</div>
                        <div class="good-info__price">{{good.quantity*good.price}} &#8381;</div>
                    </div>

                    <div class="cart__btn-group">
                        <div class="cart__btn-group-count">
                            <button class="count-btn" @click="decreaseQuantity(good)"><i class="gg-math-minus"></i></button>
                            <div class="quantity">{{good.quantity}}</div>
                            <button class="count-btn" @click="increaseQuantity(good)"><i class="gg-math-plus"></i></button>
                        </div>
                        <button class="delete-btn" @click="removeFromCart(good)"><i class="gg-math-plus r45"></i></button>
                    </div>
                </div>
            </div>
            <div class="total d-center">
                <div class="totalPrice">
                    <span class="totalPrice-sub">Итого</span>
                    <div>{{getTotalPrice}}&#8381;</div>
                    
                    
                </div>
                <button class="buy-btn">оформить заказ</button>
                
            </div>
        </div>
    </div>   
    `

}
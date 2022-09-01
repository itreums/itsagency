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
            console.log("clear cart")
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
        <button  @click="toggleCart"><i class="gg-math-plus r45"></i></button>
    </div>
    <div class="d-center cart-info">
        <div class="quantityGoods">{{getQuatitityCart}} {{$filters.suffix(getQuatitityCart)}}</div>
        <div @click="clearCart">Очистить список</div>
    </div>
    <div class="listOfGoodsInCart" >
        <div class="goodInCart d-flex" v-for="good in selectedGoods" :key="good.id">
            <img :src="good.image" alt="">
            <div class="name">{{good.name}}</div>
            <button @click="decreaseQuantity(good)"><i class="gg-math-minus"></i></button>
            <div class="quantity">{{good.quantity}}</div>
            <button @click="increaseQuantity(good)"><i class="gg-math-plus"></i></button>
            <button @click="removeFromCart(good)"><i class="gg-math-plus r45"></i></button>
        </div>
    </div>
    <div class="total d-center">
        <div class="totalPrice">
            <span>Итого</span>
            {{getTotalPrice}}
            
        </div>
        <button>оформить заказ</button>
        
    </div>
</div>
    </div>   
    `

}
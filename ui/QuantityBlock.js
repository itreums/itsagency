export default{
    name:'quantityblock',
    props:{
        item:Object,       
    },

    methods:{
        increase(item){
            this.$emit('increase',item)
        },
        decrease(item){
            this.$emit('decrease',item)
        }
    },
    template:/*html*/ `
        <div class="quantity-block">
            <button class="quantity-block__decrease" @click="decrease(item)">
                <i class="gg-math-minus"></i>
            </button>
            <div class="quantity-block__count">{{item.quantity}}</div>
            <button class="quantity-block__increase" @click="increase(item)">
                <i class="gg-math-plus"></i>
            </button>
        </div>
    `

}
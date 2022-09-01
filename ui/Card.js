export default{
    name:'Card',
    props:
        ['good']
    ,
    methods:{
        addToCart(good){
            this.$emit('addToCart',good)
        }
    },
    template:/*html*/`
    <div class="card">
        <img src="../public/img/paint_1.png" alt="">
        <div class="name">{{good.name}}, {{good.vendor}}</div>
        <div class="d-flex price-bar">
            <div class="price">
                
                {{parseFloat(good.price)}} &#8381;
                
                
            </div>
            <div class="add-btn">
                <button class="card__btn" @click="addToCart(good)"><i class="gg-math-plus"></i></button>
            </div>
        </div>
    </div>
    `
}
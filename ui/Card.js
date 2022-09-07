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
        
        <div class="card__wrap-img">
            <img :src="good.image" alt="">
            <!--<img src="../public/img/paint_1.png" alt="">-->
        </div>
        <div class="card__product-name name">{{good.name}}, {{good.vendor}}</div>
        <div class="d-flex  card__price-bar price-bar">
            <div class="price-bar__price price">
                
                {{parseFloat(good.price)}} &#8381;
                
                
            </div>
            <div class="price-bar__wrap-btn add-btn visible">
                <button class="card__btn" @click="addToCart(good)"><i class="gg-math-plus"></i></button>
            </div>
        </div>
    </div>
    `
}
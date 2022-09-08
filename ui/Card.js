export default{
    name:'Card',
    props:
        ['good']
    ,
    methods:{
        addToCart(good){
            this.$store.commit('cart/addGoodInCart',good)
        },
        openProduct(good){
            console.log(good)
            this.$router.push({ name: 'product', params: { id:good.id}})
        }
    },
    template:/*html*/`
    <div class="card" @click="openProduct(good)">
        
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
                <button class="card__btn" @click.stop="addToCart(good)"><i class="gg-math-plus"></i></button>
            </div>
        </div>
    </div>
    `
}
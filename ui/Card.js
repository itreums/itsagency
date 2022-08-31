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
        <div class="name">{{good.name}}</div>
        <div class="d-flex">
            <div class="price">
                {{good.vendor}}<br>
                {{parseFloat(good.price)}} руб<br>
                {{good.created}}<br>
                {{good.solded}} top<br>
                новика {{good.new}}<br>
                в наличии {{good.has}}<br>
                контрактные{{good.contract}}<br>
                эксклюзив {{good.exclusice}}<br>
                распродажа {{good.sale}}<br>
            </div>
            <div class="add-btn">
                <button class="" @click="addToCart(good)">add</button>
            </div>
        </div>
    </div>
    `
}
export default{
    name:'Header',
    data(){
        return{
            menu:[
                {link:"#",name:'Продукты'},
                {link:"#",name:'Цвета'},
                {link:"#",name:'Вдохновение'},
                {link:"#",name:'Советы'},
                {link:"#",name:'Найти магазин'},

            ]
        }
    },
    props:{
        getQuatitityCart:Number
    },
    methods:{
        toggleCart(){
            this.$emit('toggleCart')
        }
    },
    template: /*html*/ `
    <header class="d-flex">    
        <div class="right d-flex">
            <div class="logo">Colors</div>
            <div class="menu">
                <ul class="d-flex menu__nav">
                    <li class="menu__item" v-for="item in menu">
                        <a class="menu__link" :href="item.link">{{item.name.toUpperCase()}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="left d-flex">
            <div class="phone">
                <div class="phone-number">+7(495)221-77-69</div>
                <span class="phone-action">Заказать звонок</span>
            </div>
            <div class="panel">
                <button class="panel__btn"><i class="gg-search"></i></button>
                <button class="panel__btn"><i class="gg-user"></i></button>
                <button class="panel__btn"><i class="gg-heart"></i></button>
                <button class="panel__btn" :class="{panel__btn_cart:getQuatitityCart}" @click="toggleCart" >
                    <span v-if="getQuatitityCart==0"><i class="gg-shopping-bag"></i></span>
                    <span v-else>{{getQuatitityCart}}</span>
                </button>
            </div>
        </div>
    </header>
    
    `
}
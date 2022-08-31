import Card from './ui/Card.js'
import Switch from './ui/Switch.js'
import Select from './ui/Select.js'
export default{
    name:'App',
    components:{
        Card,
        Switch,
        Select
    },
    data(){
        return {
            data:[],
            length:'',
            selected:'sortUpToLowPrice',
            filters:[],
            cartIsClosed:true,
            selectedGoods:[],
            switches:[
                { value:'new', name:'Новинки'},
                { value:'has', name:'Есть в наличии'},
                { value:'contract', name:'Контрактные'},
                { value:'exclusice', name:'Эксклюзивные'},
                { value:'sale', name:'Распродажа'},
            ],
            selects:[
                {value:'sortUpToLowPrice',name:"Сначала дорогие"},
                {value:'sortLowToUpwPrice',name:"Сначала недорогие"},
                {value:'sortPopulare',name:"Сначала популярные"},
                {value:'sortNewest',name:"Сначала новые"},
            ]
            
        }
    },
    methods:{
        getData(){
          return fetch('https://630c34e283986f74a7bb3fec.mockapi.io/goods').then(resp=>resp.json()) 
        },
        tooggleCart(){
            this.cartIsClosed=!this.cartIsClosed
        },
        addGoodInCart(event){
            let isGoodInCart = this.selectedGoods.find(good=>good.id==event.id)
            if(isGoodInCart){
                console.log("good already has")
                
                isGoodInCart.quantity++
                isGoodInCart.totalPrice=isGoodInCart.quantity*isGoodInCart.price
            }else{
                this.selectedGoods.push(event)
                console.log("good in cart",event)
                // Vue.set()
                event.quantity=1
                event.totalPrice=event.price
            }
            
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
        removeFromCart(event){
            let index=this.selectedGoods.indexOf(event)
            if(index>-1){
                this.selectedGoods.splice(index,1)
            }
            // console.log(index)
        },
        addFilter(event){
            console.log(event)
            this.filters.push(event)
        },

    },
    async created(){
        this.data=await  this.getData()
        console.log(this.data)
    },
    computed:{
        sortGoods(){
            console.log(this.selected)
            if(this.selected=="sortUpToLowPrice"){
                return [...this.data].sort((good1,good2)=>good2['price']-good1['price'])                
            }else if(this.selected=="sortLowToUpwPrice"){
                return [...this.data].sort((good1,good2)=>good1['price']-good2['price'])
            }else if(this.selected=="sortPopulare"){
               return [...this.data].sort((good1,good2)=>good2['solded']-good1['solded'])
            }else if(this.selected=="sortNewest"){
               return [...this.data].sort((good1,good2)=>{
                    let date1=new Date(good1["created"]) 
                    let date2=new Date(good2["created"])
                    return date2-date1
                    
                })
            }
            
        },
        
        applyFilters(){
            if(!this.filters.length){
                return this.sortGoods
            }else{
               let arr=this.sortGoods;
                for(let i=0;i<this.filters.length;i++){               
                    arr=arr.filter(good=>good[this.filters[i]]==true)
                    if(i==this.filters.length-1){
                        console.log(i)
                        return arr
                    }                 
                }              
            }         
        },
        getTotalPrice(){
            let total=0
            for(let good of this.selectedGoods){
                total+=parseFloat(good.totalPrice)
            }
            return total
        }      
    },
    watch:{

    },
    template:/*html*/`
    <header class="d-flex">    
        <div class="logo">Colors</div>
        <div class="menu">
            <ul>
                <li>Продукты</li>
                <li>Цвета</li>
                <li>Вдохновение</li>
                <li>Советы</li>
                <li>Найти магазин</li>
            </ul>
        </div>
        <div class="phone">
        +7(495)221-77-69
        </div>
        <div class="panel" @click="tooggleCart">
            cart
        </div>
    </header>
    <div class="slider">
        <img src="../public/img/slide_1.png" alt="">
    </div>
    <div class="d-flex">
        <div class="filter" >  
            <Switch v-for='item in switches' :switches="item" v-model="filters" ></Switch>   
        </div>
        <main class="content">
            <div class="d-flex">
                <div class="quatity">
                    {{applyFilters.length}} товаров
                </div>
                <div class="sort">
                    <Select :selects="selects" v-model="selected"></Select>
                </div>
            </div>
            <div class="goods d-flex" v-if="data">
                <Card v-for='good in applyFilters' :key="good.id" :good="good" @addToCart="addGoodInCart($event)"></Card>
            </div>
        </main>
    </div>
    <footer class="footer">
    
    </footer>
    <div class="modal" v-bind:class="{ d_none: cartIsClosed}">
        <div class="cart">
            <div class="d-flex">
                <div class="">Корзина</div>
                <button  @click="tooggleCart">Close</button>
            </div>
            <div class="d-flex cartInfo">
                <div class="quantityGoods">{{selectedGoods.length}} товара</div>
            </div>
            <div class="listOfGoodsInCart" >
                <div class="goodInCart d-flex" v-for="good in selectedGoods" :key="good.id">
                    <img :src="good.image" alt="">
                    <div class="name">{{good.name}}</div>
                    <button @click="decreaseQuantity(good)">minus</button>
                    <div class="quantity">{{good.quantity}}</div>
                    <button @click="increaseQuantity(good)">plus</button>
                    <button @click="removeFromCart(good)">delete</button>
                </div>
            </div>
            <div class="total d-flex">
                <button>оформить заказ</button>
                <div class="totalPrice">
                    {{getTotalPrice}}
                </div>
            </div>
        </div>
    </div>
    `
}
import Card from './ui/Card.js'
import Switch from './ui/Switch.js'
import Select from './ui/Select.js'
import Cart from './ui/Cart.js'
import Header from './components/Header.js'
import Slider from './components/Slider.js'

export default{
    name:'App',
    components:{
        Header,
        Slider,
        Card,
        Switch,
        Select,
        Cart
    },
    data(){
        return {
            data:[],
            length:'',
            selected:'sortUpToLowPrice',
            filters:[],
            isCartOpen:false,
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
            ],
            
            
        }
    },
    methods:{
        getData(){
          return fetch('https://630c34e283986f74a7bb3fec.mockapi.io/goods').then(resp=>resp.json()) 
        },
        toggleCart(){
            this.isCartOpen=!this.isCartOpen
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
                event.quantity=1
                event.totalPrice=event.price
            }
            
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
        
        getQuatitityCart(){
            let total=0
            for(let good of this.selectedGoods){
                total+=good.quantity
            }
            return total
        }    
    },
    watch:{

    },
    template:/*html*/`
    <Header :getQuatitityCart="getQuatitityCart" @toggleCart="toggleCart"></Header>
    
    <Slider></Slider>

    <div class="d-flex container">
        <div class="filter" >  
            <Switch v-for='item in switches' :switches="item" v-model="filters" ></Switch>   
        </div>
        <main class="content">
            <div class="d-flex sort-bar">
                <div class="quatity">
                    {{applyFilters.length}} {{$filters.suffix(applyFilters.length)}}
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

    <footer class="footer"></footer>
    
    <Cart :isCartOpen="isCartOpen" @toggleCart="toggleCart" :selectedGoods="selectedGoods" :getQuatitityCart="getQuatitityCart"></Cart>             
    `
}
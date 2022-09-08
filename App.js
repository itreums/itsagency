import Header from './components/Header.js'
import Slider from './components/Slider.js'
import Cart from './ui/Cart.js'

export default{
    name:'App',
    components:{
        Header,
        Slider,
        Cart
      
    },
    data(){
        return {
    
            filters:[],
            switches:[
                { value:'new', name:'Новинки'},
                { value:'has', name:'Есть в наличии'},
                { value:'contract', name:'Контрактные'},
                { value:'exclusice', name:'Эксклюзивные'},
                { value:'sale', name:'Распродажа'},
            ],
            mobFilter:false
                 
        }
    },
    methods:{ 
        addFilter(event){
            console.log(event)
            this.filters.push(event)
        },
  
        openMobFilter(){
            this.mobFilter=!this.mobFilter
        }

    },
    async created(){
        await this.$store.dispatch('getData')
    },
    computed:{
        sorting:{
            get () {
                return this.$store.state.sorting
            },
            set (value) {
                this.$store.commit('applySort', value)
            }
        },
        getProducts(){
            return this.$store.getters.sortGoods
        },     
        applyFilters(){
            if(!this.filters.length){
                // return this.sortGoods
                return this.getProducts
            }else{
            //    let arr=this.sortGoods;
               let arr=this.getProducts
                for(let i=0;i<this.filters.length;i++){               
                    arr=arr.filter(good=>good[this.filters[i]]==true)
                    if(i==this.filters.length-1){
                        console.log(i)
                        return arr
                    }                 
                }              
            }         
        },
        
           
    },
    watch:{

    },
    template:/*html*/`
        <Header></Header>
        <div class="breadcrumbs">
            <div class="breadcrumbs_inner">
                <ul>
                    <li class="br-main"><a href="#">главная</a></li>
                    <li><a href="#">продукты</a></li>
                    <li><router-link to="/">краски</router-link></li>
                </ul>
            </div>
        </div>

        <div class="title-p d_none">
            Краски
        </div>
        <Slider></Slider>
        
        <div class="d-flex container">
            <router-view></router-view>
        </div>
        
        <footer class="footer"></footer>

        <Cart></Cart>             
    `
}
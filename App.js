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
                 
        }
    },
    methods:{ 

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
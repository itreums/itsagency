import Card from "../ui/Card.js"
import Switch from '../ui/Switch.js'
import Select from '../ui/Select.js'
import Cart from '../ui/Cart.js'

export default{
    name:'shop',
    components:{
        Card,
        Switch,
        Select,
        Cart
    },
    data(){
        return {
            mobFilter:false
        }
        
    },
    methods:{   
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
            return this.$store.getters['filter/applyFilters']
        },
        getSwitches(){
            return this.$store.state.filter.switches
        }

    },
    template:/*html*/ `
    <div class="filter__outer" :class="{d_m_vis:mobFilter}">
        <div class="filter__inner">
            <div class="filter-tab d_none"></div>
            <button class="delete-btn delete-btn__filt d_none" @click="openMobFilter"><i class="gg-math-plus r45"></i></button>
            <div class="filter" >
                <Switch v-for='item in getSwitches' :switches="item" ></Switch>
                
            </div>
        </div>
    </div>

    <main class="content">
        <div class="d-flex sort-bar">
            <div class="quatity">
                <div class="m_none">{{applyFilters.length}} {{$filters.suffix(applyFilters.length)}}</div>
                <div class="filters-btn d_none" @click="openMobFilter">Фильтры</div>
            </div>
            <div class="sorting">
                <Select v-model="sorting"></Select>
            </div>
        </div>
        <div class="goods d-flex" v-if="$store.state.products">
            <TransitionGroup name="card-list">
                <Card v-for='good in applyFilters' :key="good.id" :good="good" @addToCart="addGoodInCart($event)"></Card>
            </TransitionGroup>
        </div>
    </main>
    
    `
}
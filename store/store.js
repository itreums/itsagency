import { cartModule } from "./modules/cart.js"

const { createStore } = Vuex
export default createStore({
    modules:{
        cart:cartModule
    },
    state(){
        return{
            state:"shop",
            products:[],
            sorting:'sortUpToLowPrice',
        }
    },
    getters:{
        sortGoods(state){           
            if(state.sorting=="sortUpToLowPrice"){
                return [...state.products].sort((good1,good2)=>good2['price']-good1['price'])                
            }else if(state.sorting=="sortLowToUpwPrice"){
                return [...state.products].sort((good1,good2)=>good1['price']-good2['price'])
            }else if(state.sorting=="sortPopulare"){
               return [...state.products].sort((good1,good2)=>good2['solded']-good1['solded'])
            }else if(state.sorting=="sortNewest"){
               return [...state.products].sort((good1,good2)=>{
                    let date1=new Date(good1["created"]) 
                    let date2=new Date(good2["created"])
                    return date2-date1                
                })
            }
            
        }

    },
    mutations:{
        updateProducts(state,data){
            console.log(data)
            state.products=data
        },
        applySort(state,data){
            state.sorting=data
        },
        
    },
    actions:{
        getData({state,commit}){
            return fetch('https://630c34e283986f74a7bb3fec.mockapi.io/goods')
            .then(resp=>resp.json())
            .then(resp=>{commit('updateProducts',resp)})
        }
    }
})
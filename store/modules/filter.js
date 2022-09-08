export const filterModule = {
    namespaced:true,
    state(){
        return {
            filters:[],
            switches:[
                { value:'new', name:'Новинки'},
                { value:'has', name:'Есть в наличии'},
                { value:'contract', name:'Контрактные'},
                { value:'exclusice', name:'Эксклюзивные'},
                { value:'sale', name:'Распродажа'},
            ],
        }
    },
    getters:{
        applyFilters(state,getters,rootState, rootGetters){
            if(!state.filters.length){
                // return this.sortGoods
                return rootGetters.sortGoods
            }else{
            //    let arr=this.sortGoods;
               let arr=rootGetters.sortGoods
                for(let i=0;i<state.filters.length;i++){               
                    arr=arr.filter(good=>good[state.filters[i]]==true)
                    if(i==state.filters.length-1){
                        console.log(i)
                        return arr
                    }                 
                }              
            }
        }         
    },
    mutations:{
        addFilter(state,value){
            state.filters=value
        },
        
    }

}
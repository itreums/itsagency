export const filterModule = {
    namespaced:true,
    state(){
        return {
            filters:[],
        }
    },
    getters:{

    },
    mutations:{
        addFilter(state,event){
            state.filters.push(event)
        },
    }

}
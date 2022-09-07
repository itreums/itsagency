const { createStore } = Vuex
export default createStore({
    state(){
        return{
            state:"shop",
            products:[]
        }
    },
    actions:{
        getData({state}){
            return fetch('https://630c34e283986f74a7bb3fec.mockapi.io/goods')
            .then(resp=>resp.json())
            .then(resp=>{state.products=resp})
        }
    }
})
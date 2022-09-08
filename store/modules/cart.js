export const cartModule = {
    state(){
        return{
            enabled:false,
            selectedGoods:[],
            quantityProducts:0,
            totalPrice:0
        }
    },
    getters:{
        getTotalPrice(state){
            let total=0
            for(let good of state.selectedGoods){
                total+=parseFloat(good.totalPrice)
            }
            return total
        },
        getQuantityCart(state){
            let total=0
            for(let good of state.selectedGoods){
                total+=good.quantity
            }
            return total
        } 
    },
    mutations:{
        toggleCart(state){
            state.enabled=!state.enabled
        },
        addGoodInCart(state, event){
            let isGoodInCart = state.selectedGoods.find(good=>good.id==event.id)
            if(isGoodInCart){
                console.log("good already has")
                
                isGoodInCart.quantity++
                isGoodInCart.totalPrice=isGoodInCart.quantity*isGoodInCart.price
            }else{
                state.selectedGoods.push(event)
                console.log("good in cart",event)
                event.quantity=1
                event.totalPrice=event.price
            }
            
        }, 
        clearCart(state){
            state.selectedGoods=[]
        },
        removeFromCart(state,event){
            let index=state.selectedGoods.indexOf(event)
            if(index>-1){
                state.selectedGoods.splice(index,1)
            }
        },      
    },
    actions:{

    }
    ,namespaced:true
}
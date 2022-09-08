import Shop from "../pages/Shop.js"
import Product from "../pages/Product.js"



const {createRouter, createWebHistory, createWebHashHistory}=VueRouter
const routes=[
    {
        path:"/",
        component:Shop,
        name:"shop"
    },
    {
        path:'/itsagency/:id',
        component:Product,
        name:'product',
        
    },
    {
        path:'/:pathMatch(.*)',
        component:Shop
    },
    
    


]
const router=createRouter({
    history:createWebHistory(),
    routes
})


export default router
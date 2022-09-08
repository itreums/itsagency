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
        path:'/:id',
        component:Product,
        name:'product',
        
    },
    // {
    //     path:'/:id',
    //     component:Product,
    //     name:'product',
    //     props: (route) => ({
    //         id:route.params.id,
    //         product: route.params.product,
    //         ...route.params
    //     })
    // },
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
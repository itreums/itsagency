const {createApp}=Vue
import App from "./App.js"
import router from "./router/router.js"
import store from "./store/store.js"

const app=createApp(App)
app.config.globalProperties.$filters={
    suffix (value) {        
        if(value==1) {return 'Товар'}
        else if(value==2||value==3||value==4) {return 'Товара'}
        else {return 'Товаров'}
    }
}
app.use(router)
app.use(store)
app.mount("#app")
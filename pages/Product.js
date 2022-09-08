export default{
    name:'product',
    props:['good'],
    data(){
        return {
            product:false
        }
    },
    methods:{
        getProduct(){
            this.product = this.$store.state.products.find((item)=>{
                return item.id==this.$route.params.id
            })
        }
    },
    computed:{
        
    },
    mounted(){
        this.getProduct()
    },
    template: /*html */ `
        <div class="">{{product}}</div>
    `

}
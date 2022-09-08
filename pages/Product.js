import Card from "../ui/Card.js"
export default{
    name:'product',
    components:{
        Card
    },
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
        <Card :good="product"></Card>
    `

}
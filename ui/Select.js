export default{
    name:"Select",
    data(){
        return {

        }
    },
    props:{
        selects:Object,
        modelValue:String
    },
    methods:{
        changeSort(event){
            console.log(event.target.value)
            this.$emit('update:modelValue',event.target.value)
        }
    },
    computed:{
     
    },
    template:/*html*/`
        <select name="" id="" @change="changeSort" class="select">
            <option v-for="item in selects" :key="item.value" :value="item.value">{{item.name.toUpperCase()}}</option>         
        </select>
    `   
}
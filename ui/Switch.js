export default{
    name:"Switch",
    data(){
        return {

        }
    },
    props:{
        switches:Object,
        modelValue:Array
    },
    methods:{
        
    },
    computed:{
        filter: {
            get() {
                return this.modelValue
            },
            set(value) {
                console.log(value)
                this.$emit('update:modelValue', value)
            }
          }
    },
    template:/*html*/`
        <div class="switch">
            <input type="checkbox" 
                v-model="filter"
                :value='switches.value'
                :key='switches.value'
               
            >
            <label for="">{{switches.name}}</label>
        </div> 
    `   
}
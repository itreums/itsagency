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
        toggleCheckbox(event){
            console.log(event.target)
        }
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
                @change=""
            >
            <div class="state"></div>
            <label for=""  @click="toggleCheckbox">
            {{switches.name.toUpperCase()}}
            </label>
        </div>     
    `   
}
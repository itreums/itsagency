export default{
    name:"Select",
    data(){
        return {
            showSort:false,
            selects:[
                {value:'sortUpToLowPrice',name:"Сначала дорогие"},
                {value:'sortLowToUpwPrice',name:"Сначала недорогие"},
                {value:'sortPopulare',name:"Сначала популярные"},
                {value:'sortNewest',name:"Сначала новые"},
            ],
            
        }
    },
    props:{
        modelValue:String
    },
    methods:{
        changeSort(event){
            console.log(event.target.value)
            for(let item of this.selects){
                if(item.name==event.target.value){
                    this.$emit('update:modelValue',item.value)
                }
            }
            
        },
        openSort(){
            this.showSort=!this.showSort
        }
    },
    computed:{
        activeSelect(){
            for(let item of this.selects){
                if(item.value==this.modelValue){
                    return item.name
                }
            }
        }
    },
    template:/*html*/`

        <div class="select">
            <div class="select__active" @click="openSort">{{activeSelect}}</div>
            
            <div class="select__list" v-show="showSort">              
                    <input readonly 
                        type="text" 
                        v-for="item in selects" 
                        :key="item.value" 
                        :value="item.name"  
                        @click="openSort(); changeSort($event);"
                    >
            </div>
            <div class="modal" v-show="showSort"></div>
        </div>
    `   
}
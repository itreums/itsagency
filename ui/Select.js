export default{
    name:"Select",
    data(){
        return {
            showSort:false
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
        },
        openSort(){
            this.showSort=!this.showSort
        }
    },
    computed:{
     
    },
    template:/*html*/`
        <!--<select name="" id="" @change="changeSort" class="select">
            <option v-for="item in selects" :key="item.value" :value="item.value">{{item.name.toUpperCase()}}</option>         
        </select>-->

        <div class="" @click="openSort">{{modelValue}}</div>
        
        <div class="sort" v-show="showSort">
            <div class="" v-for="item in selects" >
                <input readonly type="text" :key="item.value" :value="item.value" @click="changeSort" @click="openSort">
            </div>
        </div>
        <div class="modal" v-show="showSort"></div>
    `   
}
export default{
    name:'Slider',
    data(){
        return{
            banners:[
                {link:"../public/img/slide_1.png",name:"slide_1"},
                {link:"../public/img/slide_2.jpeg",name:"slide_2"},
                {link:"../public/img/slide_3.jpeg",name:"slide_3"},
                {link:"../public/img/slide_4.jpeg",name:"slide_4"},
                {link:"../public/img/slide_5.jpg",name:"slide_5"},
            ]
        }
    },
    methods:{

    },
    template: /*html*/ `
        <!--<div class="slider-banner">
            
        </div>-->
    <div class="slider" data-slider="itc-slider" data-swipe="false" data-loop="false">
        <div class="slider__wrapper">
            <div class="slider__items">
                <div class="slider__item" v-for="item in banners">
                    <img :src="item.link" :alt="item.name" :key="item.name">
                </div>
                
            </div>
        </div>
        <!-- Кнопки для перехода к предыдущему и следующему слайду -->
        <div class="d-flex slider__control_outer">
            <div class="slider__control_inner">
                <button class="slider__control" data-slide="prev"></button>
                <button class="slider__control" data-slide="next"></button>
            </div>
        </div>
        <ol class="slider__indicators">
           
            <li :data-slide-to="index" v-for="(item,index) in banners"></li>
           
            
        </ol>
    </div>
    `
}
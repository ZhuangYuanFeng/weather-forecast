var mydate = new Date();
var time = document.getElementById("date-position");
time.innerHTML = mydate.getFullYear()+"-"+(mydate.getMonth()+1)+"-"+mydate.getDate();
var local = "北京";
url="https://free-api.heweather.com/v5/weather?city="+local+"&key=f13a4900e81247fc8992723e78b3036d";

Vue.component('weather-forecast', {
    template:'#weather-forecast',
    computed: {
        mes(){
            return forecast.state.message
        }
    },
    methods: {
        date () {
            forecast.commit('get')
        },
    },
    mounted:function () {
        this.date();
    }
});
Vue.component('air-condition', {
    template:'#air-condition',
    computed: {
        mes(){
            return forecast.state.message
        }
    },
    methods: {
        date () {
            forecast.commit('get')
        },
    },
    mounted:function () {
        this.date();
    }
});
Vue.component('life-hander', {
    template:'#life-hander',
    computed: {
        mes(){
            return forecast.state.message
        }
    },
    methods: {
        date () {
            forecast.commit('get')
        },
    },
    mounted:function () {
        this.date();
    }
});

const forecast = new Vuex.Store({
    state: {
        message: ''
    },
    mutations: {
        get: function (state) {
            $.get(url,function(dt){
                state.message = dt.HeWeather5[0];
                console.log("今日1",state.message)
            })
        },
        change(state){
            var a = document.getElementById("inputName").value;
            local = a;
            console.log("local",local);
            var url="https://free-api.heweather.com/v5/weather?city="+local+"&key=f13a4900e81247fc8992723e78b3036d";
            $.get(url,function(dt){
                state.message = dt.HeWeather5[0];
                console.log("今日2",state.message)
            })
        }
    }
});

new Vue({
    el: '#box',
    data:{
        city_name:'北京',
        inputBox:false,
        weather:true,
        air:false,
        life:false
    },
    methods:{
        changeCity(){
            forecast.commit('change')
        },
        showInput(){
            this.inputBox = !this.inputBox;
        },
        toWeather(){
            this.weather = true;
            this.life = false;
            this.air = false;
        },
        toAir(){
            this.weather = false;
            this.life = false;
            this.air = true;
        },
        toLife(){
            this.weather = false;
            this.life = true;
            this.air = false;
        }
    }
})

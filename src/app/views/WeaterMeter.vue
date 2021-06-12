<template>
  <div id="container-wheather" class="container-fluid text-center text-dark">
      <h1 class="display-1">Api open weather</h1>
      <div class="row justify-content-center">
            <form class="col-4">
                <h1 class="h3 mb-3 fw-normal">Select city or country</h1>
                <b-input-group size="lg" class="mb-2">
                    <b-input-group-prepend is-text>
                        <b-button  variant="primary" v-on:click="searchCity" >
                            <b-icon icon="search"></b-icon>
                        </b-button>
                    </b-input-group-prepend>
                    <b-form-input  type="search" placeholder="Search city" v-model="city"></b-form-input>
                </b-input-group>
            </form>
      </div>
      <div class="row align-items-center">
        <div class="col">
            <div class="row">
                <b-card title="COUNTRY">
                    <p class="h3 mb-2">Temperature {{weathermeter.temperature}}°C <b-icon icon="thermometer" animation="throb" font-scale="1"></b-icon></p>
                </b-card>
            </div>
        </div>
        <div class="col">
            <b-card title="TEMPERATURE">
                <p class="h3 mb-2">{{weathermeter.temperature}}°C <b-icon icon="thermometer" animation="throb" font-scale="1"></b-icon></p>
            </b-card>
        </div>
        <div class="col">
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return{
            city:'',
            weathermeter:{}
        }
    },
    created(){
        this.weathermeter=this.GET_WEATHERMETER
    },
    computed:{
        ...mapGetters(['GET_WEATHERMETER'])
    },
    mounted(){
        
    },
    methods:{
        ...mapActions(['WEATHERMETER_READ']),
        searchCity(e){
            e.preventDefault()
           this.WEATHERMETER_READ(this.city)
        }

    }
}
</script>

<style>
#container-wheather{
    background: #f5f5f5;
}

</style>
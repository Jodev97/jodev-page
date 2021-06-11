<template>
  <div>
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from './components/Navigation.vue'
export default {
  data(){
    return{}
  },
  components:{
    Navigation
  },
  computed:{
    ...mapGetters(['GET_DATAS']),
    formData:{
        get(){
          return this.GET_DATAS
        }
    }
  }
}
</script>

<style>

</style>
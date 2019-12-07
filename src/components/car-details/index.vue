<template>
  <div class="car-details">
      <h1> Detail du véhicule </h1>
      <ul>
            <li> Num ID : {{car.id}} </li>
            <li> Num immatriculation {{car.immatriculation}} </li>
            <li> {{car.km}} km</li>
      </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import bus from '../../main.js'

Vue.use(VueResource)

export default {
    name: 'car-details',
    data () {
        return {
          car : {},
        }
     },
    http : {
        root : "http://localhost:3000"
    },
    // props : ['car'],
    created(){
        bus.$on('selected', (selected) => {
            this.$resource('details')
            .get({id: selected})
            .then((response) => {
                this.car = response.data[0]
            })
        })
    }
}
</script>

<style>
div.car-details{
    display:inline-block;
    width: 40%;
}
</style>
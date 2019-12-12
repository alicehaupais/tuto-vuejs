<template>
  <div class="car-details">
      <h1> Detail du véhicule </h1>
      <ul>
            <p> {{car}} </p>
            <li> Id : {{carId}} </li>
            <li> Immatriculation : {{carImmatriculation}} </li>
            <li> Kilométrage :  {{carKm}} </li>
      </ul>
  </div>
</template>

<script>
//import VueResource from 'vue-resource'
//import bus from '../../main.js'
//Vue.use(VueResource)

export default {
    name: 'car-details',
    computed: {
        car: {
            get(){
                return this.$store.state.cars;
            }
        },
        carId: {
            get(){
                return this.$store.state.cars.id;
            }
        },
        carImmatriculation: {
            get(){
                return this.$store.state.cars.immatriculation;
            }
        },
        carKm: {
            get(){
                return this.$store.state.cars.km;
            }
        }
    },

    // props : ['car'],
    // created(){
    //     bus.$on('selected', (selected) => {
    //         this.$resource('details')
    //         .get({id: selected})
    //         .then((response) => {
    //             this.car = response.data[0]
    //         })
    //     })
    // }
}
</script>

<style>
div.car-details{
    display:inline-block;
    width: 40%;
}
</style>
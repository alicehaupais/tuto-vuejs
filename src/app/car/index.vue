<template>
  <div class="page">
      <CarList v-on:selected  = 'setSelected($event)'/>
      <CarDetails/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import CarList from './car-list'
import CarDetails from './car-details'

export default {
  name: 'carPage',
  data () {
    return {
      selectedCar : {}
    }
  },
  components: {
    CarList,
    CarDetails
  },
  methods : {
    setSelected(_selectedCar){
      this.selectedCar = _selectedCar
    }
  }
}
</script>
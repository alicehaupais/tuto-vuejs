<template>
  <div class="page">
      <CarList v-on:selected  = 'setSelected($event)'/>
      <CarDetails/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import CarList from '@/components/car-list/index.vue'
import CarDetails from '@/components/car-details/index.vue'

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
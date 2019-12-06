<template>
  <div class="test">
      <Car name = 'Ford' model = 'Fiesta' year = '2008'/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Car from '@/components/car/index.vue'

export default {
  name: 'test',
  components: {
    Car
  }
}
</script>
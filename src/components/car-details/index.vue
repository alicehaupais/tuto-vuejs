<template>
  <div class="car-details">
      <h1> Detail du véhicule </h1>
      <ul>
            <li> {{car.name}} </li>
            <li> {{car.model}} </li>
            <li> {{car.year}} </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'car-details',
  props : ['car'],
}
</script>

<style>
div.car-details{
    display:inline-block;
    width: 40%;
}
</style>
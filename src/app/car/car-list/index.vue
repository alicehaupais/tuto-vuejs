<template>
    <div class = 'car-list'>
        <h1> Liste de voitures </h1>
        <ul v-for = 'car in cars' :key =car.name>
            <li> {{car.name}} </li>
            <li> {{car.model}} </li>
            <li> {{car.year}} </li>
            <button @click="selectCar(car)"> Voir détails </button>
        </ul>
        <button @click="addCar" > Add Car </button>
        <p> Nombre de voitures : {{counter}} </p>
    </div>
</template>

<script>
//import bus from '../../main.js'

export default {
    
    name : 'car-list',
    data ()  {
        return {
            cars : [],
        }
    },
    http : {
        root : "http://localhost:3000"
    },
    props : ['name', 'model', 'year'],
    methods : {
        addCar (){
            this.cars.push ({
                'name' : 'Ford',
                'model' : 'Fiesta',
                 'year' : '2008'
            })
        },
       selectCar(car){
            this.$store.dispatch('selectCarRequest', car.id)
            //bus.$emit('selected', car.id)
        }
    },
    computed : {
        counter (){
            return this.cars.length
        }
    },
    mounted () {
        // this.cars.push ({
        //     'name' : this.name,
        //     'model' : this.model,
        //     'year' : this.year
        // })
        this.$resource('cars')
        .get()
        .then ( response => { this.cars = response.data}, 
                // response => { console.log('erreur', response)}
        )
    }
}
</script>
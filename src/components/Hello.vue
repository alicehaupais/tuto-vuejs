<template>
    <div>
        <h1> {{message}} </h1>
        <h2> Hello {{person.firstName}} {{person.lastName}}</h2>
        <label> Firstname : <input text = "text" v-model = "person.firstName"/> </label>
        <label> Lastname : <input text = "text" v-model = "person.lastName"/> </label>
        <label> Message : <input text = "text" v-model = "message"/> </label>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                person : {
                    firstName : 'John',
                    lastName : 'Doe'
                },
                message : 'Welcome'
            }
            
        },
        props : ['firstName','lastName','from'],
    }
</script>
<template>
    <div>
        <h1> {{message}} </h1>
        <p> Message computed "Hello World" : {{onlyFirstWord}} </p>
        <h2> Hello {{person.firstName}} {{person.lastName}}</h2>
        <label> Firstname : <input text = "text" v-model = "person.firstName"/> </label>
        <label> Lastname : <input text = "text" v-model = "person.lastName"/> </label>
        <label> Message : <input text = "text" v-model = "message"/> </label>
    </div>
</template>

<script>
    export default {
        name : 'hello',
        data () {
            return {
                person : {
                    firstName : 'John',
                    lastName : 'Doe'
                },
                message : 'Welcome',
                msg : "Hello world"
            }
            
        },
        props : ['firstName','lastName','from'],
        computed : {
             onlyFirstWord() {
                return this.msg.split(' ')[0].toUpperCase();
            }
    }
    }
</script>
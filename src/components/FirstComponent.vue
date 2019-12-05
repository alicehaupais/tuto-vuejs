<template>
    <div>
        <h1> Title 1 </h1>
        <h2> Title 2 </h2>
        <span> Hello {{ message }} </span>
        <p> Message : {{msg}} </p>
        <p> Message computed : {{onlyFirstWord}} </p>
    </div>
</template>

<script>
  export default {
     data() {
       return {
          message: "World",
          msg : "hello World"
       }
    },
    computed : {
        onlyFirstWord() {
            return this.msg.split(' ')[0].toUpperCase();
        }
    }
  }
</script>


<style>

</style>
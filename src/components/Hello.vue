<template>
    <div>
        <h1> Hello {{firstName}} {{lastName}} de {{from}} </h1>
    </div>
</template>

<script>
    export default {
        data () {

        },
        props : ['firstName','lastName','from'],
    }
</script>
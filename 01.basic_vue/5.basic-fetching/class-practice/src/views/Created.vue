<template>
    <div>
        <h1>Created</h1>
        {{ users }}
    </div>
</template>

<script>
    export default {
        name: 'created',
        data() {
            return {
                users : []
            }
        }, 
        async created(){
           try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            console.log(response);
            this.users = await response.json();
           }catch(error){
               console.error('Error fetching data:', error);
           }
        }, 
    }
</script>

<style lang="scss" scoped>

</style>
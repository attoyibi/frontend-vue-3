<template>
    <div>
        <h1>Vue Query</h1>
        {{ data }}
    </div>
</template>

<script setup>
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

function fetchPosts(){
    const response = axios.get('https://jsonplaceholder.typicode.com/posts');
    return response;
}

const {data, isLoading, isError, error} = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
})
</script>

<style lang="scss" scoped>

</style>
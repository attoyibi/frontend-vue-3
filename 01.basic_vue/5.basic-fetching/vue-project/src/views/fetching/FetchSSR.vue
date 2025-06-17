<template>
    <div>
        <h1>Fetch SSR</h1>
        <div v-if="pending">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else>
            <ul>
                <li v-for="post in data" :key="post.id">
                    {{ post.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useFetch } from '#app' // Vue 3 composable for SSR-friendly data fetching

// Using useFetch for SSR-compatible data fetching
const { data, pending, error } = await useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
        // Optional: configure fetch options
        pick: ['id', 'title'], // Only pick these fields from response
        server: true, // Ensure SSR
        initialCache: false // Disable initial cache
    }
)
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 10px;
    border-bottom: 1px solid #eee;
}
</style></script>
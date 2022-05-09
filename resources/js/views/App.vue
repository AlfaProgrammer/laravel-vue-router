<template>
  <div>
    <!-- questo e il componente che viene montato all'inizio (route) -->
    <nav>
        <ul>
            <li>Home</li>
            <li>Tutti i post </li>
            <li>Categorie </li>
        </ul>
    </nav>
    <PostsIndex />
  </div>
</template>

<script>
import PostsIndex from './Post.index.vue'
export default {
    components: {
        PostsIndex,
    }
}
</script>

<style lang="scss" scoped>

</style>
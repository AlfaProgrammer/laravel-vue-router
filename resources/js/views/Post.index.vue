<template>
  <div>
    <div class="container">
       <h1>Tutti i post</h1>
    </div>

    <div class="container">
        <div v-for="post in posts" :key="post.id">
            {{post.title}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            posts: []
        }
    },
    methods: {
        fetchPosts(){
            axios.get('/api/posts')
            .then(res => {
                this.posts = res.data.posts.data
            })
            .catch( err => {console.warn ( err ) } )
        }
    },
    mounted(){
        this.fetchPosts();
    }
}
</script>

<style>

</style>
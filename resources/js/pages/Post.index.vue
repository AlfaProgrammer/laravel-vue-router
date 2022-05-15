<template>
  <div class="text-white">
    <div class="container my-4">
       <h1 class="text-4xl font-bold ">Tutti i post</h1>
    </div>

    <!-- <router-link :to="{ name:'post.details', params:{slug: posts[0].slug} }"> dettagli </router-link> -->

    <div class="container py-12">
        <ul class="grid grid-cols-5 gap-6 auto-rows-max">
            <li v-for="post in posts" :key="post.id" class="border-2 border-slate-500 rounded-xl shadow-xl overflow-hidden">
                <div class="card">

                    <figure class="h-52 mb-[10px]">
                        <img src="https://picsum.photos/200/300" alt="" class="block w-full h-full boject-cover object-center ">
                    </figure>

                    <div class="card-title mb-[10px] min-h-[100px] px-[5px]">
                        <h3 class="text-2xl font-bold">{{post.title}}</h3>                        
                    </div>

                    <div class="car-info pl-[10px]">
                        <p class="font-bold text-slate-500">{{post.category.name}}</p>
                        <ul class="flex gap-4 py-4">
                           <li v-for="tag in post.tags" :key="tag.id" class="card-tag bg-amber-600 text-black px-3 rounded"> 
                               {{tag.name}} 
                            </li> 
                        </ul>
                        <router-link :to="{ name: 'post.details', params:{slug: post.slug} }" tag="button" 
                        class="mb-[10px] bg-zinc-400 py-1 px-3 text-sm text-black rounded"> 
                            View Details 
                        </router-link>

                    </div>
                </div>
                
            </li>
        </ul>
    </div>

    <div class="container py-4">
        <ul class="pagination flex justify-center gap-4 items-center">
            <li @click="fetchPosts(n)" :class="[ currentPage == n ? 'bg-orange-400' : 'bg-white/30', 'dot cursor-pointer rounded-full h-10 w-10 flex items-center justify-center text-sm' ]" v-for="n in lastPage" :key="n"> {{ n }} </li>
        </ul>
    </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            posts: [],
            lastPage: 0,
            currentPage: 1
        }
    },
    methods: {
        fetchPosts( page=1 ){
            axios.get('/api/posts', {
                params: { page: page }
            })
            .then(res => {
                this.posts = res.data.posts.data
                this.lastPage = res.data.posts.last_page
                this.currentPage = res.data.posts.current_page
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
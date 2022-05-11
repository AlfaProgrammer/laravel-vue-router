<template>
  <div class="text-white">
    <div class="container my-4">
       <h1 class="text-4xl font-bold ">Tutti i post</h1>
    </div>

    <div class="container">
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
                    </div>
                </div>
                
            </li>
        </ul>
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
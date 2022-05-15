<template>
  <div  v-if="!loading" class="container text-white">
      <img src="https://picsum.photos/1920/350" class="w-full mt-[25px]">

      <section>
        <h1 class="text-3xl py-10 mb-2"> {{post.title}}  </h1>
        <p class="text-orange-400 text-md " v-if="post.category"> {{ post.category.name }} </p>
        <ul class="flex gap-2 items-center">
            <li class="text-white/50 italic text-sm after:content-[',']" v-for="tag in post.tags" :key="tag.id"> {{tag.name}} </li>
        </ul>
        <div class="py-12">
            {{post.content}}
        </div>
      </section>
      <!-- <p>{{postDetails}}</p> -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            post: null,
            loading: true
        }
    },
    methods:{
        fetchPostDetails(){
              axios.get(`/api/posts/${ this.$route.params.slug }`)
            .then( res => { 
                // console.log(res.data)                    
                    this.post = res.data.post

                    this.loading = false 
            })
            .catch(err => {
                // console.log($router)
                this.$router.push('/404')
            })

        }
    },
    // mounted(){
    //     console.log(this.$route)
    // }
    beforeMount(){
        this.fetchPostDetails()
    }
}
</script>

<style lang="scss" scoped>

</style>
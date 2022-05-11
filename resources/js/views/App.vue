<template>
  <body class="bg-slate-900 pb-10">

    <nav class="bg-slate-400 py-5">
      <ul class="flex gap-10 justify-center text-white font-bold text-lg">
        <li class="py-2 px-10 bg-gray-700 rounded-full shadow-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
          <router-link :to="{name: 'posts.index'}">Tutti i post</router-link>
        </li>
        <li class="py-2 px-10 bg-gray-700 rounded-full shadow-xl">link</li>
        <li class="py-2 px-10 bg-gray-700 rounded-full shadow-xl">link</li>
        <li class="py-2 px-10 bg-gray-700 rounded-full shadow-xl">link</li>
        <li class="py-2 px-10 bg-gray-700 rounded-full shadow-xl  ">link</li>
      </ul>
    </nav>

    <router-view> </router-view>

  </body>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

</style>
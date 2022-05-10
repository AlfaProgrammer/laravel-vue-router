<template>
  <div>

    <ul>
      <li>
        <router-link :to="{name: 'posts.index'}">Tutti i post</router-link>
      </li>
    </ul>
    <!-- <router-link to="/bar">Go to Bar</router-link> -->

    <router-view> </router-view>

  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="header-bar">
    <h1 class="title">
      <router-link :to="{ name: 'HomeView'}">
        豆瓣
      </router-link>
    </h1>
    <ul class="nav">
      <li>
        <router-link style="color: #2384E8">
          电影
        </router-link>
      </li>
      <li>
        <router-link style="color: #9F7860">
          图书
        </router-link>
      </li>
      <li>
        <router-link style="color: #E4A813">
          广播
        </router-link>
      </li>
      <li>
        <router-link style="color: #2AB8CC">
          小组
        </router-link>
      </li>
    </ul>
    <span class="talion" @click="showTalion"></span>
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  data () {
      return {}
  },
  methods: {
    showTalion: function () {
      this.$emit('showTalion')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
<div class="sub-nav">
  <div class="navBottom" v-if="mold === 'navBottom'">
    <div class="nav-item">
      <router-link>注册帐号</router-link>
    </div>
    <div class="nav-item">
      <a href="https://movie.douban.com/">Desktop Version</a>
      <a href="#">使用豆瓣APP</a>
    </div>
  </div>
  <div class="quickNav" v-if="mold === 'quickNav'">
    <ul class="quick-nav">
      <li>
        <router-link>影城热映</router-link>
      </li>
      <li>
        <router-link>欧美新碟榜</router-link>
      </li>
      <li>
        <router-link>注册帐号</router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'sub-nav',
  props: {
    mold: {
      type: String,
      default: 'quickNav'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="home">
    <a @click="setEn">EN</a> |
    <a @click="setZh">ZH</a>
    <hello-world/>
    <div class="env">
      {{ env }}
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { setEn, setZh } from '@/common/lang'
import envConstants from '@/common/constants'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      setEn,
      setZh,
      envConstants,
      env: process.env.NODE_ENV
    }
  },
  created () {
    this.$axios.get('/debug/api/test').then((res) => {
      console.log(res.data)
    })
  }
}
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
}
.env {
  margin-top: 30px;
}
</style>

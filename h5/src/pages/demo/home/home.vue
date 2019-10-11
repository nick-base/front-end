<template>
  <div class="demo-home">
    <a @click="setEn">English</a> |
    <a @click="setZh">中文</a>
    <hello-world/>
    <div>{{ $t2('home') }}</div>
    <div class="env">
      {{ message }}
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { setEn, setZh } from '@/common/lang'
import { envConstants } from '@/common/constants'

export default {
  name: 'demo.home',
  components: {
    HelloWorld
  },
  data () {
    return {
      setEn,
      setZh,
      envConstants,
      env: process.env.NODE_ENV,
      message: ''
    }
  },
  created () {
    this.$axios.get('/api/test').then((res) => {
      this.message = res.data
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

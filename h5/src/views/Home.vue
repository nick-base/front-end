<template>
  <div class="home">
    <a @click="setEn">EN</a> | 
    <a @click="setZh">ZH</a>
    <hello-world/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { setEn, setZh } from '../common/lang'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      setEn,
      setZh
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
}
</style>

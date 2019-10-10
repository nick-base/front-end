export default {
  data () {
    return {
      i18n: undefined
    }
  },
  methods: {
    $t2: function (key) {
      let prefix = this.i18n || this.$options.name || 'common'
      return this.$t(`${prefix}.${key}`)
    }
  }
}

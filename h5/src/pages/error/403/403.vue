<template>
  <div class="error-page">
    <div class="content">
      <h1>403</h1>
      <div class="desc">{{ $t('error.forbidden') }}</div>
      <div class="actions">
        <router-link :to="{path:'/'}">
          {{ $t('error.backHome') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error-403'
}
</script>

<template>
  <div class="wrapper">
    <LayoutHeader/>
    <slot></slot>
    <LayoutFooter/>
  </div>
</template>

<script>
import LayoutHeader from '@/layouts/default/LayoutHeader'
import LayoutFooter from '@/layouts/default/LayoutFooter'

export default {
  name: 'DefaultLayout',
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <LayoutManager :layouts="$options.LAYOUTS" :current="$route.meta.layout"/>
  </div>
</template>

<script>
import LayoutManager from '@/layouts/LayoutManager'
import DefaultLayout from '@/layouts/DefaultLayout'

const LAYOUTS = {
  DefaultLayout
}

export default {
  name: 'App',
  components: {
    LayoutManager
  },
  LAYOUTS
}
</script>

<style lang="scss">

</style>

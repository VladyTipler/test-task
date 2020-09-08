<template>
  <div id="app">
    <LayoutManager :layouts="$options.LAYOUTS" :current="$route.meta.layout" v-show="isLoaded"/>
    <div class="d-flex justify-content-center align-items-center vh-100" v-if="!isLoaded">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
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
  computed: {
    status () {
      const status = (this.$store.state.ListQuestions.loaded) ? 'Loading...' : 'Success loading!'
      console.log(status)
      return status
    },
    isLoaded () {
      return this.$store.state.ListQuestions.loaded
    }
  },
  components: {
    LayoutManager
  },
  LAYOUTS
}
</script>

<style lang="scss">

</style>

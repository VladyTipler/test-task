<template>
  <component :is="currentLayout">
    <router-view />
  </component>
</template>

<script>
export default {
  name: 'LayoutManager',
  props: {
    layouts: Object,
    current: String
  },
  computed: {
    // Возвращает имя компонента-лэйаута
    currentLayout () {
      return this.layouts[this.current]
    }
  }
}
</script>

<style scoped>

</style>

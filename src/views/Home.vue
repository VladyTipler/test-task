<template>
  <ListQuestions/>
</template>

<script>
// import ListQuestions from '@/components/ListQuestions.vue'

export default {
  name: 'Home',
  components: {
    ListQuestions: () => import('@/components/ListQuestions.vue')
  }
}
</script>

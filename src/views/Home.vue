<template>
  <div class="home">
    <ListQuestions/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListQuestions from '@/components/ListQuestions.vue'

export default {
  name: 'Home',
  components: {
    ListQuestions
  }
}
</script>

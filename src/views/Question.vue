<template>
  <QuestionDetail
    :title="questionData.title"
    :answers="questionData.answers"
    :body="questionData.body"/>
</template>

<script>
import QuestionDetail from '@/components/QuestionDetail'

export default {
  name: 'Question',
  data () {
    return {
      qId: this.$route.params.id
    }
  },
  computed: {
    questionData () {
      return this.$store.getters.getQuestionById(this.qId)
    }
  },
  components: {
    QuestionDetail
  },
  mounted () {
    this.$store.dispatch('loadQuestionsList')
    this.$store.dispatch('loadAnswersForQuestion', this.qId)
  }
}
</script>

<style scoped>

</style>

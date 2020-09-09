<template>
  <QuestionDetail
    :title="questionData.title"
    :answers="questionData.answers"
    :body="questionData.body"
    :id="questionData.id"
    :key="key"/>
</template>

<script>
import QuestionDetail from '@/components/QuestionDetail'
import { emitter } from '@/main'

export default {
  name: 'Question',
  data () {
    return {
      qId: this.$route.params.id,
      key: Math.ceil(Math.random() * Date.now())
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
    emitter.$on('questionUpdate', () => {
      this.key = Math.ceil(Math.random() * Date.now())
    })
    this.$store.dispatch('loadQuestionsList')
      .then(() => {
        this.$store.dispatch('loadAnswersForQuestion', this.qId)
      })
  }
}
</script>

<style scoped>

</style>

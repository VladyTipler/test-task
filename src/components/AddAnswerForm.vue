<template>
  <form>
    <h3 class="text-center mt-3">Добавить свой ответ</h3>
    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" v-model="name">
    </div>
    <div class="form-group">
      <label>Ответ</label>
      <textarea class="form-control" rows="3" v-model="body"></textarea>
    </div>
    <button class="btn btn-primary" @click.prevent="addAnswer">Отправить</button>
  </form>
</template>

<script>
import { emitter } from '@/main'

export default {
  name: 'AddAnswerForm',
  data () {
    return {
      qId: this.$route.params.id,
      name: '',
      body: ''
    }
  },
  methods: {
    addAnswer () {
      const payload = {
        qId: this.qId,
        answer: {
          id: Math.ceil(Math.random() * Date.now()),
          name: this.name,
          body: this.body,
          isCorrect: false
        }
      }
      this.$store.dispatch('addAnswerToQuestion', payload)
      this.$store.dispatch('loadAnswersForQuestion', this.qId)
      this.name = ''
      this.body = ''
      emitter.$emit('questionUpdate')
    }
  }
}
</script>

<style scoped>

</style>

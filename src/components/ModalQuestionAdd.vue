<template>
  <div class="modal fade" id="addQuestionModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{titleModal}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label>Название вопроса</label>
              <input type="text" class="form-control" v-model="title">
            </div>
            <div class="form-group">
              <label>Текст вопроса</label>
              <input type="text" class="form-control" v-model="body">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
          <button @click="saveQuestionAdd" type="button" class="btn btn-primary">Добавить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emitter } from '@/main'
import $ from 'jquery'

export default {
  name: 'ModalEdit',
  data () {
    return {
      titleModal: 'Редактирование вопроса',
      id: 0,
      title: '',
      body: ''
    }
  },
  methods: {
    openQuestionAdd () {
      this.id = Math.ceil(Math.random() * Date.now())
      $('#addQuestionModal').modal('show')
    },
    saveQuestionAdd () {
      const payload = {
        id: this.id,
        title: this.title,
        body: this.body,
        userId: 1
      }
      this.$store.dispatch('addQuestion', payload)
      $('#addQuestionModal').modal('hide')
      this.title = ''
      this.body = ''
    }
  },
  mounted () {
    emitter.$on('addQuestionOpen', this.openQuestionAdd)
  }
}
</script>

<style scoped>

</style>

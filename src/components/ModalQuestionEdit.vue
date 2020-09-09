<template>
  <div class="modal fade" id="editQuestionModal" tabindex="-1" aria-hidden="true">
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
              <label>Изменить название вопроса</label>
              <input type="text" class="form-control" v-model="title">
            </div>
            <div class="form-group">
              <label>Изменить текст вопроса</label>
              <input type="text" class="form-control" v-model="body">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
          <button @click="saveQuestionEdit" type="button" class="btn btn-primary">Сохранить</button>
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
    openQuestionEdit (question) {
      this.title = question.title
      this.body = question.body
      this.id = question.id
      $('#editQuestionModal').modal('show')
    },
    saveQuestionEdit () {
      const payload = {
        id: this.id,
        title: this.title,
        body: this.body
      }
      this.$store.dispatch('updateQuestion', payload)
      $('#editQuestionModal').modal('hide')
    }
  },
  mounted () {
    emitter.$on('editQuestionOpen', this.openQuestionEdit)
  }
}
</script>

<style scoped>

</style>

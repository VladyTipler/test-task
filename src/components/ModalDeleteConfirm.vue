<template>
  <div class="modal fade" id="confirmQuestionDeleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{titleModal}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="alert alert-danger" role="alert">
            Вы уверены?
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Нет</button>
          <button @click="confirmQuestionDelete" type="button" class="btn btn-primary">Да</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emitter } from '@/main'
import $ from 'jquery'

export default {
  name: 'ModalConfirm',
  data () {
    return {
      titleModal: 'Удалить вопрос!',
      id: 0
    }
  },
  methods: {
    openQuestionDelete (id) {
      this.id = id
      $('#confirmQuestionDeleteModal').modal('show')
    },
    confirmQuestionDelete () {
      this.$store.dispatch('deleteQuestion', this.id)
      $('#confirmQuestionDeleteModal').modal('hide')
    }
  },
  mounted () {
    emitter.$on('confirmQuestionOpen', this.openQuestionDelete)
  }
}
</script>

<style scoped>

</style>

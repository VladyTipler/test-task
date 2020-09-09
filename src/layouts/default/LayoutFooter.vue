<template>
    <div class="modals">
      <ModalQuestionEdit/>
      <ModalDeleteConfirm/>
      <ModalQuestionAdd/>
    </div>
</template>

<script>
import ModalQuestionEdit from '@/components/ModalQuestionEdit'
import ModalDeleteConfirm from '@/components/ModalDeleteConfirm'
import ModalQuestionAdd from '@/components/ModalQuestionAdd'

export default {
  name: 'LayoutHeader',
  components: {
    ModalQuestionEdit,
    ModalDeleteConfirm,
    ModalQuestionAdd
  }
}
</script>

<style scoped>

</style>

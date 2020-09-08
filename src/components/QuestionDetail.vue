<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            {{title}}
          </div>
          <div class="card-body">
            <p>{{body}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionDetail',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    body: {
      type: String,
      default: ''
    },
    answers: {
      type: Array
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>

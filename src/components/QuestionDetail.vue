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

    <h3 class="text-center mt-3">Ответы</h3>
    <div class="row d-flex justify-content-center">
      <div class="col-10">
        <div
          v-for="answer in answers"
          :key="answer.id"
          class="media">
          <div class="media-body"
               :class="{ correct: answer.isCorrect }">
            <h5 class="mt-0"><b>Имя: </b>{{answer.name}}</h5>
            <b>Ответ: </b>{{answer.body}}
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
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .media-body {
    border: 2px solid #363636;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .media-body.correct {
    border-color: #55d07f;
  }
</style>

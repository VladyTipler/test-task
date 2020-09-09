<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex">
          <button type="button" class="btn btn-info mb-3"
                  @click.prevent="$router.go(-1)">Назад
          </button>

          <button type="button" class="btn btn-info mb-3 ml-auto"
                  @click.prevent="openQuestionEditModal">Редактировать вопрос
          </button>
        </div>
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

    <div class="row justify-content-center" :class="{'d-none': !isAnswers, 'd-flex': isAnswers}">
      <div class="col-10">
        <h3 class="text-center mt-3">Ответы</h3>
        <div
          v-for="(answer, index) in localAnswers()"
          :key="index"
          class="media">
          <div class="media-body"
               :class="{ correct: answer.isCorrect }">
            <h5 class="mt-0"><b>Имя: </b>{{answer.name}}</h5>
            <b>Ответ: </b>{{answer.body}}
            <div class="form-group form-check mb-0 mt-3">
              <input type="checkbox" class="form-check-input"
                     :id="'correctCheck' + answer.id"
                     @change="changeCheckbox(answer, index)"
                     v-model="answer.isCorrect">
              <label class="form-check-label"
                     :for="'correctCheck' + answer.id"
              >Отметить, как правильный!</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" :class="{'d-none': isAnswers, 'd-flex': !isAnswers}">
      <div class="col-10">
        <h3 class="text-center mt-3">Ответов на этот вопрос нет...</h3>
      </div>
    </div>

    <div class="row d-flex justify-content-center mb-5">
      <div class="col-10">
        <AddAnswerForm/>
      </div>
    </div>
  </div>
</template>

<script>
import { emitter } from '@/main'
import AddAnswerForm from '@/components/AddAnswerForm'

export default {
  components: {
    AddAnswerForm
  },
  name: 'QuestionDetail',
  props: {
    id: {
      type: Number
    },
    title: {
      type: String,
      default: 'Title'
    },
    body: {
      type: String,
      default: ''
    },
    answers: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  computed: {
    isAnswers () {
      return this.answers.length > 0
    }
  },
  methods: {
    changeCheckbox (answer, index) {
      const newOb = { ...answer }

      this.$set(this.localAnswers, index, newOb)
      this.$set(this.answers, index, newOb)
      emitter.$emit('questionUpdate')
    },
    localAnswers () {
      return this.answers
    },
    openQuestionEditModal () {
      const question = {
        title: this.title,
        body: this.body,
        id: this.id,
        answers: this.answers
      }
      console.log(question)
      emitter.$emit('editQuestionOpen', question)
    }
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

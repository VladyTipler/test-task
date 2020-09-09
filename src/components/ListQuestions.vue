<template>
  <div class="container">
    <div class="row">
      <div class="col">

        <h1 class="display-5 text-center">Список вопросов</h1>
        <button type="button" class="btn btn-info mt-3 mb-3"
                @click.prevent="openQuestionAddModal">Добавить вопрос</button>
        <div v-for="question in questions[questionsPerPage]"
             :key="question.id ? question.id : Math.random()"
             class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ question.title }}</h5>
            <p class="card-text">{{ question.body }}</p>

            <div class="btn-group" role="group" aria-label="Basic example">
              <router-link
                tag="button"
                type="button"
                :to="'/question/' + question.id"
                class="btn btn-primary">Посмотреть вопрос
              </router-link>
              <button type="button" class="btn btn-secondary"
                      @click.prevent="openQuestionEditModal(question)">Редактировать</button>
              <button type="button" class="btn btn-danger"
                      @click.prevent="openQuestionDeleteModal(question.id)">Удалить</button>
            </div>
          </div>
        </div>

        <nav aria-label="...">
          <ul class="pagination pagination-lg justify-content-center">
            <router-link
              tag="li"
              v-for="page in pages"
              :key="page"
              :to="'/page/' + page"
              active-class="active"
              :class="(page === currentPage) ? 'active' : ''"
              class="page-item">
              <a class="page-link" href="#">{{page}}</a>
            </router-link>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { emitter } from '@/main'

export default {
  name: 'ListQuestions',
  data () {
    return {
      loaded: false
    }
  },
  computed: {
    questions () {
      return this.$store.getters.getQuestions
    },
    questionsPerPage () {
      return this.currentPage - 1
    },
    pages () {
      return this.questions.length
    },
    currentPage () {
      return this.$route.params.page || 1
    }
  },
  methods: {
    openQuestionEditModal (question) {
      emitter.$emit('editQuestionOpen', question)
    },
    openQuestionAddModal () {
      emitter.$emit('addQuestionOpen')
    },
    openQuestionDeleteModal (id) {
      emitter.$emit('confirmQuestionOpen', id)
    }
  },
  mounted () {
    this.$store.dispatch('loadQuestionsList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

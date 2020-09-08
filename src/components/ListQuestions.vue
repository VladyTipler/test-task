<template>
  <div class="container" v-if="$store.state.ListQuestions.loaded">
    <div class="row">
      <div class="col">

        <h1 class="display-5 text-center">Список вопросов</h1>

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
                :to="'/question/' + question"
                class="btn btn-primary">Посмотреть вопрос</router-link>
              <button type="button" class="btn btn-secondary">Редактировать</button>
              <button type="button" class="btn btn-danger">Удалить</button>
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
    getQuestionsList () {
      this.$store.dispatch('loadQuestionsList')
    }
  },
  created () {
    this.getQuestionsList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

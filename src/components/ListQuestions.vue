<template>
  <div class="container">
    <div class="row">
      <div class="col">

        <div v-for="card in 5" :key="card" class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">Вопрос #{{ card }}</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text">Тестовый стор: {{ test }}</p>
            <router-link
              tag="a"
              class="btn btn-primary"
              :to="'/question/' + card">
              Посмотреть вопрос
            </router-link>
          </div>
        </div>

        <nav aria-label="...">
          <ul class="pagination pagination-lg justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
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
    return {}
  },
  computed: {
    test () {
      return this.$store.state.ListQuestions.test
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

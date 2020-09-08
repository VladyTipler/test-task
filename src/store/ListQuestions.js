export default {
  state: () => ({
    questions: [],
    questionsPerPage: 10,
    loaded: false
  }),
  mutations: {
    setQuestions (state, questions) {
      const size = state.questionsPerPage
      // let pagedQuestions = []
      for (let i = 0; i < Math.ceil(questions.length / state.questionsPerPage); i++) {
        state.questions[i] = questions.slice((i * size), (i * size) + size)
      }
      const length = state.questions.length
      state.questions.splice(length)
    }
  },
  actions: {
    loadQuestionsList ({ commit, state }) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
          commit('setQuestions', data)
          state.loaded = true
        })
    }
  },
  getters: {
    getQuestions (state) {
      return state.questions
    }

  }
}

import Vue from 'vue'

export default {
  state: () => ({
    questions: [],
    questionsPerPage: 10,
    loaded: false
  }),
  mutations: {
    setQuestions (state, questions) {
      state.questions = questions
    },
    setAnswersToQuestion (state, { id, data }) {
      const qIndex = state.questions.findIndex((el, i, array) => el.id === parseInt(id))
      const questionEl = state.questions[qIndex]

      // Забить рандомными true/false правильность ответов
      for (let i = 0; i < data.length; i++) {
        data[i].isCorrect = Math.random() >= 0.5
      }
      questionEl.answers = data
      Vue.set(state.questions, qIndex, questionEl)
    }
  },
  actions: {
    async loadQuestionsList ({ commit, state }) {
      if (state.questions.length > 0) {
        return
      }
      state.loaded = false
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
          commit('setQuestions', data)
          state.loaded = true
        })
    },
    async loadAnswersForQuestion ({ commit, getters, state }, id) {
      console.log(getters.getQuestionById(id).answers)
      if (getters.getQuestionById(id).answers) {
        return
      }
      state.loaded = false
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((res) => res.json())
        .then((data) => {
          commit('setAnswersToQuestion', {
            id,
            data
          })
          state.loaded = true
        })
    }
  },
  getters: {
    getQuestions (state) {
      const size = state.questionsPerPage
      const pagedQuestions = []
      for (let i = 0; i < Math.ceil(state.questions.length / state.questionsPerPage); i++) {
        pagedQuestions[i] = state.questions.slice((i * size), (i * size) + size)
      }
      return pagedQuestions
    },
    getQuestionById: (state) => (id) => {
      return state.questions.filter((el) => el.id === parseInt(id))[0] || []
    }
  }
}

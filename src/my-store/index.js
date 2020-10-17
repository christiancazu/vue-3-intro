import { reactive, readonly } from 'vue'

const state = reactive({
  books: [
    {
      id: 1,
      title: 'foo'
    },
    {
      id: 2,
      title: 'bar'
    }
  ]
})

const actions = {
  addBook (payload) {
    state.books.push(payload)
  }
}

export default readonly({
  state,
  actions
})

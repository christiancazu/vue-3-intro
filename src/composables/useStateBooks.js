import { inject } from 'vue';


export default function useStateBooks () {
  const {
    state: { books },
    actions: { addBook }
  } = inject('BOOK_STORE')

  return {
    books,
    addBook
  }
}

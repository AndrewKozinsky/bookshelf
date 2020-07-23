import {createStore} from 'redux'
import {
    addAllBooks,
    addFilteredBooks,
    setFilterPropValues,
    changeFilterPropValue,
    changePage
} from './reducers'


const inicialState = {
    books: null,
    filteredBooks: null,
    filter: {
        /*author: {
            'Gerald Durrell': true,
            'J.K. Rowling': true,
            'Mario Casciaro': true
        },*/
        /*genre: {
            'Adventure': true,
            'Educational literature': true,
            'Literature for children': true
        }*/
    },
    page: 0,
    booksPerPage: 3
}

function reducer(state = inicialState, action) {
    switch (action.type) {
        case 'ADD_ALL_BOOKS':
            return addAllBooks(state, action)
        case 'ADD_FILTERED_BOOKS':
            return addFilteredBooks(state, action)
        case 'SET_FILTER_PROP_VALUES':
            return setFilterPropValues(state, action)
        case 'CHANGE_FILTER_PROP_VALUE':
            return changeFilterPropValue(state, action)
        case 'CHANGE_PAGE':
            return changePage(state, action)
        default:
            return state
    }
}

export default createStore(reducer)
// Функция добавляет в Хранилище все книги
export function addAllBooks(state, action) {
    const stateCopy = {...state}

    stateCopy.books = action.books

    return stateCopy
}

// Функция добавляет в Хранилище отфильтрованные книги
export function addFilteredBooks(state, action) {
    const stateCopy = {...state}

    stateCopy.filteredBooks = action.filteredBooks

    return stateCopy
}

// Изменение значения группы свойств в фильтре. Например список авторов.
export function setFilterPropValues(state, action) {
    const stateCopy = {...state}

    const filterCopy = {...stateCopy.filter}

    filterCopy[action.propName] = action.propValuesObj

    stateCopy.filter = filterCopy
    return stateCopy
}

// Изменение значения флага в фильтре.
export function changeFilterPropValue(state, action) {
    const stateCopy = {...state}

    const filterCopy = {...stateCopy.filter}

    const filterGroupObjCopy = {...filterCopy[action.groupName]}

    filterGroupObjCopy[action.propName] = action.propValue

    filterCopy[action.groupName] = filterGroupObjCopy

    stateCopy.filter = filterCopy

    return stateCopy
}

// Изменение текущей страницы
export function changePage(state, action) {
    const stateCopy = {...state}

    stateCopy.page = action.page
    return stateCopy
}


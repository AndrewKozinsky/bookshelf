
// Добавление всех книг
export function addAllBooks(books) {
    return {
        type: 'ADD_ALL_BOOKS',
        books
    }
}

// Добавление книг соответствующих текущему фильтру
export function addFilteredBooks(filteredBooks) {
    return {
        type: 'ADD_FILTERED_BOOKS',
        filteredBooks
    }
}

// Изменение значения группы свойств в фильтре. Например список авторов
// В propName имя параметра фильтра
// В propValuesObj все значения параметра фильтра и булево значение отмечено ли оно
export function setFilterPropValues(propName, propValuesObj) {
    return {
        type: 'SET_FILTER_PROP_VALUES',
        propName,
        propValuesObj
    }
}

// Изменение значения флага в фильтре.
// В groupName имя группы флагов (например authors)
// В propName имя свойства (например Gerald Durrell)
// В propValue булево значение отмечено ли свойство в фильтре
export function changeFilterPropValue(groupName, propName, propValue) {
    return {
        type: 'CHANGE_FILTER_PROP_VALUE',
        groupName,
        propName,
        propValue
    }
}

// Изменение текущей страницы
export function changePage(page) {
    // console.log(page);
    return {
        type: 'CHANGE_PAGE',
        page
    }
}

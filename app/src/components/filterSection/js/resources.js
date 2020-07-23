import {changeFilterPropValue} from "../../../store/actions";

/**
 * Функция принимает массив объектов в которых описаны свойства книг.
 * Перебирает объекты и возвращает объект где будут отмечены все значения какого-то параметра.
 * Например если у книги есть параметр author, то в возвращаемом объекте будут все имеющиеся авторы.
 * Этот объект будет использоваться для формирования группы флагов в форме фильтра.
 * Значения параметров будут true потому что при загрузке страницы все флаги будут отмечены.
 * @param {String} propName — имя свойства значения которого нужно возвратить
 * @param {Array} books — массив книг из которого нужно получить все значения переданного свойства
 * @return {Object} — вроде такого:
 * {
 *     'Gerald Durrell': true,
 *     'Mario Casciaro': true,
 *     'J.K. Rowling': true
 * }
 */
export function getGroupFilterProps(propName, books) {

    // Объект где будут храниться значения параметра и их статусы
    const propValues = {}

    books.forEach(book => {
        // Каждый перебираемый объект будет иметь примерно такие свойства:
        /* {
            id: 16,
            author: 'Mario Casciaro',
            genre: 'Educational literature',
            title: 'Node.js Design Patterns: Master a series of patterns and techniques to create modular, scalable, and efficient applications',
            cover: 'http://localhost:3000/static/books/Node.js Design Patterns.jpg'
        }*/
        propValues[ book[propName] ] = true
    })

    return propValues
}

// Обработчик изменения формы с фильтрами
export function onFormChange(e, dispatch) {
    // Флаг, который изменили
    const targetEl = e.target

    // Получу имя, значение и узнаю отмеченл ли флаг
    const inputName = targetEl.name
    const inputValue = targetEl.value
    const isInputChecked = targetEl.checked

    // Поставить в Хранилище новое значение флага фильтра.
    dispatch(
        changeFilterPropValue(inputName, inputValue, isInputChecked)
    )
}

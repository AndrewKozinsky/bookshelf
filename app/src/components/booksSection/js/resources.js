/**
 * Функция фильтрует массив книг чтобы отобрать только те, которые соответствуют параметрам фильтра
 * @param {Array} booksArr — массив с данными о всех книгах
 * @param {Object} filter — объект с параметрами по которому книги должны быть отфильтрованы. Вроде такого:
 * {
        author: {
            'Gerald Durrell': true,
            'J.K. Rowling': false,
            'Mario Casciaro': false
        },
        genre: {
            'Adventure': true,
            'Educational literature': true,
            'Literature for children': true
        }
    }
 * @return {*[]}
 */


export function filterBooks(booksArr, filter) {

    // Скопировать массив всех книг
    let filteredArr = [...booksArr]

    // Перебрать каждое свойство
    for(let key in filter) {
        // Возратить только те книги, которые соответствуют объекту filter[key]
        filteredArr = filterGroup(filteredArr, key, filter[key])
    }

    return filteredArr
}

/**
 * Функция отфильтровывает книги не проходящие по переданным параметрам
 * @param {Array} booksArr — массив с данными о книгах. Каждая книга выглядит примерно так:
 * {
        id: 1,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'The Overloaded Ark',
        cover: 'static/books/The Overloaded Ark.jpg'
    }
 * @param {String} groupName — имя свойства по которому книги будут фильтроваться. Например author или genre
 * @param {Object} groupValues объект с разрешёнными значениями свойств. Вроде такого:
 * {
        Gerald Durrell: true
        J.K. Rowling: true
        Mario Casciaro: true
    }
 * @return {*}
 */
function filterGroup(booksArr, groupName, groupValues) {

    // Отфильтровать книги и возвратить новый массив...
    return booksArr.filter(book => {
        // Возвратить true
        // если в книге значение свойства book[author] (например даёт имя автора 'Gerald Durrell')
        // равно значению свойства в фильтрующем объекте
        // (например groupValues[book[groupName]] так же даёт значение 'Gerald Durrell' или не даёт)
        return (book[groupName] && groupValues[book[groupName]])
    })
}
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePage} from "../../store/actions";
import './css/pagination.scss'


function Pagination() {

    const dispatch = useDispatch()

    const {
        filteredBooks,
        page,
        booksPerPage
    } = useSelector(store => store)


    // Получу количество страниц
    let pagesCount = filteredBooks
        ? Math.ceil(filteredBooks.length / booksPerPage)
        : 1

    // При изменении массива отфильтрованных книг...
    useEffect(() => {
        // Завершить функцию если нахожусь на нулевой странице
        if(!pagesCount) return

        // Если количество страниц меньше, чем текущая страница,
        // то поставить максимальную страницу
        if(pagesCount - 1 < page) {
            dispatch(
                changePage(pagesCount - 1)
            )
        }

    }, [filteredBooks])

    // Если есть только одна страница, то не отрисовывать нумерацию
    if(pagesCount === 1) return null

    const buttons = []

    for(let i = 0; i < pagesCount; i++) {
        let btnCls = 'pagination_btn'

        // Задать отдельный класс текущей странице
        if(page === i) btnCls += ' pagination_btn--current'

        buttons.push(
            <button
                className={btnCls}
                onClick={() => onButtonClick(dispatch, i)}
                key={i}
            >{i + 1}</button>
        )
    }

    return (
        <div className='pagination'>
            {buttons}
        </div>
    )
}

// Обработчик щелчка по кнопке страницы
// Поставить переданную страницу в качестве текущей
function onButtonClick(dispatch, page) {
    dispatch(changePage(page))
}

export default Pagination;
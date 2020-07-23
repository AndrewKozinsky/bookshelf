import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getBooks} from "./js/resources"
import {addAllBooks} from "../../store/actions"
import FilterSection from "../filterSection";
import BooksSection from "../booksSection";
import Pagination from "../pagination";
import './css/booksSectionContainer.scss'


function BooksSectionContainer() {
    const dispatch = useDispatch()

    // Получить массив всех книг
    const {books} = useSelector(store => store)

    // При отрисовке компонента загрузить с сервера все книги
    useEffect(() => {
        getBooks().then(books =>
            // Поставить загрузенные книги в Хранилище
            dispatch(addAllBooks(books))
        )
    }, [])

    if(!books) return 'Loading books...'

    return (
        <div className='books-container'>
            <div className='books-container__filter-part'>
                <FilterSection />
            </div>
            <div className='books-container__books-part'>
                <BooksSection />
                <Pagination />
            </div>
        </div>
    )
}

export default BooksSectionContainer;
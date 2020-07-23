import React, {useEffect} from 'react';
import './css/booksSection.scss'
import {useDispatch, useSelector} from "react-redux";
import {filterBooks} from "./js/resources";
import {addFilteredBooks} from "../../store/actions";


// Компонент вывода книг текущей страницы
function BooksSection() {

    const dispatch = useDispatch()

    const {
        books,
        filter,
        page,
        booksPerPage,
        filteredBooks
    } = useSelector(store => store)

    // При загрузке компонента...
    useEffect(() => {
        // Взять все книги и отфильтровать только те, которые подходят под параметры фильтра
        const filteredBooks = filterBooks(books, filter)

        // Поставить отфильтрованные книги в Хранилище
        dispatch(addFilteredBooks(filteredBooks))
    }, [books, filter])

    // Если отфильтрованных книг еще нет, то не отрисовывать компонент
    if(!filteredBooks) return null

    // Сформировать разметку из отфильтрованных книг
    const booksArr = filteredBooks.map(bookData => {
        return <Book bookData={bookData} key={bookData.id} />
    })

    // Возьму только те книги, которые должны быть показаны на текущей странице
    return booksArr
        .slice(page * booksPerPage, page * booksPerPage + booksPerPage)
}

// Компонент отдельной книги.
// В bookData будет объект с деталями книги. Вроде такого:
/*{
    id: 1,
    author: 'Gerald Durrell',
    genre: 'Adventure',
    title: 'The Overloaded Ark',
    cover: 'static/books/The Overloaded Ark.jpg'
}*/
function Book({bookData}) {
    return (
        <div className='book-section'>
            <div className='book__left-side'>
                <img src={bookData.cover} className='book__cover' />
            </div>
            <div className='book__right-side'>
                <p className='book__author'>{bookData.author}</p>
                <p className='book__title'>{bookData.title}</p>
                <p className='book__genre'>{bookData.genre}</p>
            </div>
        </div>
    )
}

export default BooksSection;
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onFormChange, getGroupFilterProps} from "./js/resources";
import {setFilterPropValues} from "../../store/actions";
import './css/filterSection.scss'


// Компонент отрисовывающий блок фильтра
function FilterSection() {
    const dispatch = useDispatch()

    // Получу из Хранилища все книги
    const {books} = useSelector(store => store)

    // Тут будет храниться значение готов ли фильтр для отрисовки
    const [filterIsReady, setFilterIsReady] = useState(false)

    // При загрузке компонента...
    useEffect(() => {
        // Получить все значения авторов и жанров и поставить в Хранилище
        // Они будут использоваться для фильтрации
        const authors = getGroupFilterProps('author', books)
        dispatch(setFilterPropValues('author', authors))

        const genres = getGroupFilterProps('genre', books)
        dispatch(setFilterPropValues('genre', genres))

        // Так как все данные для отрисовки фильтра есть, то можно его отрисовывать
        setFilterIsReady(true)
    }, [])

    return filterIsReady ? <Form /> : null
}

// Компонент формы фильтра
function Form() {
    const dispatch = useDispatch()

    // Получу данные для отрисовки фильтра. В переменной будет примерно такой объект:
    /*{
        author: {
            'Gerald Durrell': true,
            'J.K. Rowling': true,
            'Mario Casciaro': true
        },
        genre: {
            'Adventure': true,
            'Educational literature': true,
            'Literature for children': true
        }
    }*/
    const {filter} = useSelector(store => store)

    // В массиве будут храниться группы флагов входящих в фильтр
    const checkboxes = []

    // Переберу объект filter чтобы сформировать разметку групп флагов
    for(let key in filter) {
        checkboxes.push(<Checkboxes groupName={key} propsObj={filter[key]} key={key} />)
    }

    return <form className='filter-form' onChange={(e) => onFormChange(e, dispatch)}>
        {checkboxes}
    </form>
}

/**
 * Компонент списка флагов
 * @param {String} groupName — имя свойства, значения которого нужно отметить в фильтре
 * @param {Object} propsObj — объект со значениями группы флагов. Вроде такого:
 * {
        'Gerald Durrell': true,
        'J.K. Rowling': true,
        'Mario Casciaro': true
    }
 * @constructor
 */
function Checkboxes({groupName, propsObj}) {

    // Получу имя группы флагов и сделаю первую букву заглавной
    let groupHeaderName = groupName[0].toUpperCase() + groupName.substr(1)

    // Массив флагов
    const checkboxes = []

    // Выделен ли текущий перебираемый флаг
    let isChecked = null

    for(let key in propsObj) {
        // Узнаю отмечен ли перебираемый флаг
        isChecked = propsObj[key]

        // Сформировать разметку флага и поставить в массив checkboxes
        checkboxes.push(
            <div key={key} className='checkbox'>
                <input
                    type='checkbox'
                    className='checkbox__label'
                    defaultChecked={isChecked}
                    name={groupName}
                    value={key}
                    id={key}
                />
                <label className='checkbox__input' htmlFor={key}>{key}</label>
            </div>
        )
    }

    return <div className='filter-form__section'>
        <p className='filter-form__section-header'>
            {groupHeaderName}
        </p>
        {checkboxes}
    </div>
}


export default FilterSection;
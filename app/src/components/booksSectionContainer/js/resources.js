// Функция загружает с сервера данные о всех книгах
export async function getBooks() {

    const url = 'http://localhost:3000/api/books'

    const serverRes = await fetch(url)
        .then(data => data.json())
        .then(data => data)

    return serverRes.data
}
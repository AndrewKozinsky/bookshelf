const books = [
    {
        id: 1,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'The Overloaded Ark',
        cover: 'http://localhost:3000/static/books/The Overloaded Ark.jpg'
    },
    {
        id: 2,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'Three Tickets to Adventure',
        cover: 'http://localhost:3000/static/books/Three Tickets to Adventure.jpg'
    },
    {
        id: 3,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'The Bafut Beagles',
        cover: 'http://localhost:3000/static/books/The Bafut Beagles.jpg'
    },
    {
        id: 4,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'My Family and Other Animals',
        cover: 'http://localhost:3000/static/books/My Family and Other Animals.jpg'
    },
    {
        id: 5,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'A Zoo in My Luggage',
        cover: 'http://localhost:3000/static/books/A Zoo in My Luggage.jpg'
    },
    {
        id: 6,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'The Whispering Land',
        cover: 'http://localhost:3000/static/books/The Whispering Land.jpg'
    },
    {
        id: 7,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'Two in the Bush',
        cover: 'http://localhost:3000/static/books/Two in the Bush.jpg'
    },
    {
        id: 8,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'Birds, Beasts, and Relatives',
        cover: 'http://localhost:3000/static/books/Birds, Beasts, and Relatives.jpg'
    },
    {
        id: 9,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'Catch Me a Colobus',
        cover: 'http://localhost:3000/static/books/Catch Me a Colobus.jpg'
    },
    {
        id: 10,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'Beasts in My Belfry',
        cover: 'http://localhost:3000/static/books/Beasts in My Belfry.jpg'
    },
    {
        id: 11,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'Golden Bats And Pink Pigeons: A Journey to the Flora and Fauna of a Unique Island',
        cover: 'http://localhost:3000/static/books/Golden Bats And Pink Pigeons.jpg'
    },
    {
        id: 12,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'The Garden of the Gods',
        cover: 'http://localhost:3000/static/books/The Garden of the Gods.jpg'
    },
    {
        id: 13,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'The Picnic And Suchlike Pandemonium',
        cover: 'http://localhost:3000/static/books/The Picnic And Suchlike Pandemonium.jpg'
    },
    {
        id: 14,
        author: 'Gerald Durrell',
        genre: 'Adventure',
        title: 'Durrell in Russia',
        cover: 'http://localhost:3000/static/books/Durrell in Russia.jpg'
    },
    {
        id: 15,
        author: 'Mario Casciaro',
        genre: 'Educational literature',
        title: 'Node.js Design Patterns - Second Edition: Master best practices to build modular and scalable server-side web applications',
        cover: 'http://localhost:3000/static/books/Node.js Design Patterns - Second Edition.jpg'
    },
    {
        id: 16,
        author: 'Mario Casciaro',
        genre: 'Educational literature',
        title: 'Node.js Design Patterns: Master a series of patterns and techniques to create modular, scalable, and efficient applications',
        cover: 'http://localhost:3000/static/books/Node.js Design Patterns.jpg'
    },
    {
        id: 17,
        author: 'J.K. Rowling',
        genre: 'Literature for children',
        title: 'Harry Potter and the Order of the Phoenix',
        cover: 'http://localhost:3000/static/books/Harry Potter and the Order of the Phoenix.jpg'
    },
    {
        id: 18,
        author: 'J.K. Rowling',
        genre: 'Literature for children',
        title: 'Harry Potter and the Philosopher\'s Stone',
        cover: 'http://localhost:3000/static/books/Harry Potter and the Philosopher-s Stone.jpg'
    },
    {
        id: 19,
        author: 'J.K. Rowling',
        genre: 'Literature for children',
        title: 'Harry Potter and the Goblet of Fire',
        cover: 'http://localhost:3000/static/books/Harry Potter and the Goblet of Fire.jpg'
    },
]


exports.getAllBooks = function getAllBooks(req, res) {
    res.json({
        status: 'success',
        data: books
    })
}
books = []
const endPointAPI = 'app/books_page/books.json'
getBooksFromAPI()

async function getBooksFromAPI() {
    const res = await fetch(endPointAPI)
    books = await res.json()
    // console.table(books)
    let booksWithDiscount = applyDiscount(books)
    showBooksOnPage(booksWithDiscount)
}

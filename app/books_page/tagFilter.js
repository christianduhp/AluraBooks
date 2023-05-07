const filterButtons = document.querySelectorAll('.btn')
filterButtons.forEach(button => button.addEventListener('click', filterFrontEndBooks))

function filterFrontEndBooks() {
    const elementBnt = document.getElementById(this.id)
    const tag = elementBnt.value
    let filteredBooks = tag == 'disponivel' ? filterByAvailability() : filterByTag(tag)
    showBooksOnPage(filteredBooks)
    if (tag == 'disponivel') {
        const totalValue = availableBookTotalValor(books)
        showElementWithTotalValue(totalValue)
    }
}

function filterByTag(tag) {
    return books.filter(book => book.categoria == tag)
}

function filterByAvailability() {
    return books.filter(book => book.quantidade > 0)
}

function availableBookTotalValor(books) {
    return books.reduce((acc, book) => acc + book.preco, 0).toFixed(2)
    
}

function showElementWithTotalValue(totalValue) {
    elementWithTotalValue.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
    </div>
    `
}



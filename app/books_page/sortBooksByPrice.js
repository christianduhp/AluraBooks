let btnSortByPrice = document.getElementById('btnOrdenarPorPreco')
btnSortByPrice.addEventListener('click', SortBooksByPrice)

function SortBooksByPrice() {
    let sortedbooks = books.sort((a,b) => a.preco - b.preco)
    showBooksOnPage(sortedbooks)
    console.table(sortedbooks)
}
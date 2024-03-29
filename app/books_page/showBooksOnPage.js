const elementToInsertBook = document.getElementById('livros')
const elementWithTotalValue = document.getElementById('valor_total_livros_disponiveis')

function showBooksOnPage(booksList) {
    elementToInsertBook.innerHTML = ""
    elementWithTotalValue.innerHTML = ""
    booksList.forEach(book => {

        let avaible = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        
        elementToInsertBook.innerHTML +=
            `<div class="livro">

                <img class="${avaible}" src="${book.imagem}" alt="${book.alt}" />
                <h2 class="livro__titulo">${book.titulo}</h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>

                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
                <hr class="line-under-book"/>
            </div>`
    })
}

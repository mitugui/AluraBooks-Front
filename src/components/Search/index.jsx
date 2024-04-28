import { Input } from '../Input'
import { useEffect, useState } from 'react'
import { getBooks } from '../../services/books'
import { postFavorite } from '../../services/favorite'
import bookImg from '../../assets/img/book.png'
import { SearchContainer, Searched, Subtitle, Title } from './styles'

function Search() {
    const [books, setBooks] = useState([])
    const [searchedBooks, setSearchedBooks] = useState([])

    useEffect(() => {
        fetchBooks()
    }, [])

    async function fetchBooks() {
        const booksAPI = await getBooks()
        setBooks(booksAPI)
    }

    async function insertFavorite(id) {
        await postFavorite(id)
        alert(`Livro de: ${id} inserido!`)
    }

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input
                type="text"
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const typedText = event.target.value
                    const searchResult = books.filter(book => book.name.includes(typedText))
                    setSearchedBooks(searchResult)
                }}
            />
            {searchedBooks.map(book => (
                <Searched onClick={() => insertFavorite(book.id)}>
                    <img src={bookImg} alt={`Capa do livro ${book.name}`} />
                    <p>{book.name}</p>
                </Searched>
            ))}
        </SearchContainer>
    )
}

export default Search
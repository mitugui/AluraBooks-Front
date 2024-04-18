import styled from 'styled-components'
import { Input } from './Input'
import { useState } from 'react'
import { books } from '../searchData'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Searched = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([])

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input
                type="text"
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const typedText = event.target.value
                    const searchResult = books.filter(livro => livro.name.includes(typedText))
                    setSearchedBooks(searchResult)
                }}
            />
            {searchedBooks.map(book => (
                <Searched>
                    <p>{book.name}</p>
                    <img src={book.src} alt={`Capa do livro ${book.name}`} />
                </Searched>
            ))}
        </SearchContainer>
    )
}

export default Search
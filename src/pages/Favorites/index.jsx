import { useEffect, useState } from 'react'
import { deleteFavorite, getFavorites } from '../../services/favorite'
import bookImg from '../../assets/img/book.png'
import { AppContainer, Result, ResultContainer, Title } from './styles'

function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetchFavorites()
  }, [])

  async function fetchFavorites() {
    const favoritesAPI = await getFavorites()
    setFavorites(favoritesAPI)
  }

  async function removeFavorite(id) {
    await deleteFavorite(id)
    alert(`Livro de: ${id} removido!`)
    await fetchFavorites()
  }

  return (
    <AppContainer>
      <div>
        <Title>Aqui estão seus livros favoritos:</Title>
        <ResultContainer>
          {
            favorites.length !== 0 ? favorites.map(favorite => (
              <Result onClick={() => removeFavorite(favorite.id)}>
                <p>{favorite.name}</p>
                <img src={bookImg} alt={`Capa do livro ${favorite.name}`} />
              </Result>
            )) : null
          }
        </ResultContainer>
      </div>
    </AppContainer>
  )
}

export default Favorites
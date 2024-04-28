import { books } from '../../latestReleasesData'
import { Title } from '../Title'
import RecommendationCard from '../RecommendationCard'
import bookImage from '../../assets/img/book2.png'
import { LatestReleasesContainer, NewBooksContainer } from './styles'

function LatestReleases() {
    return (
        <LatestReleasesContainer>
            <Title
                color="#EB9B00"
                fontSize="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Title>
            <NewBooksContainer>
                {books.map(book => (
                    <img src={book.src} alt={`Capa do livro ${book.name}`} />
                ))}
            </NewBooksContainer>
            <RecommendationCard 
                title="Talvez você se interesse por"
                subtitle="Angular 11"
                description="Construindo uma aplicação com a plataforma Google"
                image={bookImage}
            />
        </LatestReleasesContainer>
    )
}

export default LatestReleases
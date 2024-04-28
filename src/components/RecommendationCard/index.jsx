import { Title } from "../Title"
import { Card, Button, Description, Subtitle, BookImage } from "./styles";

function RecommendationCard({ title, subtitle, description, image }) {
    return (
        <Card>
            <div>
                <Title
                    fontSize="24px" color="#EB9B00" alignment="left"
                >
                    {title}
                </Title>
                <Subtitle>{subtitle}</Subtitle>
                <Description>{description}</Description>
            </div>
            <div>
                <BookImage src={image} />
                <Button>Saiba mais</Button>
            </div>
        </Card>
    )
}

export default RecommendationCard
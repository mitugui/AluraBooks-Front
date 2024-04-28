import logo from '../../assets/img/logo.svg'
import { LogoContainer, LogoImage } from './styles'

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo} 
                alt="Logo Alura Books"
                draggable="false"
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo
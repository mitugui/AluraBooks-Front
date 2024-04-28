import Logo from '../Logo'
import HeaderOptions from '../HeaderOptions'
import HeaderIcons from '../HeaderIcons'
import { Link } from 'react-router-dom'
import { HeaderContainer } from './styles'

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <HeaderOptions />
            <HeaderIcons />
        </HeaderContainer>
    )
}

export default Header
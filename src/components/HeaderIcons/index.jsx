import profile from '../../assets/img/profile.svg'
import shopping_bag from '../../assets/img/shopping-bag.svg'
import { Icons, Icon } from './styles';

const icons = [profile, shopping_bag]

function HeaderIcons() {
    return (
        <Icons>
            {icons.map((icon) => (
                <Icon>
                    <img
                        src={icon}
                        alt="Logo da Alura Books"
                        draggable="false">
                    </img>
                </Icon>
            ))}
        </Icons>
    )
}

export default HeaderIcons
import { Link } from 'react-router-dom'
import { Option, Options } from './styles'

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function HeaderOptions() {
  return (
    <Options>
      {optionsText.map((text) => (
        <Link to={`/${text.toLowerCase()}`}>
          <Option>{text.toUpperCase()}</Option>
        </Link>
      ))}
    </Options>
  )
}

export default HeaderOptions
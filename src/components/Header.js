import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
const location = useLocation()

  return (
    <header className='header'>
      <h1>React Practice: {title} </h1>
      {location.pathname === '/' && <Button 
      color={showAdd ? 'green' : 'red'} 
      text={showAdd ? 'Close Add Task' : 'Add Task' } 
      onClick={onAdd}
      />}
      {location.pathname === '/about' && <Button 
      color={showAdd ? 'blue' : 'pink'} 
      text={';)' } 
      onClick={onAdd}
      />}
    </header>
  )

}

Header.defaultProps = {
  title: 'Game App Practice Default'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color:'deepskyblue',
//   backgroundColor: 'goldenrod'
// }

export default Header

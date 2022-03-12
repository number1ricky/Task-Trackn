import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
//   const onClick = (e) => {
//     console.log('clickH')
// }
  return (
    <header className='header'>
      <h1>React Practice: {title} </h1>
      <Button color={showAdd ? 'green' : 'red'} text={showAdd ? 'Close Add Task' : 'Add Task' } onClick=
      {onAdd}
      />
      {/* <Button color='green' text='Add' />
      <Button color='green' text='Add' /> */}
      {/* <Button color='blue' text='Add (byProp2)' />
      <Button color='red' text='Add (byProp3)' /> */}
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

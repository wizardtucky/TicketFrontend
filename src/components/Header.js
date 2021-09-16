import PropTypes from 'prop-types'
import Button from './Button'
import TicketService from '../services/TicketService';

const Header = ({ title }) => {
    const onClick = ({ id }) => {
        TicketService.createTicket(id);
    }


  return (
    <header className='header'>
      <h1 style={{color: "blanchedalmond", backgroundColor:"black", margin: "screenLeft" }}>{title}</h1>

      <Button color='green' text='ticket button' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'defult Header',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
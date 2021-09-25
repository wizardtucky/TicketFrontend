import Button from '../Button'
import { useStore } from '../../Store/Store';

const TicketListByUser = ({ item }) => {

  const store = useStore()

  const onClick = () => {
    store.actions.deleteTicket(item.id)
    console.log(item)
  }

  return (
    <div className='list-item'>
      <div>{item.id}</div>
      <div style={{color: "blue", margin: "screenLeft" }}>{item.time}</div>
      <div>{item.isActive ? "Waiting" : "Processing"}</div>
      <Button color='silver' text='Delete but' onClick={onClick}/>
    </div>
  )
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default TicketListByUser
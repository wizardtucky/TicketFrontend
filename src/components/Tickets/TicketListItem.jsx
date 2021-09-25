
const leadingZero = (value) => (
  value < 10 ? `0${value}` : `${value}`
)

const formatTime = (time) => {
  const date = new Date(time)
  const formatedDate = `${date.getFullYear()}-${leadingZero(date.getMonth())}-${leadingZero(date.getDay())}`
  const formatedTime = `${date.getHours()}:${leadingZero(date.getMinutes())}:${leadingZero(date.getSeconds())}`

  return `${formatedDate} ${formatedTime}`
}

const TicketListItem = ({ item, children }) => {
  return (
    <div className='ticket-list-item'>
      <div className='ticket-list-item-index'>{item.id}</div>
      <div className='ticket-list-item-name'>{item.user.name}</div>
      <div
        className={`ticket-list-status ${!item.isActive ? 'ticket-list-status-active' : ''}`}
      >
        {item.isActive ? "Waiting" : "Processing"}
      </div>
      <div>{children ? children : formatTime(item.time)}</div>
    </div>
  )
}

export default TicketListItem
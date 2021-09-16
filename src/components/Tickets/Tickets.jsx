import TicketListItem from './TicketListItem';
import { useStore } from '../../Store/Store';

const Ticket = () => {
    const store = useStore()
    
    return (
        <>
            <h1>Live Tickets List</h1>
            {store.state.tickets.map((ticket) => 
                // <button className='btn'>{tickets.name}</button>
                <TicketListItem key={ticket.id} item={ticket} />
            )}
        </>
    )
}

export default Ticket

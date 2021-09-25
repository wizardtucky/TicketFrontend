import TicketListItem from './TicketListItem';
import { useStore } from '../../Store/Store';


const Ticket = () => {

    const store = useStore()

    return (
        <details>
            <summary>Live Tickets List</summary>
            {store.state.tickets.map((ticket) => 
                // <button className='btn'>{tickets.name}</button>
                <TicketListItem key={ticket.id} item={ticket} />
            )}
        </details>
    )
}

export default Ticket

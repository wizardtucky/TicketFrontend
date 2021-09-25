import TicketListItem from './TicketListItem';
import { useStore } from '../../Store/Store';
import TicketListByUser from './TicketListByUser';

const TicketForUser = () => {
    const { state, actions } = useStore()

    const userTicketList = state.tickets.filter(ticket => ticket.user.id === state.loggedInUser?.id)
    return (<>
        <details>
            <summary>Live - User ticket list</summary>
            {userTicketList.map((ticket) => 
                <TicketListItem key={ticket.id} item={ticket}>
                    <button
                        className='btn'
                        onClick={() => actions.deleteTicket(ticket.id)}>
                        Delete
                    </button>
                </TicketListItem>
            )}</details>
        <details>
            <summary>Live - Custumer ticket list</summary>
            {state.tickets.map((ticket) => 
                <TicketListItem key={ticket.id} item={ticket} />
            )}
        </details>
        </>)
}
    

export default TicketForUser

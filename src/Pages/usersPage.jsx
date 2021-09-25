import React from "react";
import TicketForUser from "../components/Tickets/TicketsForUser";
import { Store, useStore } from "../Store/Store";
import { useEffect } from "react";


const UsersPage = () => {

  const store = useStore()

  const doThis = () => {
      //store.actions.ticketInSession()
      // paduoti pirma ticketa eileja einanti pas prisijungta useri
      const userTicketList = store.state.tickets.filter(ticket => ticket.user.id === store.state.loggedInUser?.id)
      const firstTicket = userTicketList[0]
      if(!firstTicket) {
        return
      }
      if(firstTicket.isActive){
        store.actions.ticketInSession(firstTicket)
      } else {
        if(userTicketList.length == 1){
        store.actions.ticketInSession(userTicketList[0])
        }
        store.actions.deleteTicket(firstTicket.id)
      }
  }

  useEffect(() => {
      store.actions.fetchAllTickets()
  }, [store.state.loggedInUser])

    return( 
      <div className="App">
        <button className='btn-Take-In' onClick={doThis}>Take in Client</button>
          <TicketForUser /> 
        </div>
    );
};

export default UsersPage;
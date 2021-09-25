import User from '../components/Users/User';
import Ticket from '../components/Tickets/Tickets'
import { Store, useStore } from "../Store/Store";
import { useEffect } from "react";


const MainPage = () => {

    const store = useStore()

    useEffect(() => {
        store.actions.fetchAllUsers()
        store.actions.fetchAllTickets()
    }, [])

    return(
      <div className="App">
          <User />
          <Ticket /> 
        </div>
    );
};

export default MainPage;
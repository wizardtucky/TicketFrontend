import axios from 'axios'

const TICKET_REST_API_URL = 'http://localhost:8080/tickets/1';

class TicketService {
    
    createTicket(){
        return axios.post(TICKET_REST_API_URL);
    }
}

export default new TicketService();
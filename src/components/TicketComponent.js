import React from 'react';
import TicketService from '../services/TicketService';

class TicketComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        TicketService.createTicket().then((response) => {
            this.setState({ users: response.data})
        })
    }

    render (){
        return (
            <div>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                     <td> {user.email} </td>
                                     <td> {user.name} </td>
                                     <td> {user.surname} </td>
                                </tr>
                            )
                        }

                    </tbody>
            </div>
        )
    }
}

export default TicketComponent
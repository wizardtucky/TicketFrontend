import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        })
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> User List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> User Email</td>
                            <td> User Name</td>
                            <td> User surname</td>

                        </tr>
                    </thead>
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
                </table>

            </div>
        )
    }
}

export default UserComponent
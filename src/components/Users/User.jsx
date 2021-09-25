import Button from '../Button'
import { useStore } from '../../Store/Store';

const User = () => {
    const store = useStore()

    const users = store.state.users.filter((u) => u.userRole !== "ADMIN")
    
    return (
        <>
        <h1>Pick Person To Visit</h1>
        {users.map((user) => 
            // <button className='btn'>{user.name}</button>
            <Button
                key={user.id}
                color='green'
                text={user.name+ " "+ user.surname}
                onClick={() => store.actions.addTicketToUser(user.id)}
            />
        )}
        </>
    )
}

export default User

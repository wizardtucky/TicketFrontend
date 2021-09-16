import Button from '../Button'
import { useStore } from '../../Store/Store';

const User = () => {
    const store = useStore()
    
    return (
        <>
        <h1>Pick Person To Visit</h1>
        {store.state.users.map((user) => 
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

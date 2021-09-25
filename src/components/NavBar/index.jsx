import { NavLink } from 'react-router-dom'
import { useStore } from '../../Store/Store'

const HeaderLink = (props) => (
    <NavLink
        className="navBarLink"
        exact
        to={props.to}
        activeClassName="navBarActiveLink"
        >
            {props.children}
        </NavLink>
)

const Navbar = () => {
    const { state, actions } = useStore()
    const isLoggedIn = state.loggedInUser != null

    const onLoginRegisterHandler = () => {
        if (isLoggedIn) {
            actions.logOutUser()
        } else {
            actions.setIsLoginModalOpen(true)
        }
    }

    const onRegisterNewUserHandler = () => {
        actions.setIsLoginModalOpen(true)
    }

    const showRegisterBtn = isLoggedIn && state.loggedInUser.userRole === "ADMIN"

    return (
        <header className="navBar">
            <div className="navBarLinks">
                <HeaderLink to='/'>Home</HeaderLink>
                {isLoggedIn && <HeaderLink to='/user'>My list</HeaderLink>}
            </div>
            <div>
                <span>{state.loggedInUser?.name}</span>
                <button
                    className="logginButton btn"
                    onClick={onLoginRegisterHandler}
                >
                    {isLoggedIn ? "Log off" : "Login"}
                </button>
                {showRegisterBtn && (
                    <button
                        className="logginButton btn"
                        onClick={onRegisterNewUserHandler}
                    >
                        Register
                    </button>
                )}
            </div>
        </header>
    )
}

export default Navbar

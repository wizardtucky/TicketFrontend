import { useRef } from "react";
import { useStore } from '../../Store/Store';

const LoginPane = () => {
    const store = useStore()

    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
  
    const onLogin = () => {
        const email = emailInputRef.current.value
        const password = passwordInputRef.current.value
        store.actions.loginUser(email, password)
        store.actions.setIsLoginModalOpen(false)
    }

    return (
        <section>
            <h1>Login</h1>
            <div className="login-register-controls-container">
                <input className="text-field" type="text" placeholder="Email" ref={emailInputRef}/>
                <input className="text-field" type="password" placeholder="Password" ref={passwordInputRef}/>
            </div>
            <button className="btn" onClick={onLogin}>Login</button>
        </section>

    )
}

const RegisterPane = () => {
    const store = useStore()

    const rNameInputRef = useRef(null);
    const rSurnameInputRef = useRef(null)
    const rEmailInputRef = useRef(null)
    const rPasswordInputRef = useRef(null)

    const onRegister = () => {
        const name = rNameInputRef.current.value
        const surname = rSurnameInputRef.current.value
        const email = rEmailInputRef.current.value
        const password = rPasswordInputRef.current.value

        store.actions.registerUser(name, surname, email, password)
        store.actions.setIsLoginModalOpen(false)
    }

    return (
        <section>
            <h1>Create new user account</h1>
            <div className="login-register-controls-container">
                <input className="text-field" type="text" placeholder="Name" ref={rNameInputRef}/>
                <input className="text-field" type="text" placeholder="Surname" ref={rSurnameInputRef}/>
                <input className="text-field" type="text" placeholder="Email" ref={rEmailInputRef}/>
                <input className="text-field" type="password" placeholder="Password" ref={rPasswordInputRef}/>
            </div>
            <button className="btn" onClick={onRegister}>Register</button>
        </section>
    )
}

const LoginRegisterModal = () => {
    const store = useStore()

    const showRegisterPane = store.state.loggedInUser?.userRole === "ADMIN"

    return (
        <>
            <div className='modal-backdrop' onClick={() => store.actions.setIsLoginModalOpen(false)} />
            <div className="modal">
                <div className="modal-content">
                    {showRegisterPane ? <RegisterPane /> : <LoginPane />}
                </div>
            </div>
        </>
    )
    
  }

export default LoginRegisterModal
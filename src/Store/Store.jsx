import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"

const BASE_URL = 'http://localhost:8080/'


export const StoreContext = createContext()

export const useStore = () => useContext(StoreContext)

export const Store = (props) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    const [users, setUsers] = useState([])
    const [tickets, setTickets] = useState([])
    const [loggedInUser, setLoggedInUser] = useState(null)

    const loginUser = async (email, password) => {
        await axios.post(`${BASE_URL}session`, {
            email: email,
            password: password,
        }, 
        {withCredentials: true}).then((response) => {
            setLoggedInUser(response.data.user)
            console.log("Isiustas register", loggedInUser)
            fetchAllUsers()
        })
    }

    const logOutUser = async () => {
        const response = await axios.delete(`${BASE_URL}session`, {withCredentials: true})
        setLoggedInUser(null)
    }

    const registerUser = async (nameReg, surnameReg, emailReg, passwordReg) => {
        await axios.post(`${BASE_URL}user/registration/`, {
            name: nameReg,
            surname: surnameReg,
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
            console.log("Isiustas register", nameReg, surnameReg, emailReg, passwordReg)
            fetchAllUsers()
        })
    }
    const ticketInSession = async (ticket) => {
        const response = await axios.put(`${BASE_URL}tickets/${ticket.id}/false`, {withCredentials: true})
        console.log("ticketInSession !!!!!!!!!!!!", ticket)
        fetchAllTickets()
    }

    const fetchLoggedInUser = async () => {
        const response = await axios.get(`${BASE_URL}session`, {withCredentials: true})
        setLoggedInUser(response.data.user)
        console.log("logged in user: ", response.data.user)
    }

    const fetchAllUsers = async () => {
        const response = await axios.get(`${BASE_URL}users/allusers`, 
        {withCredentials: true})
        setUsers(response.data)
    }

    const fetchAllTickets = async () => {
        const response = await axios.get(`${BASE_URL}tickets`)
        setTickets(response.data)
    }

    const addTicketToUser = async (userId) => {
        await axios.post(`${BASE_URL}tickets/${userId}`)
        fetchAllTickets()
    }

    const deleteTicket = async (ticketId) => {
        await axios.delete(`${BASE_URL}tickets/${ticketId}`)
        fetchAllTickets()
    }

    const state = {
        users,
        tickets,
        loggedInUser,
        isLoginModalOpen,
    }

    const actions = {
        fetchLoggedInUser,
        fetchAllUsers,
        addTicketToUser,
        fetchAllTickets,
        deleteTicket,
        loginUser,
        logOutUser,
        registerUser,
        ticketInSession,
        setIsLoginModalOpen,
    }

    useEffect(() => {
        fetchLoggedInUser()
    }, [])

    return (
        <StoreContext.Provider value={{
            state,
            actions,
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}
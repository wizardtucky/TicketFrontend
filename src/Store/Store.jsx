import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"

const BASE_URL = 'http://localhost:8080/'

export const StoreContext = createContext()

export const useStore = () => useContext(StoreContext)

export const Store = (props) => {
    const [users, setUsers] = useState([])
    const [tickets, setTickets] = useState([])

    const fetchAllUsers = async () => {
        const response = await axios.get(`${BASE_URL}users/allusers`)
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
    }

    const actions = {
        fetchAllUsers,
        addTicketToUser,
        fetchAllTickets,
        deleteTicket,
    }

    useEffect(() => {
        fetchAllUsers()
        fetchAllTickets()
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
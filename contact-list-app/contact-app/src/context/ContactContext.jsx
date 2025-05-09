import React from 'react'
import { useContext, useState } from 'react'

const Context = useContext();

const ContactContext = ({ children }) => {
    
    const [Contacts, setContacts] = useState([]);
    const calculatePre = (pre) => {
        setContacts([...pre, ...Contacts])
    }

    return (
        <>

            <Context.Provider value={{ Contacts, calculatePre }}>{children}
            </Context.Provider >
        </>
    )
}

export default { ContactContext, Context }


import React, { useContext, useMemo } from 'react'

import { Context } from '../context/ContactContext'
import ContactCard from './ContactCard'

const ContactList = () => {

    const { contacts } = useContext(Context);//Using Context 

    const performance = useMemo(() => {
        return contacts.length > 0 ? (contacts.map((item, id) => <ContactCard key={id} item={item} />)) : (<p>No Contact Yet.</p>)
    }, [contacts])
    return <div>{performance}</div>
}

export default ContactList
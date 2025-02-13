import React from 'react'
import './index.css';

const ContactCard = ({contact}) => {
  return (
    <div className='outer'>
        <div className='inner'>
            <h2>👮‍♂️{contact.name}</h2>
             <p>📞{contact.phone}</p>
             <p>📩{contact.email}</p>
        </div>
    </div>
  )
}

export default ContactCard
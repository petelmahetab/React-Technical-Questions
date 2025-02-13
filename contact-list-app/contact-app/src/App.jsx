import React from 'react'
// import './index.css'
import Context from './context/ContactContext'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App() {
  return (
    <Context.Provider>
<div>
  <h1 className='text-center'>📓 CONTACT App</h1>
<ContactForm/>
<ContactList/>
</div>
    </Context.Provider>
  )
}

export default App
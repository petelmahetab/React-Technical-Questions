// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './components/getUsers'
import './App.css'
import Card from './components/Card'
import Dynamic from './components/Dynamic'
import Home from './components/Home'
import Test from './components/Test'
import Optimize from './Optimize'
import FromHandling from './components/FromHandling'
import Pagination from './components/Pagination'

function App() {
  return (
    <>
      {/* <Card>
        <h1>Hello...</h1>
        <p>The reusable content.</p>
      </Card> */}

      {/* 2 question .Add Dynamic Content to Children Prop. */}
      {/* <Dynamic title={'Dynamic'} content={'A Children prop would be help reduce Reusability.'}/> */}

      {/*3. How should we show user by its ID from URL. */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user/:id' element={<Users />} />
        </Routes>
      </BrowserRouter> */}


      {/* 4. We need to build an Custom Hooks for toggling the Button one state to another. */}
      {/* <Test/> */}

      {/* 5. Performance Optimization */}
      {/* <Optimize value={'hello'}/> */}


      {/* 6. Form Handling */}
      {/* <FromHandling/> */}

      {/* 7. Pagination applied Dummy API to get 
      Response */}
      <Pagination/>
    </>
  )
}

export default App

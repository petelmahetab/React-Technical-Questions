import React from 'react'
import { useContext ,createContext ,useState} from 'react';

const Themecontext =createContext();

function ContextFunction() {
  const context1 = useContext(Themecontext);
  if (!context1) {
    throw new Error('Use the This function  within Provider Only.')
  }
  return context1;
}

//Create An provider to wrap it up
function ContextProvider({ children }) {
  //State for the toggle 
  const [dark, setDarkMode] = useState(false);

  const toggle = () => setDarkMode((pre) => !pre);

  const theme = {
    dark,
    toggle,
    color: {
      background: dark ? '#2f2f2f' : '#f0f8ff',
      text: dark ? '#e0e0e0' : '#1a1a1a',
    }
  }

  return (
    <Themecontext.Provider value={theme}>
      {children}
    </Themecontext.Provider>
  )
}

const App = () => {
 const {dark,toggle,color}=ContextFunction();
  return (
    <div style={{backgroundColor:color.background,color:color.text, minHeight: '50vh', padding: '20px' }}>
<button onClick={toggle} style={{ padding: '10px', marginBottom: '20px' }}>
  Toggle {dark?'Dark':'light'} Mode.
</button>

<p>Current theme : {dark?'Dark':'light'} </p>
    </div>
  )
}


export default function WrappedApp() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}
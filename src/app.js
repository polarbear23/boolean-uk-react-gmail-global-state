import { useReducer, useState } from 'react'
import { initialState, rootReducer } from './store'
import Emails from './components/Emails'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import './styles/app.css'
import { StoreContext } from './store'

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const [hideRead, setHideRead] = useState(false)

  return (
    <div className="app">
      <Header />

      <StoreContext.Provider value={{ state: state, dispatch: dispatch }}>
        <LeftMenu />
        <Emails />
      </StoreContext.Provider>
    </div>
  )
}

export default App

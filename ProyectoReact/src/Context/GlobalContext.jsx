import  {React, useState, createContext, useContext} from 'react'

const GlobalContext = createContext()
const GlobalContextProvieder = (props) => {
    const [carrito, setCarrito] = useState([])
    return (
    <GlobalContext.Provider>
        {props.children}
    </GlobalContext.Provider>   
    )
}

export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalContextProvieder 

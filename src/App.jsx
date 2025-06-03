import CartWidget from "./components/CartWidget/CartWidget.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import "./App.css"

import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
    return (
        <>

        <BrowserRouter>
            <Routes>
                <Route>
                    
                </Route>
            </Routes>
        </BrowserRouter>





        <NavBar/>
        <ItemListContainer greeting={"Buenas! Bienvenido a mi tienda!"}/>
        </>
    )
}

export default App
import {BrowserRouter, Routes, Route} from "react-router-dom"

import layout from "./components/Layout";
import error404 from './components/error404';
import info from './components/info';
import products from './components/products';
import product from './components/product';
import home from './components/home';
function App() {


    return (
        <>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<home/>}/>
                    <Route path="/products" element={<products/>}/>
                    <Route path="/info" element={<info/>}/>
                    <Route path="/*" element={<error404/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
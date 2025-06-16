import React from 'react'
import { Outlet } from "react-router-dom";

function Layout() {
    return (

        <>
            <nav>
                <ul>
                    <li>
                        <link to={"/"}>home</link>
                    </li>

                    <li>
                        <link to={"/products"}>products</link>
                    </li>
                    <li>
                        <link to={"/info"}>info</link>
                    </li>
                </ul>
            </nav>
            <Outlet/>


        </>
        
    )
}

export default Layout
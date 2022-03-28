import React from "react";
import Nav from "../Nav";

function Header( { handleView } ) {
    
    return (
        <header>
            <Nav handleView={handleView}></Nav>
        </header>
    )
}

export default Header;
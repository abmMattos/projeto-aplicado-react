import React from "react";
import LogoHeader from "./LogoHeader";
import Nav from "./Nav";
import TituloHeader from "./TituloHeader";

function Header() {
    return (
        <header className="header-bg">
            <div class="header">
                <LogoHeader />
                <Nav />
                <TituloHeader /></div>
        </header>
    )
}

export default Header;

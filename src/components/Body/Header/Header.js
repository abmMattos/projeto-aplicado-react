import React from "react";
import Logo from "./LogoHeader";
import Nav from "./Nav";
import TituloHeader from "./TituloHeader";

function Header() {
    return (
        <header className="header-bg">
            <div class="header">
                <Logo />
                <Nav />
                <TituloHeader /></div>
        </header>
    )
}

export default Header;

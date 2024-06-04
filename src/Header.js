import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <header className="app-header">
            <h1 className="app-header__title">Super Sticky Notes</h1>
            <aside className="app-header__controls">
                <button className="add-new">+ New Note</button>
                <input className="search" type="text" placeholder="Type here to seach..."/>
            </aside>
        </header>
        )
    }
}

export default Header;
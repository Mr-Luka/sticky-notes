import React from "react";


const Header = (props) => (
    <header>
        <h1 className="app-header__title">Sticky Notes</h1>
        <aside className="app-header__controls">
            <button 
                className="add-new"
                onClick={props.addNote}
                >+ New Note</button>
            <input 
                className="search" 
                type="text" 
                placeholder="Type here to search"
                value={props.searchText}
                />
        </aside>
    </header>
)

export default Header;

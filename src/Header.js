import React from "react";


const Header = (props) =>{ 
    const searchText = e =>{
        props.onSearch(e.target.value);
    }

    return (
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
                onChange={searchText}
                />
        </aside>
    </header>
)
}

export default Header;

import React from "react";
import "./index.css";

const App = () => {
    <div>
        <header>
            <h1>Super Sticky Notes</h1>
            <aside>
                <button>+ New Note</button>
                <input type="text" placeholder="Type here to seach..."/>
            </aside>
        </header>
        <ul>
            <li>
                <input type="text" placeholder="Title"/>
                <textarea placeholder="Description..."/>
                <span>X</span>
            </li>
            <li>
                <input type="text" placeholder="Title"/>
                <textarea placeholder="Description..."/>
                <span>X</span>
            </li>
            <li>
                <input type="text" placeholder="Title"/>
                <textarea placeholder="Description..."/>
                <span>X</span>
            </li>
        </ul>
    </div>
}

export default App;
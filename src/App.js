import React, {Component} from "react";
import Header from "./Header.js"
import NotesList from "./NotesList.js";


import "./index.css";

class App extends Component {

    render (){

        return (
          <div>
            <Header/>
            <NotesList/>
          </div>  
        );
    }
}


export default App;
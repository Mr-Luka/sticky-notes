import React, {Component} from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

import "./index.css";

class App extends Component {
    state = {
        notes: [
        {
            id: Date.now(),
            title: "",
            description: "",
            doesMatchSearch: true,
        }
     ],
     searchText: "",
    }
    addNote = () => {
        const newNote = {
            id: Date.now(),
            title: "",
            description: "",
            doesMatchSearch: true,
            }
        const newNotes = [newNote, ...this.state.notes];
        this.setState({notes: newNotes});
    }

    onType = (editMeId, updateKey, updatedValue) => {
        const updateNotes = this.state.notes.map((note)=>{
            if (note.id !== editMeId) {
                return note;
            } else {
                if(updateKey === "title") {
                    note.title = updatedValue;
                    return note;
                } else {
                    note.description = updatedValue;
                    return note;
                }
            }
        });
        this.setState({notes: updateNotes})
    }

    render () {
        return(
        <div>
            <Header searchText={this.state.searchText} addNote={this.addNote}/>
            <NotesList notes={this.state.notes}/>
        </div>
        )
    }
};

export default App;
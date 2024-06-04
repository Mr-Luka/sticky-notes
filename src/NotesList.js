import React, {Component} from "react";
import Note from "./Note.js";

class NotesList extends Component {
    render() {
        return (
            <ul>
                <Note/>
                <Note/>
                <Note/>
            </ul>
        )
    }
}

export default NotesList;
import React from "react";
import Note from "./Note.js";

const NotesList = props => {
    const renderNotes = note => <Note note={note} key={note.id}/>
    const noteElements = props.notes.map(renderNotes);
    return (
    <ul className="notes-list">{noteElements}</ul>
    )
}


export default NotesList;
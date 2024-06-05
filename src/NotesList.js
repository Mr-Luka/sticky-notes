import React from "react";
import Note from "./Note.js";

const NotesList = props => {
    const keepSearchMatch = note => note.doesMatchSearch
    const searchMatches = props.notes.filter(keepSearchMatch)
    const renderNotes = note => <Note note={note} key={note.id}/>
    const noteElements = searchMatches.map(renderNotes);
    return (
    <ul className="notes-list">{noteElements}</ul>
    )
}


export default NotesList;
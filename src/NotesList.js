import React from "react";
import Note from "./Note.js";

const NotesList = props => {
    const keepNoteMatch = note => note.doesMatchSearch;
    const filterMatch = props.notes.filter(keepNoteMatch);
    const renderNote = note => <Note note={note} key={note.id} onType={props.onType}/>
    const noteElements = filterMatch.map(renderNote);
    return (
    <ul className="notes-list">{noteElements}</ul>
    )
}


export default NotesList;
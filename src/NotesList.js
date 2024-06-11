import React from "react";
import Note from "./Note.js"


const NotesList = (props) =>{
    const doesMatch = note=> note.doesMatchSearch;
    const filteredElements = props.notes.filter(doesMatch)
    const renderNote = note => <Note note={note} key={note.id}/>
    const noteElements = filteredElements.map(renderNote);
return (
    <ul className="notes-list">
        {noteElements}
    </ul>
)
}
export default NotesList;
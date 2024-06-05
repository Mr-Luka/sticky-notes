import React from "react";

const Note = props => (
    <li className="note">
        <input 
            value={props.note.title}
            className="note__title" 
            type="text" 
            placeholder="Title"/>
        <textarea 
            value={props.note.description}
            className="note__description" 
            placeholder="Description..."/>
        <span className="note__delete">X</span>
    </li>
)


export default Note;
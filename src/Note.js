import React from "react";

const Note = props => {
    const updateTitle = e => {
        const updateValue = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeId, "title", updateValue)
    }

    const updateDescription = e => {
        const updateValue = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeId, "description", updateValue);
    }
    return (
    <li className="note">
        <input 
            value={props.note.title}
            className="note__title" 
            type="text" 
            placeholder="Title"
            onChange={updateTitle}
            />
        <textarea 
            value={props.note.description}
            className="note__description" 
            placeholder="Description..."
            onChange = {updateDescription}
            />
        <span className="note__delete">X</span>
    </li>
)
}

export default Note;
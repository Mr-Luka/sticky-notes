import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

/* This container component manages all of the state 
for this application, delegating rendering logic to 
presentational components. */
class App extends Component {
  state = {
    notes: [],
    searchText: ""
  };
  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    const newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };

  onType = (editMeId, updatedKey, updatedValue) => {
    // editMeId == id of the note that is edited
    // updatedKey == title or description field
    // updatedValue == value of title or description
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: updatedNotes });
  };
  onSearch = text => {
    const searchingText = text.toLowerCase();
    const updatedNotes = this.state.notes.map(note=>{
        if (!searchingText) {
            note.doesMatchSearch = true;
            return note;
        } else {
            const title = note.title.toLowerCase();
            const description = note.description.toLowerCase();
            const titleMatch = title.includes(searchingText);
            const descriptionMatch = description.includes(searchingText);
            const itsMatch = titleMatch || descriptionMatch;
            note.doesMatchSearch = itsMatch;
            return note;
        }
    })
    this.setState({notes: updatedNotes, searchText: searchingText})
  }

  removeNote = (noteId) => {
    const notIdMatch = note => note.id !== noteId;
    const updateNotes = this.state.notes.filter(notIdMatch)
    this.setState({notes: updateNotes})
  }

  componentDidUpdate() {
    const stringifiedNotes = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", stringifiedNotes);
  }

  componentDidMount(){
    const stringifiedNotes = localStorage.getItem("savedNotes");
    if (stringifiedNotes) {
      const savedNotes = JSON.parse(stringifiedNotes);
      this.setState({ notes: savedNotes });
    }
  }
  render() {
    return (
      <div>
        <Header 
            searchText={this.state.searchText} 
            addNote={this.addNote} 
            onSearch= {this.onSearch}
            />
        <NotesList 
            notes={this.state.notes} 
            onType={this.onType}
            removeNote={this.removeNote} />
      </div>
    );
  }
}

export default App;

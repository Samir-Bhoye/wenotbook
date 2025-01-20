import React from "react";
import noteContext from "../context/notes/noteContext";
import  { useContext } from "react";
import NoteItem from "./NoteItem";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row md-3">
      <h1>Your Notes</h1>

      {notes.map((notes) => {
        return <NoteItem note={notes}/>
      })}
    </div>
  );
};

export default Notes;

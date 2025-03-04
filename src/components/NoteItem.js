import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { note, updateNote } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title mx-2"> {note.title}</h5>
            <i
              className="fa-solid fa-delete-left aria  mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Note Deleted Successfully", "success");
              }}
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => updateNote(note)}
            ></i>
            <div />
          </div>
          <p className="card-text mx-2">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;

import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/noteContext";
import AddNotes from "./AddNotes";
import { useNavigate } from "react-router-dom";
const Notes = (props) => {
  let navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("authtoken")) {
  //     getNotes();
  //   } else {
  //     navigate("/login");
  //   }
  //   // eslint-disable-next-line
  // }, []);

  // eslint-disable-next-line
  const { notes, getNotes, editNote } = useContext(noteContext);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const ref = useRef(null);
  const refClose = useRef(null);

  const handleClick = (e) => {
    // console.log("Updating the Note...",note)
    editNote(note.id, note.etitle, note.edescription, note.etag);
    e.preventDefault();
    refClose.current.click();
    props.showAlert("Note Updated", "success");
    // addNote(note.title, note.description, note.tag);
  };
  useEffect(() => {
    const token = localStorage.getItem("authtoken");
    // console.log("Token:", token);
    if (token) {
      getNotes();
    } else {
      navigate("/");
    }
  }, [getNotes, navigate]);
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddNotes showAlert={props.showAlert} />
      {/* <!-- Button trigger modal --> */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="container my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="description"
                    className="form-label"
                    onChange={onChange}
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="tag"
                    className="form-label"
                    onChange={onChange}
                  >
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={note.etitle.length < 5 || note.edescription < 5}
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row md-3">
        <h1>Your Notes</h1>
        <div className="container">
          {notes.length === 0 && "No notes to display "}
        </div>
        {notes.map((note, index) => {
          return (
            <NoteItem
              key={note._id || index}
              updateNote={updateNote}
              note={note}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;

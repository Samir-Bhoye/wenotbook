import NoteContext from "./noteContext";
 import { useState } from "react";
const NoteState = (props) => {

  const notesInitial =[
    {
      "_id": "678d33b06fe95f10f50af551",
      "user": "678cbfea441befd1ce8b7356",
      "title": "11Mythgitle",
      "description": "1hajgfkh",
      "tag": "1pjgers",
      "date": "2025-01-19T17:17:36.825Z",
      "__v": 0
    },
    {
      "_id": "678d33b16fe95f10f50af553",
      "user": "678cbfea441befd1ce8b7356",
      "title": "11Mythgitle",
      "description": "1hajgfkh",
      "tag": "1pjgers",
      "date": "2025-01-19T17:17:37.023Z",
      "__v": 0
    },
    {
      "_id": "678d33b06fe95f10f50af551",
      "user": "678cbfea441befd1ce8b7356",
      "title": "11Mythgitle",
      "description": "1hajgfkh",
      "tag": "1pjgers",
      "date": "2025-01-19T17:17:36.825Z",
      "__v": 0
    },
    {
      "_id": "678d33b06fe95f10f50af551",
      "user": "678cbfea441befd1ce8b7356",
      "title": "11Mythgitle",
      "description": "1hajgfkh",
      "tag": "1pjgers",
      "date": "2025-01-19T17:17:36.825Z",
      "__v": 0
    },
    {
      "_id": "678d33b16fe95f10f50af553",
      "user": "678cbfea441befd1ce8b7356",
      "title": "11Mythgitle",
      "description": "1hajgfkh",
      "tag": "1pjgers",
      "date": "2025-01-19T17:17:37.023Z",
      "__v": 0
    },
    {
      "_id": "678d33b06fe95f10f50af551",
      "user": "678cbfea441befd1ce8b7356",
      "title": "11Mythgitle",
      "description": "1hajgfkh",
      "tag": "1pjgers",
      "date": "2025-01-19T17:17:36.825Z",
      "__v": 0
    },
    {
      "_id": "678d33b06fe95f10f50af551",
      "user": "678cbfea441befd1ce8b7356",
      "title": "11Mythgitle",
      "description": "1hajgfkh",
      "tag": "1pjgers",
      "date": "2025-01-19T17:17:36.825Z",
      "__v": 0
    },
    {
      "_id": "678d33b06fe95f10f50af551",
      "user": "678cbfea441befd1ce8b7356",
      "title": "11Mythgitle",
      "description": "1hajgfkh",
      "tag": "1pjgers",
      "date": "2025-01-19T17:17:36.825Z",
      "__v": 0
    },
    {
      "_id": "678d33b16fe95f10f50af553",
      "user": "678cbfea441befd1ce8b7356",
      "title": "11Mythgitle",
      "description": "1hajgfkh",
      "tag": "1pjgers",
      "date": "2025-01-19T17:17:37.023Z",
      "__v": 0
    },
    {
      "_id": "678d33b06fe95f10f50af551",
      "user": "678cbfea441befd1ce8b7356",
      "title": "11Mythgitle",
      "description": "1hajgfkh",
      "tag": "1pjgers",
      "date": "2025-01-19T17:17:36.825Z",
      "__v": 0
    }
  ]

  const [notes , setNotes]=useState(notesInitial)
  return (
    <NoteContext.Provider value={ {notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

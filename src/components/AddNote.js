import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";

export const AddNote = (props) => {
  const context = useContext(NoteContext);

  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const onChange  = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
   addNote(note.title,note.description,note.tag);
   setNote({
    title: "",
    description: "",
    tag: "",
   })
   props.showAlert("Added Successfully","success");

  };
  return (
    <div className="container my-3">
      <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            minLength={5}
            value={note.title}
            required
            aria-describedby="emailHelp"
            />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Desc
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            minLength={5}
            required
            value={note.description}
            onChange={onChange}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            value={note.tag}
            name="tag"
            onChange={onChange}
          />
        </div>
       
        <button  disabled={note.title.length<5 || note.description.length<5 } type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

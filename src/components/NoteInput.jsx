import React, { useState } from "react";

const NoteInput = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);

    setNote(() => {
      return { title: "", content: "" };
    });
  }

  return (
    <div className="note-input">
      <input
        value={note.title}
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <input
        value={note.content}
        placeholder="Take a note..."
        name="content"
        onChange={handleChange}
        type="textbox"
      />
      {note.title !== "" && note.content !== "" && (
        <button className="add-btn" onClick={submitNote}>
          Add
        </button>
      )}
    </div>
  );
};

export default NoteInput;

import React from "react";

const Note = (props) => {
  function handelDelete() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="delete-btn" onClick={handelDelete}>
        Delete
      </button>
    </div>
  );
};

export default Note;

import React from "react";

function DeleteButton() {
  const handleSubmit = () => {
    alert("delete it my dude");
  };
  return (
    <div>
      {" "}
      <button id="delete" onClick={handleSubmit}>
        Delete
      </button>
    </div>
  );
}

export default DeleteButton;

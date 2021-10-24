import React, { useState, useEffect, useRef } from "react";
import Button from "./UI/Button";

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      {edit ? (
        <div className="d-flex">
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="form-control py-3"
            ref={inputRef}
          />
          <Button
            buttonText="Update todo"
            className="btn btn-info text-white todo__button ms-3"
          />
        </div>
      ) : (
        <div className="d-flex">
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="form-control py-3"
            ref={inputRef}
          />
          <Button
            buttonText="Add todo"
            className="btn btn-primary todo__button ms-3"
          />
        </div>
      )}
    </form>
  );
}

export default TodoForm;

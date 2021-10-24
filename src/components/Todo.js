import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import "./Todo.css";
import TodoForm from "./TodoForm";

function Todo({ todo, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return (
      <div className="my-3">
        <TodoForm edit={edit} onSubmit={submitUpdate} />
      </div>
    );
  }

  return (
    <div
      className={`card card-body my-3 todoItem ${
        todo.isComplete
          ? "bg-secondary text-decoration-line-through"
          : "bg-primary"
      }`}
    >
      <div onClick={() => completeTodo(todo.id)} className="todoText">
        <h3 className="mb-0">{todo.text}</h3>
      </div>
      <div className="icons">
        <RiCloseFill onClick={() => removeTodo(todo.id)} />
        <TiEdit
          className="ms-2"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  );
}

export default Todo;

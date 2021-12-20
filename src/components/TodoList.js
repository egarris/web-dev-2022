import React from "react";
import firebase from "../util/firebase";
import Todo from "./Todo";

export default function TodoList() {
  

  return (
    <div>
      {todoList
        ? todoList.map((todo, index) => <Todo todo={todo} key={index} />)
        : ""}
    </div>
  );
}
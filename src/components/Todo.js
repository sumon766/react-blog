import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../redux/actions/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="todo">
      <h1>This is the ToDo's Page</h1>
    </div>
  );
}

export default Todo;

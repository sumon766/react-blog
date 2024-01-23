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
    <div className="todos">
      <div className="page-title">
        <h1>This is ToDo's Page</h1>
      </div>
      {todos && todos.length > 0 ? todos.map((todo) => (
        <div className="todo" key={todo.id}>
          {todo.title}<br/>
          {todo.completed.toString()}
          <br/><br/>
        </div>
      )) : (
        <div className="loading">
          <h2>Loading Todo's Data...</h2>
        </div>
      )}
    </div>
  );
}

export default Todo;

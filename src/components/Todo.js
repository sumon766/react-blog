import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../redux/actions/todoSlice";
import { fetchUsers } from "../redux/actions/userSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(fetchUsers());
  }, [dispatch]);

  const getUserById = (userId) => {
    return users.find((user) => user.id === userId);
  }

  return (
    <div className="todos">
      <div className="page-title">
        <h1>This is ToDo's Page</h1>
      </div>
      {todos && todos.length > 0 ? todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <p><b>User: </b>{getUserById(todo.userId)?.name}</p>
          <p><b>To Do: </b>{todo.title}</p>
          <p><b>Status: </b>{todo.completed.toString()}</p>
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

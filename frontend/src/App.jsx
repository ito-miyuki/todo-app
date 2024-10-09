import "./styles.css";
import React, { useEffect, useState } from "react";

/*

Component
 -hooks
  -lifecycle  -useEffect (it is a function)
              -events
    -state    -useState (it is a function)

*/

// renderList
// fetch
// visualize
// state

// handleAdd
// form
// update
// POST

// handleEdit
// select
// PUT
// update
// editing state

// handleDelete
// select
// DELETE
// update

// viewCompleted
// GET
// state


// This is a parent Component (or funtion??)
const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [viewCompleted, setViewCompleted] = useState(false);
  const [editingTxt, setEditingText] = useState("");

  useEffect(() => {
  refreshList();
  }, [])

  // fetch = GET basically, "response" and "data" are commonly-used names for this porpose
  // response.json() will convert resopnse to json format
  // .then we want to store the data to the list in a app (then is similar to async await)
  const refreshList = () => {
  fetch("/todos")
  .then((response) => response.json())
  .then((data) => setTodoList(data))
  .catch((error) => console.error("Error fetching todos:", error))
  }

  const handleAdd = () => {
    const newTodo = { title: "New Task text" };
    fetch("/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
    })
    .then(refreshList())
    .catch((error) => console.error("Error adding todo:", error));
  }

  const handleDelete = (id) => {
    fetch(`/todos/${id}`, { method: "DELETE" })
    .then(refreshList)
    .catch((error) => console.error("Error deleting todo:", error));
  }

  // const handleEdit = (todo) => {
  //   setEditingTodo(todo.id);
  //   setEditingText(todo.title);
  // }

  // const handleEditClick = (todo) => {
  //   setEditingText(todo.title);
  // }

  // const handleEditChange = (event) => {
  //   setEditingText(event.target.value);
  // }

  // const handleSave = (id) => {
  //   const updatedTodo = {
  //     title: editingText,
  //   }
  //   fetch(`/todos/${id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(updatedTodo),
  //   })
  //   .then(() => {
  //     setEditingTodo(null);
  //     setEditingText("");
  //     refreshList();
  //   })
  //   .catch((error) => console.error("Error editing todo:", error));
  // }

  const renderItems = () => {

    const newItems = todoList;

    return newItems.map((item) => (
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
        {item.title}
        {/* <span>
          if (editingTodo === item.id) {
            (
              <input
              type="text"
              value={editingText}
              className="form-control1"
            />
            )
          }
            <button className="btn btn-primary rm-2"
            onClick={() => handleSave(item.id)}
            >
              Save
            </button>
          ) : (
            <button className="btn btn-secondary mr-2"
            onClick={() => handleEditClick(item)}>
              Edit
            </button>
          )}
        </span> */}
        <span>
          <button className="btn btn-danger mr-2"
          onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </span>
      </li>
    ))
  }
  return (
    <main className="container">
      <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button className="btn btn-primary"
              onClick={handleAdd}
              >Add new Todo</button>
              <ul className="list-group list-group-flush border-top-0">
                {renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
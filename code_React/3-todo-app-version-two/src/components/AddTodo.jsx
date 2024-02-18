import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState('');
  const [dueDate, setdueDate] = useState('');

  const handleNameChange = (event) => {
    // console.log(event);
    // console.log(event.target.value);
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
     // console.log(event);
     setdueDate(event.target.value);
  };
 

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate)
    setdueDate("");
    setTodoName("");
  }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            onChange={handleNameChange}
            value={todoName}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            onClick={handleAddButtonClicked}
            type="button"
            className="btn btn-success kg-button"
          >
            {/* Add */}
            <BiMessageAdd/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

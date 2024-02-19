import { useContext, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleNameChange = (event) => {
    // console.log(event);
    // console.log(event.target.value);
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    // console.log(event);
    setdueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    //  console.log(event);
    event.preventDefault();

    addNewItem(todoName, dueDate);
    setdueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClicked} className="row kg-row">
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
            // type="button"

            // onClick={handleAddButtonClicked}
            className="btn btn-success kg-button"
          >
            {/* Add */}
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

// enhanced code using ->     useRef

// import { useRef } from "react";
// import { BiMessageAdd } from "react-icons/bi";

// function AddTodo({ onNewItem }) {
//   const todoNameElememt = useRef();
//   const dueDateElememt = useRef();

//   const handleAddButtonClicked = (event) => {
//     //  console.log(event);
//     event.preventDefault();
//     const todoName = todoNameElememt.current.value;
//     const dueDate = dueDateElememt.current.value;
//     todoNameElememt.current.value = "";
//     dueDateElememt.current.value = "";
//     console.log(`${todoName} due on: ${dueDate}`);

//     onNewItem(todoName, dueDate);
//   };

//   return (
//     <div className="container text-center">
//       <form onSubmit={handleAddButtonClicked} className="row kg-row">
//         <div className="col-6">
//           <input
//             type="text"
//             ref={todoNameElememt}
//             placeholder="Enter Todo Here"
//           />
//         </div>
//         <div className="col-4">
//           <input type="date" ref={dueDateElememt} />
//         </div>
//         <div className="col-2">
//           <button className="btn btn-success kg-button">
//             <BiMessageAdd />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddTodo;

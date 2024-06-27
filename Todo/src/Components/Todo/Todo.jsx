import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../../actions/index";
import { bindActionCreators } from "redux";
import { useState } from "react";

function Todo({ title, id }) {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ removeTodo }, dispatch);
  const [isEditing, SetIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(title);
  function updateTodo() {
    if (isEditing) {
      actions.editTodo({ id: id, title: editedText });
      SetIsEditing(false);
    } else {
      SetIsEditing(true);
    }
  }

  return (
    <div>
      {isEditing ? (
        <input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        editedText
      )}
      <button onClick={() => actions.removeTodo(id)}>Delete</button>
      <button onClick={updateTodo}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
}

export default Todo;

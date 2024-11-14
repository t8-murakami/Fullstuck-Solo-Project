export default function TodoItem({ id, description, path, deletePath }) {
    return (
      <li>
        <div>
         <strong>{description}</strong> - {path}
        </div>
        <button
          onClick={() => deleteTodo(id)}
          className="btn btn-danger"
        >
        削除
        </button>
      </li>
    )
  }
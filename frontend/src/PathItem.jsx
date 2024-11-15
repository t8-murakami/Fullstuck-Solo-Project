export default function PathItem({ id, description, path, created_at, deletePath }) {

  const formattedCreatedAt = new Date(created_at).toLocaleString() ;

    return (
      <li>
        <div>
         <strong>{description}</strong> --- {path}
         <br />
         <small className="timestamp">作成日時: {formattedCreatedAt}</small>
        </div>
        <button
          onClick={() => deletePath(id)}
          className="btn btn-danger"
        >
        削除
        </button>
      </li>
    )
  }
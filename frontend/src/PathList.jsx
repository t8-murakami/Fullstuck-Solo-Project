import PathItem from './PathItem';

export default function PathList({ paths, deletePath }) {
  return (
    <div className="path-list-container">
      {/* ヘッダー */}
      {paths.length > 0 && (
        <div className="path-header">
          <h3>説明 (Description)</h3>
          <h3>---</h3>
          <h3>パス (Path)</h3>
        </div>
      )}

      {/* パスが存在しない場合のメッセージ */}
      {!paths.length && <p>No Paths</p>}

      {/* パスのリスト */}
      <ul className="list">
        {paths.length > 0 &&
          paths.map((path) => (
            <PathItem
            key={path.id || crypto.randomUUID()}
            id={path.id}
            description={path.description}
            path={path.path}
            created_at={path.created_at}
            deletePath={deletePath}
            />
          ))}
      </ul>
    </div>
  );
}

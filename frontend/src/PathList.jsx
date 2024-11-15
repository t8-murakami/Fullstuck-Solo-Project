import PathItem from './PathItem';

export default function PathList({ paths, deletePath }) {
  return (
    <ul className="list">
      {/* パスが存在しない場合のメッセージ */}
      {!paths.length && 'No Paths'}
      {paths.length > 0 &&
        paths.map((path) => (
          <PathItem
            key={path.id|| crypto.randomUUID()}
            {...path} // description と path を展開
            deletePath={deletePath}
          />
        ))}
    </ul>
  );
}

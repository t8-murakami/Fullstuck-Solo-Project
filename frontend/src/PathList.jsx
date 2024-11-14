import PathItem from './PathItem'

export default function PathList({ paths, deletePath }) {
  return (
    <ul className="list">
      {paths.length
        ? paths.map((path) => {
            return (
              <PathItem
                key={path.id}
                {...path} // description と path を展開
                deletePath={deletePath}
              />
            )
          })
        : 'No Paths'}
    </ul>
  )
}
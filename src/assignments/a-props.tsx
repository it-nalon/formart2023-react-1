/**
 * In questo componente che renderizza una lista, trova il modo di cambiare il colore di sfondo del componente `ListItem`
 * in base al suo indice (pari o dispari) passando una prop di tipo `boolean` chiamata: `isEven` da `Assignment` a `ListItem`.
 */

export function Assignment() {
  const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'z']

  return (
    <ul>
      {/** la callback utilizzata all'interno di `map` riceve come secondo parametro l'indice dell'elemento */}
      {list.map((item, index) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </ul>
  )
}

export type ListItemProps = {
  children: React.ReactNode
}

export function ListItem(props: ListItemProps) {
  return (
    <li
      style={{
        listStyleType: 'none',
        backgroundColor: '#eee',
        margin: 0,
        padding: '10px 20px',
        border: '1px solid #ddd',
        width: '250px',
      }}
    >
      {props.children}
    </li>
  )
}

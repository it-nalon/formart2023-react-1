/**
 * In questo componente che renderizza un quadrato, trova il modo di cambiare il colore di sfondo del componente `Square`
 * in base al valore della selezione di un `select` passando una prop da `Assignment` a `Square`.
 */
import { useState } from 'react'

export function Assignment() {
  // utilizza lo state per tenere traccia del valore della select

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // aggiorna lo state con il valore della select
    console.log(event.target.value) // <-- questo è il valore della select
  }

  return (
    <div>
      <select value={'' /* <-- sostituisci qui con la variabile state */} onChange={handleChange}>
        <option value="">Seleziona un colore</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>

      <Square />
    </div>
  )
}

export type SquareProps = {}

export function Square(props: SquareProps) {
  return <div style={{ width: 200, height: 200, border: '1px solid', borderRadius: '10px', content: "''" }} />
}

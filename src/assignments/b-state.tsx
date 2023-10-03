/**
 * In questo componente che renderizza un quadrato, trova il modo di cambiare il colore di sfondo del componente `Square`
 * in modo alternato (ad esempio, da rosso a blu e viceversa) al click di un bottone passando una prop da `Assignment` a `Square`.
 */

import { useState } from 'react'

export function Assignment() {
  // utilizza lo state per tenere traccia del colore attuale
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <button
        style={{ marginBottom: 20, border: '1px solid', borderRadius: '10px', padding: '0 10px', height: '30px' }}
      >
        Change color
      </button>

      <Square />
    </div>
  )
}

export type SquareProps = {}

export function Square(props: SquareProps) {
  return <div style={{ width: 200, height: 200, border: '1px solid', borderRadius: '10px', content: "''" }} />
}

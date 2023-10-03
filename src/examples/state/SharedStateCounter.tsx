import { useState } from 'react'

export function SharedStateCounter() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Button label="-" onClick={() => setCount(count - 1)} />
      <Value count={count} />
      <Button label="+" onClick={() => setCount(count + 1)} />
    </div>
  )
}

/**
 * Show the current value
 */
type ValueProps = {
  count: number
}

function Value({ count }: ValueProps) {
  return <div style={{ color: 'blue', margin: '0 10px' }}>{count}</div>
}

/**
 * A button that increments or decrements the value
 */
type ButtonProps = {
  onClick?: () => void
  label?: string
}

function Button({ onClick, label }: ButtonProps) {
  return (
    <button
      style={{
        border: '1px solid blue',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export type MyButtonProps = {
  variant?: 'primary' | 'secondary'
}

export function MyButton({ variant = 'primary' }: MyButtonProps) {
  const backgroundColor = variant === 'primary' ? 'blue' : 'gray'

  const style = {
    backgroundColor,
    color: 'white',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: 'none',
    minWidth: '150px',
  }

  return <button style={style}>{variant}</button>
}

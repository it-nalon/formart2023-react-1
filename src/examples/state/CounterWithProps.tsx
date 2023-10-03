import { useState } from 'react'
import { Box, Button, HStack } from '@chakra-ui/react'

type Props = {
  initialCount?: number
  max?: number
  min?: number
}

export function CounterWithProps({ initialCount = 0, max = 100, min = 0 }: Props) {
  const [count, setCount] = useState(initialCount ?? 0)

  const handleIncrement = () => {
    if (max && count >= max) {
      return
    }

    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (min && count <= min) {
      return
    }

    setCount(count - 1)
  }

  return (
    <HStack>
      <Button onClick={handleDecrement}>-</Button>
      <Box>{count}</Box>
      <Button onClick={handleIncrement}>+</Button>
    </HStack>
  )
}

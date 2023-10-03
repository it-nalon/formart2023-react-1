import { useState } from 'react'
import { Box, Button, HStack } from '@chakra-ui/react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <HStack>
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <Box>{count}</Box>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </HStack>
  )
}

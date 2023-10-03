import { Divider, Heading, VStack } from '@chakra-ui/react'
import { MyButton } from './examples/props/MyButton'
import { Counter } from './examples/state/Counter'
import { SharedStateCounter } from './examples/state/SharedStateCounter'
import { CounterWithProps } from './examples/state/CounterWithProps'
import { Assignment as PropsAssignment } from './assignments/a-props'
import { Assignment as StateAssignmentA } from './assignments/b-state'
import { Assignment as StateAssignmentB } from './assignments/c-state'

function App() {
  return (
    <VStack spacing={10} pb={20}>
      <Heading>React Basics - Props and State</Heading>

      <VStack spacing={3}>
        <Heading>Props</Heading>
        <MyButton variant="primary" />
        <MyButton variant="secondary" />
      </VStack>

      <VStack spacing={3}>
        <Heading>State</Heading>

        <Heading size="sm">Simple State</Heading>
        <Counter />

        <Heading size="sm">State and Props</Heading>
        <CounterWithProps initialCount={10} min={-5} max={15} />

        <Heading size="sm">Share State with Props Drilling</Heading>
        <SharedStateCounter />
      </VStack>

      <VStack spacing={3}>
        <Heading>Assignments</Heading>
        <Heading size="sm">Props</Heading>
        <PropsAssignment />
        <Divider />
        <Heading size="sm">State 1</Heading>
        <StateAssignmentA />
        <Divider />
        <Heading size="sm">State 2</Heading>
        <StateAssignmentB />
      </VStack>
    </VStack>
  )
}

export default App

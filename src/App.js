import SearchBar from "./components/SearhBar"
import Toggle from "./components/Toggle"
import { Container, Flex, Spacer, Heading } from "@chakra-ui/react"

function App() {
  return (
    <>
      <Container maxW={["container.sm"]}>
        <Flex>
          <Heading as="h1" variant="page-title">
            devfinder
          </Heading>
          <Spacer />
          <Toggle />
        </Flex>
        <SearchBar />
        <h2>Lorem Ipsum Dolor sit amet</h2>
        <h3>@octocat</h3>
        <h4>repository</h4>
      </Container>
    </>
  )
}

export default App

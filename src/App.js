import SearchBar from "./components/SearhBar"
import Toggle from "./components/Toggle"
import { Container, Flex, Spacer, Heading, Box } from "@chakra-ui/react"

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

        <Box
          p="48px"
          mt="24px"
          bg="#fff"
          borderRadius="15px"
          boxShadow="sm"
          variant="search-result"
        >
          <h2>Lorem Ipsum Dolor sit amet</h2>
          <h3>@octocat</h3>
          <h4>repository</h4>
        </Box>
      </Container>
    </>
  )
}

export default App

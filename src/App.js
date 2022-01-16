import { useState, useEffect } from "react"
import Toggle from "./components/Toggle"
import {
  Box,
  Container,
  Flex,
  Spacer,
  Heading,
  useBreakpointValue,
  useStyleConfig,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Text,
  Button,
} from "@chakra-ui/react"
import { ReactComponent as SearchIcon } from "./assets/icon-search.svg"
import axios from "axios"
import LayoutSm from "./layout/LayoutSm"
import LayoutMd from "./layout/LayoutMd"

function App() {
  const breakPointSize = useBreakpointValue(["sm", "md"])
  const [data, setData] = useState({})
  const [searchInput, setSearchInput] = useState({})
  const [noResult, setNoResult] = useState(false)

  const Resultstyle = useStyleConfig("ResultBox")
  const fetchData = async (username) => {
    return await axios.get(`https://api.github.com/users/${username}`)
  }
  const handleSearch = () => {
    fetchData(searchInput)
      .then(({ data }) => setData(data))
      .catch((e) => setNoResult(true))
  }
  useEffect(() => {
    fetchData("octocat")
      .then(({ data }) => setData(data))
      .catch((e) => console.log(e))
  }, [])
  console.log(breakPointSize)
  return (
    <Flex alignItems={"center"} height={"100vh"} m={["24px"]}>
      <Container
        minW={{ sm: "327px", md: "573px", lg: "730px" }}
        p={"0px"}
        m={"auto"}
      >
        <Box mb="36px">
          <Flex>
            <Heading as="h1" variant="page-title">
              devfinder
            </Heading>
            <Spacer />
            <Toggle />
          </Flex>
        </Box>

        <InputGroup>
          <InputLeftElement
            w="auto"
            h="100%"
            pl={["16px", "32px"]}
            pointerEvents="none"
            children={<SearchIcon />}
          />
          <Input
            pr={noResult === true ? "290px" : "130px"}
            pl={["45px", "80px"]}
            size={breakPointSize}
            placeholder="Search Github username..."
            onChange={(e) => {
              setSearchInput(e.target.value)
            }}
          />
          <InputRightElement
            w="auto"
            h="100%"
            pr="10px"
            children={
              <Box display="flex" alignItems="center">
                <Text
                  mr="4"
                  color="red"
                  display={noResult === true ? "block" : "none"}
                >
                  No User Found
                </Text>
                <Button onClick={() => handleSearch()} size={breakPointSize}>
                  Search
                </Button>
              </Box>
            }
          ></InputRightElement>
        </InputGroup>
        <Box __css={Resultstyle} py={["32px", "40px"]} px={["24px", "40px"]}>
          {breakPointSize === "sm" ? (
            <LayoutSm data={data} />
          ) : (
            <LayoutMd data={data} />
          )}
        </Box>
      </Container>
    </Flex>
  )
}

export default App

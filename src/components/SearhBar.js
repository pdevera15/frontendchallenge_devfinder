import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Text,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react"
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg"

function SearhBar() {
  const breakPointSize = useBreakpointValue(["sm", "md"])
  console.log(breakPointSize)
  return (
    <InputGroup>
      <InputLeftElement
        w="auto"
        h="100%"
        pl="32px"
        pointerEvents="none"
        children={<SearchIcon />}
      />
      <Input
        pl="80px"
        size={breakPointSize}
        placeholder="Search Github username..."
      />
      <InputRightElement
        w="auto"
        h="100%"
        pr="10px"
        children={
          <Box display="flex" alignItems="center">
            <Text mr="4" color="red" display="none">
              No User Found
            </Text>
            <Button size={breakPointSize}>Search</Button>
          </Box>
        }
      ></InputRightElement>
    </InputGroup>
  )
}

export default SearhBar

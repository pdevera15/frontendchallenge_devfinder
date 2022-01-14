import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Text,
  Box,
} from "@chakra-ui/react"
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg"

function SearhBar() {
  return (
    <InputGroup>
      <InputLeftElement
        w="auto"
        h="100%"
        pl="32px"
        pointerEvents="none"
        children={<SearchIcon />}
      />
      <Input h="69px" pl="80px" placeholder="Search Github username..." />
      <InputRightElement
        w="auto"
        h="100%"
        pr="10px"
        children={
          <Box display="flex" alignItems="center">
            <Text mr="4" color="red" display="none">
              No User Found
            </Text>
            <Button h="50px" variant={"search-button"}>
              Search
            </Button>
          </Box>
        }
      ></InputRightElement>
    </InputGroup>
  )
}

export default SearhBar

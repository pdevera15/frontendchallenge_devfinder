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
        pr="inherit"
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
            <Text mr="4" color="red">
              No User Found
            </Text>
            <Button h="50px">Search</Button>
          </Box>
        }
      ></InputRightElement>
    </InputGroup>
  )
}

export default SearhBar

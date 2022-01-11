import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react"
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg"

function SearhBar() {
  return (
    <InputGroup h="auto">
      <InputLeftElement
        w="auto"
        h="auto"
        ml="23px"
        my="23px"
        pointerEvents="none"
        children={<SearchIcon />}
      />
      <Input h={69} pl="80px" />
      <InputRightElement
        w="auto"
        h="auto"
        pr="10px"
        py="9.5px"
        children={
          <Button h="50px" w="106px">
            Search
          </Button>
        }
      ></InputRightElement>
    </InputGroup>
  )
}

export default SearhBar

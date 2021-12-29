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
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input />
      <InputRightElement>
        <Button>Search</Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default SearhBar

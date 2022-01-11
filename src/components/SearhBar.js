import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Flex,
} from "@chakra-ui/react"
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg"

function SearhBar() {
  return (
    <InputGroup
      h="auto"
      backgroundColor="#fff"
      boxShadow="md"
      borderRadius="15px"
    >
      <Flex>
        <InputLeftElement
          w="auto"
          h="auto"
          ml="23px"
          alignItems={"center"}
          pointerEvents="none"
          children={<SearchIcon />}
        />
      </Flex>
      <Input
        h={69}
        pl={"80px"}
        border="none"
        borderRadius="15px"
        placeholder="Search Github username..."
      />
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

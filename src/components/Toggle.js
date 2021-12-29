import { Box, Spacer, Center } from "@chakra-ui/react"
import { ReactComponent as Moon } from "../assets/icon-moon.svg"
import { ReactComponent as Sun } from "../assets/icon-sun.svg"
import { useColorMode, useStyleConfig } from "@chakra-ui/react"

function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  const toggleStyles = useStyleConfig("Toggle")

  return (
    <Center>
      <Box onClick={toggleColorMode} __css={toggleStyles}>
        {colorMode === "light" ? "LIGHT" : "DARK"}
        <Spacer />
        {colorMode === "light" ? <Sun /> : <Moon />}
      </Box>
    </Center>
  )
}

export default Toggle

import React from "react"
import { Box, Flex, Spacer, useStyleConfig } from "@chakra-ui/react"
const StatusBox = ({ data }) => {
  const Statusstyle = useStyleConfig("StatusBox")
  return (
    <Box __css={Statusstyle}>
      <Flex>
        <Box>
          <h4>Repos</h4>
          <h2>{data.public_repos}</h2>
        </Box>
        <Spacer />
        <Box>
          <h4>Followers</h4>
          <h2>{data.followers}</h2>
        </Box>
        <Spacer />
        <Box>
          <h4>Following</h4>
          <h2>{data.following}</h2>
        </Box>
      </Flex>
    </Box>
  )
}

export default StatusBox

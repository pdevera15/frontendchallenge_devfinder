import { Box, Flex } from "@chakra-ui/react"
import Profile from "../components/Profile"
import ProfileImage from "../components/ProfileImage"
import StatusBox from "../components/StatusBox"
import Socials from "../components/Socials"
import Info from "../components/Info"

function LayoutMd({ data }) {
  return (
    <Flex gap="37px">
      <Box minW={"117px"}>
        <ProfileImage data={data} />
      </Box>
      <Box>
        <Info data={data} />
        <Box mt="20px">
          <Profile data={data} />
        </Box>
        <Box mt="32px">
          <StatusBox data={data} />
          <Socials data={data} />
        </Box>
      </Box>
    </Flex>
  )
}

export default LayoutMd

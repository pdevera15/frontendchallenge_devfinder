import { Box } from "@chakra-ui/react"
import Profile from "../components/Profile"
import ProfileImage from "../components/ProfileImage"
import StatusBox from "../components/StatusBox"
import Socials from "../components/Socials"
import Info from "../components/Info"

function LayoutSm({ data }) {
  return (
    <>
      <Box display={"flex"} gap={"19px"} mb="33px">
        <Box>
          <ProfileImage data={data} />
        </Box>
        <Box flexGrow={"1"}>
          <Info data={data} />
        </Box>
      </Box>
      <Box mb="23px">
        <Profile data={data} />
      </Box>
      <StatusBox data={data} />
      <Socials data={data} />
    </>
  )
}

export default LayoutSm

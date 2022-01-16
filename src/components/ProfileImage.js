import { Image } from "@chakra-ui/react"

function ProfileImage({ data }) {
  return (
    <Image
      src={data.avatar_url}
      alt="Profile"
      h={["70px", "117px"]}
      w={["70px", "117px"]}
      borderRadius={"full"}
    />
  )
}

export default ProfileImage

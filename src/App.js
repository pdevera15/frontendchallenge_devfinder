import { useState, useEffect } from "react"
import SearchBar from "./components/SearhBar"
import Toggle from "./components/Toggle"
import StatusBox from "./components/StatusBox"
import {
  Container,
  Flex,
  Spacer,
  Heading,
  Box,
  useStyleConfig,
  Image,
  Link,
} from "@chakra-ui/react"
import axios from "axios"
import Socials from "./components/Socials"
function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      return await axios.get("https://api.github.com/users/octocat")
    }
    fetchData()
      .then(({ data }) => setData(data))
      .catch((e) => console.log(e))
  }, [])

  const Resultstyle = useStyleConfig("ResultBox")

  return (
    <>
      <Container maxW={["container.sm"]}>
        <Flex>
          <Heading as="h1" variant="page-title">
            devfinder
          </Heading>
          <Spacer />
          <Toggle />
        </Flex>
        <SearchBar />

        <Box __css={Resultstyle}>
          <Flex gap={"37px"}>
            <Box>
              <Image
                src={data.avatar_url}
                alt="Profile"
                h={"117px"}
                w={"117px"}
                borderRadius={"full"}
              />
            </Box>
            <Box flexGrow={"1"}>
              {console.log(data)}
              <h2>{data.name}</h2>
              <h3>
                <Link href={data.html_url}>{`@${data.login}`} </Link>
              </h3>
              <h4>
                {data.bio === null ? (
                  <>This profile has no bio</>
                ) : (
                  <>{data.bio}</>
                )}
              </h4>
              <StatusBox data={data} />
              <Socials data={data} />
            </Box>
          </Flex>
        </Box>
      </Container>
    </>
  )
}

export default App

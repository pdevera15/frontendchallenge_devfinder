import React from "react"
import { Box, Text, Grid, useStyleConfig } from "@chakra-ui/react"
import { ReactComponent as Location } from "../assets/icon-location.svg"
import { ReactComponent as Website } from "../assets/icon-website.svg"
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg"
import { ReactComponent as Company } from "../assets/icon-company.svg"

const Socials = ({ data }) => {
  const Socialstyle = useStyleConfig("Socials")

  const nullchecker = (param) => {
    return param === null ? "Not Available" : param
  }
  return (
    <Box mt={"37px"}>
      <Grid templateColumns={["1fr", "1fr 1fr"]} rowGap={["16px", "19px"]}>
        <Box __css={Socialstyle}>
          <Location />
          <Text>{nullchecker(data.location)}</Text>
        </Box>
        <Box __css={Socialstyle}>
          <Twitter />
          <Text>{nullchecker(data.twitter_username)}</Text>
        </Box>
        <Box __css={Socialstyle}>
          <Website />
          <Text>{nullchecker(data.blog)}</Text>
        </Box>
        <Box __css={Socialstyle}>
          <Company />
          <Text>{nullchecker(data.company)}</Text>
        </Box>
      </Grid>
    </Box>
  )
}

export default Socials

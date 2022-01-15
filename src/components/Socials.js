import React from "react"
import { Box, Flex, Text, Grid } from "@chakra-ui/react"
import { ReactComponent as Location } from "../assets/icon-location.svg"
import { ReactComponent as Website } from "../assets/icon-website.svg"
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg"
import { ReactComponent as Company } from "../assets/icon-company.svg"

const Socials = ({ data }) => {
  const nullchecker = (param) => {
    return param === null ? "Not Available" : param
  }
  return (
    <Box mt={"37px"}>
      <Grid templateColumns={"1fr 1fr"} rowGap={"19px"}>
        <Box>
          <Location m={"0px"} />
          <Text>{nullchecker(data.location)}</Text>
        </Box>
        <Box>
          <Twitter />
          <Text>{nullchecker(data.twitter_username)}</Text>
        </Box>
        <Box>
          <Website />
          <Text>{nullchecker(data.blog)}</Text>
        </Box>
        <Box>
          <Company />
          <Text>{nullchecker(data.company)}</Text>
        </Box>
      </Grid>
    </Box>
  )
}

export default Socials

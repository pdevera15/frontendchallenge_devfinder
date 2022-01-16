import React from "react"
import { Box, Text, Grid, useStyleConfig, Link } from "@chakra-ui/react"
import { ReactComponent as Location } from "../assets/icon-location.svg"
import { ReactComponent as Website } from "../assets/icon-website.svg"
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg"
import { ReactComponent as Company } from "../assets/icon-company.svg"

function Basis(props) {
  const { variant, ...children } = props

  const Socialstyle = useStyleConfig("Socials", { variant })

  return <Box __css={Socialstyle} {...children}></Box>
}

const Socials = ({ data }) => {
  console.log(data)
  const nullchecker = (param) => {
    return param === null ? "Not Available" : param
  }
  return (
    <Box mt={"37px"}>
      <Grid
        templateColumns={["1fr", "1fr 1fr"]}
        rowGap={["16px", "19px"]}
        columnGap={"62px"}
      >
        <Basis
          variant={
            nullchecker(data.location) === "Not Available" ? "notAvailable" : ""
          }
        >
          <Location />
          <Text>{nullchecker(data.location)}</Text>
        </Basis>
        <Basis
          variant={
            nullchecker(data.twitter_username) === "Not Available"
              ? "notAvailable"
              : ""
          }
        >
          <Twitter />
          <Text>
            {nullchecker(data.twitter_username) !== "Not Available" ? (
              <Link
                target="#"
                href={`http://twitter.com/${data.twitter_username}`}
              >
                {nullchecker(data.twitter_username)}
              </Link>
            ) : (
              nullchecker(data.twitter_username)
            )}
          </Text>
        </Basis>
        <Basis
          variant={
            nullchecker(data.blog) === "Not Available" ? "notAvailable" : ""
          }
        >
          <Website />
          <Text>
            {nullchecker(data.blog) !== "Not Available" ? (
              <Link target="#" href={`${data.blog}`}>
                {nullchecker(data.blog)}
              </Link>
            ) : (
              nullchecker(data.blog)
            )}
          </Text>
        </Basis>
        <Basis
          variant={
            nullchecker(data.company) === "Not Available" ? "notAvailable" : ""
          }
        >
          <Company />
          <Text>
            {nullchecker(data.company) !== "Not Available" ? (
              <Link
                target="#"
                href={"http://github.com/" + data.company?.slice(1)}
              >
                {nullchecker(data.company)}
              </Link>
            ) : (
              nullchecker(data.company)
            )}
          </Text>
        </Basis>
      </Grid>
    </Box>
  )
}

export default Socials

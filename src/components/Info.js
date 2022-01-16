import React from "react"
import { Link, Flex, Box } from "@chakra-ui/react"
import dateFormat from "dateformat"
function Info({ data }) {
  return (
    <Flex
      flexDirection={["column", "row"]}
      justifyContent={{ md: "space-between" }}
    >
      <Box>
        <h2>{data.name}</h2>
        <h3>
          <Link target="#" href={data.html_url}>
            {`@${data.login}`}{" "}
          </Link>
        </h3>
      </Box>
      <h4>Joined {dateFormat(data.created_at, "dd mmm yyyy")}</h4>
    </Flex>
  )
}

export default Info

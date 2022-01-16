import React from "react"
function Profile({ data }) {
  return (
    <h4>
      {data.bio === null ? <>This profile has no bio</> : <>{data.bio}</>}
    </h4>
  )
}

export default Profile

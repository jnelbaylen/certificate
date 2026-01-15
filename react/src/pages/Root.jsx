import { Fragment } from "react"

import { Navbar } from "@components/Navbar"
import { CardContainer } from "@components/container/CardContainer"

export function Root() {
  return (
   <Fragment>
      <Navbar />
      <CardContainer />
   </Fragment>
  )
}

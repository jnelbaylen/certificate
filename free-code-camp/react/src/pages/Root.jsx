import { Fragment } from "react"

import { Navbar } from "@components/Navbar"
import { CardContainer } from "@components/container/CardContainer"
import { FruitsSearch } from "@components/FruitsSearch"

export function Root() {
  return (
   <Fragment>
      <Navbar />
      <CardContainer />
      <FruitsSearch />
   </Fragment>
  )
}

import { Fragment } from "react";

import { Button } from "@components/Button/Button";
import { Avatar } from "@components/Profile/Avatar";
import { CounterForm } from "@components/Hooks/CounterForm";
import { GreetingForm } from "@components/Hooks/GreetingForm";

import { AboutPage } from "./About/AboutPage";
import { ShoppingList } from "./Shop/ShoppingList";

function Greeting({ name }) {
  return <h1>Hello, { name }</h1>
}

export function Root() {
  return (
    <Fragment>
      <h1>Welcome to app</h1>
      <Button />
      <AboutPage />
      <Greeting name="World" />
      <Avatar />
      <ShoppingList />
      <CounterForm />
      <GreetingForm />
    </Fragment>
  )
}

import React from "react";
import { useGreetingAction } from "@hooks/actionstate/useGreetingAction";

export default function GreetingForm() {
  const { message, formAction, isPending } = useGreetingAction();

  return (
    <div>
      <h2>Greeting Form</h2>
      <form action={formAction}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          style={{ marginRight: "1rem" }}
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Greet"}
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}

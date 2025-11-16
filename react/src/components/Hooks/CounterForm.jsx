import React from "react";
import { useIncrementAction } from "@hooks/actionstate/useIncrementAction";

export default function CounterForm() {
  const { count, formAction, isPending } = useIncrementAction(0);

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>Counter Form</h2>
      <form action={formAction}>
        <p>Count: {count}</p>
        <button type="submit" disabled={isPending}>
          {isPending ? "Incrementing..." : "Increment"}
        </button>
      </form>
    </div>
  );
}

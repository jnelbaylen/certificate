import { useActionState } from "react";

export const useIncrementAction = (initialValue = 0) => {
  async function increment(previousState) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return previousState + 1;
  }

  const [ count, formAction, isPending ] = useActionState(increment, initialValue);
  return { count, formAction, isPending };
}

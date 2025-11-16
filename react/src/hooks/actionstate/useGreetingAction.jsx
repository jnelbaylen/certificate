import { useActionState } from "react";

export function useGreetingAction() {
  async function greet(formData) {
    const name = formData.get("name");
    await new Promise((resolve) => setTimeout(resolve, 500));
    return name ? `Hello, ${name}! 👋` : "Please enter your name.";
  }

  const [message, formAction, isPending] = useActionState(greet, "");
  return { message, formAction, isPending };
}

export namespace Template {
  export const createMessage = (message: string, values: Object) => {
    const words = message.split(" ");
    const filled = [];

    for (const word of words) {
      const containsDelimiters = word.includes("{{") && word.includes("}}");

      if (containsDelimiters) {
        const front = word.substring(0, 2);
        const back = word.substring(word.length - 2);

        const correctlyEnclosed = front === "{{" && back === "}}";

        if (!correctlyEnclosed) {
          filled.push(word);
          continue;
        }

        const variable = word.substring(2, word.length - 2);

        const value = (values as any)[variable];

        filled.push(value);
      } else {
        filled.push(word);
      }
    }

    const filledMessage = filled.join(" ");

    return filledMessage;
  };
}

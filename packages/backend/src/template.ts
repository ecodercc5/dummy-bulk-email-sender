export namespace Template {
  export const createMessage = (message: string, values: Object) => {
    // there are edge cases that I'm going to ignore for now
    let finalMessage = message;

    for (const variable of Object.keys(values)) {
      const template = `{{${variable}}}`;
      const value = `${(values as any)[variable]}`;

      finalMessage = finalMessage.replaceAll(template, value);
    }

    return finalMessage;
  };
}

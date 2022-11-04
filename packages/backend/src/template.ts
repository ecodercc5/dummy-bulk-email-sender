export type TemplateFill = (text: string, values: Object) => string;

export namespace Template {
  export const createFill = (
    templatingFunction: (variable: string) => string
  ): TemplateFill => {
    const fill = (text: string, values: Object) => {
      // there are edge cases that I'm going to ignore for now
      let finalMessage = text;

      for (const variable of Object.keys(values)) {
        const template = templatingFunction(variable);
        const value = `${(values as any)[variable]}`;

        finalMessage = finalMessage.replaceAll(template, value);
      }

      return finalMessage;
    };

    return fill;
  };
}

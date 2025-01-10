export const domParser = new DOMParser();

export const parseHtml = (htmlString: string) =>
  domParser.parseFromString(htmlString, "text/html");

export const parseHtmlToTag = <K extends keyof HTMLElementTagNameMap>(
  htmlString: string,
  tag: K,
): HTMLElementTagNameMap[K] => {
  const parsed = parseHtml(htmlString);

  const dom = parsed.querySelector(tag);

  if (!dom) {
    throw new Error("Element not found");
  }

  return dom;
};

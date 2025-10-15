import { renderToString } from "react-dom/server";
import toDiffableHtml from "diffable-html";
import type { ReactNode } from "react";

export const renderReactToHtml = (jsxElement: ReactNode) => {
  return toDiffableHtml(renderToString(jsxElement));
};

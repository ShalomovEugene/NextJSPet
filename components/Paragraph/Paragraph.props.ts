import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  text: string;
}

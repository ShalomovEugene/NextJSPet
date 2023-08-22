import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ILogoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string;
  color?: "black" | "white";
  extraClass?: string;
}

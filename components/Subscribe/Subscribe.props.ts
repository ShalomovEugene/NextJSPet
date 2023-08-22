import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISubscribeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface IValues {
  email: string;
}

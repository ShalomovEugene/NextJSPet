import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  checked: string[];
  message: string;
}

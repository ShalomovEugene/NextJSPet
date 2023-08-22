import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("The field is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("The field is required")
    .matches(emailRegExp, "Email is not valid"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  checked: [""],
  message: "",
};

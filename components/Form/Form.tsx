import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { IFormProps, IValues } from "./Form.props";
import {
  FromWrapp,
  FieldGroup,
  ErrorMessage,
  CheckboxGroup,
  MessageGroup,
} from "./Form.styles";
import * as Yup from "yup";
import { Label } from "../Label/Label";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("The field is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("The field is required")
    .matches(emailRegExp, "Email is not valid"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

const From = ({}: IFormProps) => {
  return (
    <FromWrapp>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          checked: [""],
          message: "",
        }}
        onSubmit={(
          values: IValues,
          { setSubmitting, resetForm }: FormikHelpers<IValues>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 500);
        }}
        validationSchema={FormSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors }) => {
          return (
            <Form>
              <div className="row">
                <div className="col-md-6">
                  <FieldGroup className="d-flex flex-column">
                    <Label htmlFor="firstName" text="First Name"></Label>
                    <Field id="firstName" name="firstName" placeholder="John" />
                    {errors.firstName && (
                      <ErrorMessage>{errors.firstName}</ErrorMessage>
                    )}
                  </FieldGroup>

                  <FieldGroup className="d-flex flex-column">
                    <Label htmlFor="email" text="Email"></Label>
                    <Field id="email" name="email" type="email" />
                    {errors.email && (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    )}
                  </FieldGroup>
                </div>
                <div className="col-md-6">
                  <FieldGroup className="d-flex flex-column">
                    <Label htmlFor="lastName" text="Last Name"></Label>
                    <Field id="lastName" name="lastName" placeholder="Doe" />
                  </FieldGroup>
                  <FieldGroup className="d-flex flex-column">
                    <Label htmlFor="phoneNumber" text="Phone Number"></Label>
                    <Field id="phoneNumber" name="phoneNumber" type="tel" />
                    {errors.phoneNumber && (
                      <ErrorMessage>{errors.phoneNumber}</ErrorMessage>
                    )}
                  </FieldGroup>
                </div>
              </div>

              <Heading tag={"h6"} text="Select Subject?" />

              <CheckboxGroup>
                <Label text="General Inquiry" className="checkboxContainer">
                  <Field
                    type="checkbox"
                    name="checked"
                    value="General Inquiry 1"
                  />
                  <span className="checkmark"></span>
                </Label>
                <Label text="General Inquiry" className="checkboxContainer">
                  <Field
                    type="checkbox"
                    name="checked"
                    value="General Inquiry 2"
                  />
                  <span className="checkmark"></span>
                </Label>
                <Label text="General Inquiry" className="checkboxContainer">
                  <Field
                    type="checkbox"
                    name="checked"
                    value="General Inquiry 3"
                  />
                  <span className="checkmark"></span>
                </Label>
                <Label text="General Inquiry" className="checkboxContainer">
                  <Field
                    type="checkbox"
                    name="checked"
                    value="General Inquiry 4"
                  />
                  <span className="checkmark"></span>
                </Label>
              </CheckboxGroup>

              <MessageGroup>
                <Label htmlFor="message" text="Message"></Label>
                <Field
                  id="message"
                  name="message"
                  placeholder="Write your message.."
                />

                <Button type="submit" text="Send Message" />
              </MessageGroup>
            </Form>
          );
        }}
      </Formik>
    </FromWrapp>
  );
};

export default From;

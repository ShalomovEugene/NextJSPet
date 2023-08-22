import * as React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { ISubscribeProps, IValues } from "./Subscribe.props";
import {
  ErrorMessage,
  SubscribeFormWrapp,
  SubscribeGroup,
} from "./Subscribe.styles";
import { Button } from "../Button/Button";
import { P } from "../Paragraph/Paragraph";

const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("The field is required")
    .matches(emailRegExp, "Email is not valid"),
});

const Subscribe = ({}: ISubscribeProps) => {
  return (
    <SubscribeFormWrapp>
      <Formik
        initialValues={{
          email: "",
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
            <>
              <Form>
                <SubscribeGroup>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

                  <Button type="submit" text="Subscribe" />
                </SubscribeGroup>
              </Form>
              <P text="*  Will send you weekly updates for your better tool management." />
            </>
          );
        }}
      </Formik>
    </SubscribeFormWrapp>
  );
};

export default Subscribe;

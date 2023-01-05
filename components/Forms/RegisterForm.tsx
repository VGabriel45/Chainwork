import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Center,
  Heading,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../graphql/user/mutations/userMutations";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const [signup, { loading, error }] = useMutation(SIGN_UP);
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Required")
          .min(4, "Username must be at least 4 characters"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // submit the form to the server
        signup({
          variables: {
            signUpUserInput: {
              username: values.username,
              password: values.password,
              email: values.email,
            },
          },
        }).then((data) => {
          console.log(data);
          if (!error) {
            router.push("/login");
          }
        });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Center mt={"3rem"}>
          <Form>
            <Heading>Sign Up</Heading>
            <FormControl isRequired>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Field as={Input} name="username" id="username" />
              <FormErrorMessage>
                <ErrorMessage name="username" />
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Field as={Input} type="email" name="email" id="email" />
              <FormErrorMessage>
                <ErrorMessage name="email" />
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Field as={Input} type="password" name="password" id="password" />
              <FormErrorMessage>
                <ErrorMessage name="password" />
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <Field
                as={Input}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              />
              <FormErrorMessage>
                <ErrorMessage name="confirmPassword" />
              </FormErrorMessage>
            </FormControl>
            <Center>
              {loading ? (
                "Loading"
              ) : (
                <Button mt={4} type="submit" isLoading={isSubmitting}>
                  Sign Up
                </Button>
              )}
            </Center>
          </Form>
        </Center>
      )}
    </Formik>
  );
};

export default RegisterForm;

import React, { useEffect } from "react";
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
import { SIGN_IN } from "../../graphql/user/mutations/userMutations";
import { Router, useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import setAuthCookies from "../../utils/setAuthCookies";
import Cookies from "js-cookie";
import { verifyAccessToken, verifyRefreshToken } from "../../utils/checkAuth";

const LoginForm = () => {
  const [signIn, { loading, error, data }] = useMutation(SIGN_IN);
  const router = useRouter();
  const toast = useToast();

  // useEffect(() => {
  //   const checkCookies = async () => {
  //     try {
  //       await verifyRefreshToken(Cookies.get("refreshToken")!);
  //       router.push("/");
  //     } catch (error) {
  //       console.log("delete cookies");
  //       Cookies.remove("accessToken");
  //       Cookies.remove("refreshToken");
  //     }
  //   };
  //   checkCookies();
  // }, []);

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Required")
          .min(4, "Username must be at least 4 characters"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // submit the form to the server
        signIn({
          variables: {
            signInUserInput: {
              username: values.username,
              password: values.password,
            },
          },
          onError: (error) => {
            toast({
              title: "Unauthorized",
              description: "Username or password wrong.",
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top-right",
            });
          },
        }).then(({ data }) => {
          if (!error) {
            setAuthCookies(data?.signIn.accessToken, data?.signIn.refreshToken);
            router.push("/");
          }
        });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Center mt={"3rem"}>
          <Form>
            <Heading>Sign In</Heading>
            <FormControl isRequired>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Field as={Input} name="username" id="username" />
              <FormErrorMessage>
                <ErrorMessage name="username" />
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Field as={Input} type="password" name="password" id="password" />
              <FormErrorMessage>
                <ErrorMessage name="password" />
              </FormErrorMessage>
            </FormControl>
            <Center>
              {loading ? (
                "Loading"
              ) : (
                <Button mt={4} type="submit" isLoading={isSubmitting}>
                  Sign In
                </Button>
              )}
            </Center>
          </Form>
        </Center>
      )}
    </Formik>
  );
};

export default LoginForm;

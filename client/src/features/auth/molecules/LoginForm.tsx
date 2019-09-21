import * as React from "react";
import { useMutation } from "@apollo/react-hooks";
import { RouteComponentProps } from "react-router";
import LOGIN_USER from "../graphql/login.graphql";

import { useForm } from "@lib/hooks/useForm";
import { AuthLink, Input } from "@ui/atoms";
import { Form } from "@ui/molecules";

interface Props extends RouteComponentProps {}

interface Errors {
  email: string;
  password: string;
}

export const LoginForm: React.FC<Props> = ({ history }) => {
  const [values, handleChange] = useForm({
    email: "",
    password: ""
  });

  const [errors, setErrors] = React.useState<Errors>({
    email: "",
    password: ""
  });

  const [loginUser] = useMutation(LOGIN_USER, {
    update(_, { data: { login } }) {
      localStorage.setItem("token", login.token);
      history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions!.exception.errors);
    },
    variables: values
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      title="Log in"
      buttonText="log in"
      link={<AuthLink to="/register">go to sign up</AuthLink>}
    >
      <Input
        value={values[name]}
        onChange={handleChange}
        error={errors.email}
        type="email"
        name="email"
        label="email"
      />
      <Input
        value={values[name]}
        onChange={handleChange}
        error={errors.password}
        type="password"
        name="password"
        label="password"
      />
    </Form>
  );
};

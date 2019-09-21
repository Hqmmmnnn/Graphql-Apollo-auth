import * as React from "react";
import { useMutation } from "@apollo/react-hooks";
import { RouteComponentProps } from "react-router";
import REGISTER_USER from "../graphql/register.graphql";

import { useForm } from "@lib/hooks/useForm";
import { AuthLink, Input } from "@ui/atoms";
import { Form } from "@ui/molecules";

interface Props extends RouteComponentProps {}

interface Errors {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm: React.FC<Props> = ({ history }) => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = React.useState<Errors>({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [registerUser] = useMutation(REGISTER_USER, {
    update(_, result) {
      history.push("/login");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions!.exception.errors);
    },
    variables: values
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      title="Sign Up"
      buttonText="sign up"
      link={<AuthLink to="/login">go to login</AuthLink>}
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
      <Input
        value={values[name]}
        onChange={handleChange}
        error={errors.confirmPassword}
        type="password"
        name="confirmPassword"
        label="confirm password"
      />
    </Form>
  );
};

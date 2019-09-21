import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Image } from "@ui/atoms";
import { LoginForm } from "@features/auth/molecules";
import { AuthTemplate } from "@features/auth/templates";

interface Props extends RouteComponentProps {}

export const LogIn: React.FC<Props> = props => {
  return (
    <AuthTemplate
      form={<LoginForm {...props} />}
      image={
        <Image src={require("../public/auth.png")} alt="background image" />
      }
    />
  );
};

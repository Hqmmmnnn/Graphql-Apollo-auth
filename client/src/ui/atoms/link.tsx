import styled from "@emotion/styled";
import { Link as routerLink } from "react-router-dom";

export const AuthLink = styled(routerLink)`
  font-weight: 600;
  text-decoration: none;
  align-self: flex-end;
  margin-top: 10px;
  color: #c9e2aa;
  & {
    :hover {
      color: #95e038;
    }
  }
`;

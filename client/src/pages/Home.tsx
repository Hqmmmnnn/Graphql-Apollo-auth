import * as React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/react-hooks";

import CURRENT_USER from "./findCurrentUser.graphql";
import { Text, AuthLink } from "@ui/atoms";

export const Home: React.FC<{}> = () => {
  const { loading, data } = useQuery(CURRENT_USER, {
    fetchPolicy: "network-only"
  });

  if (loading) {
    return <div>Loading... </div>;
  }

  if (data.currentUser) {
    const { email } = data.currentUser;
    return (
      <Wrapper>
        <Container>
          <Text size="3rem">home</Text>
          <Text size="2rem">hiiiii {email}</Text>
          <AuthLink to="/login">go to login </AuthLink>
          <AuthLink to="/register">go to sign up</AuthLink>
        </Container>
      </Wrapper>
    );
  } else {
    return <div>user not founded</div>;
  }
};

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Wrapper)`
  flex-direction: column;
  width: 300px;
`;

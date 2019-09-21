import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  form: React.ReactNode;
  image?: React.ReactNode;
}

export const AuthTemplate: React.FC<Props> = ({ form, image }) => (
  <Wrapper>
    {form && <FormContainer>{form}</FormContainer>}
    {image && <ImageContainer>{image}</ImageContainer>}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: center;
  justify-content: space-around;
`;

const FormContainer = styled.div`
  width: 450px;
  background: #ffffff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 15px;
  @media (max-width: 500px) {
    box-shadow: none;
  }
`;

const ImageContainer = styled.div`
  min-height: 100vh;
  width: 550px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

import * as React from "react";
import styled from "@emotion/styled";
import { Button, Text } from "@ui/atoms";

interface FormProps {
  title: string;
  buttonText: string;
  link?: React.ReactNode;
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent<Element>) => void;
}

export const Form: React.FC<FormProps> = ({
  handleSubmit,
  title,
  children,
  buttonText,
  link
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <Text size="3rem">{title}</Text>
        {children}
        <Button type="submit">{buttonText}</Button>
        {link}
      </FormContainer>
    </form>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

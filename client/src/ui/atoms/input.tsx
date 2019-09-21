import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

interface InputProps {
  label?: React.ReactNode;
  value: any;
  error: string;
  name: string;
  placeholder?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  error,
  value,
  name,
  type,
  placeholder,
  onChange
}: InputProps) => (
  <Container>
    {label && <InputLabel>{label}</InputLabel>}
    <StyledInput
      error={error}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
    />
    {error && <ErrorLabel>{error}</ErrorLabel>}
  </Container>
);

interface Props {
  theme?: {
    color: string;
  };
  error: string;
}

const StyledInput = styled.input<Props>`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color};
  color: #000;
  font-size: 1.3rem;
  &:disabled {
    background-color: rgba(80, 80, 80, 0.1);
  }
  ${({ error }) =>
    error &&
    css`
      border-color: #ff0000b8;
    `}
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const InputLabel = styled.label`
  color: #000000;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const ErrorLabel = styled.label`
  display: block;
  font-size: 0.9em;
  color: red;
  margin-top: 0.2rem;
  text-align: left;
`;

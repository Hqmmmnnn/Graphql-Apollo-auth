import styled from "@emotion/styled";

interface Props {
  type?: "button" | "submit" | "reset";
  theme?: {
    color: string;
  };
}

export const Button = styled.button<Props>`
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  background: #c9e2aa;
  border: none;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;

  & {
    :hover {
      background: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
    }
  }
`;

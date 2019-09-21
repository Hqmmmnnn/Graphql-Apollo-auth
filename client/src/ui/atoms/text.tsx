import styled from "@emotion/styled";

type Props = {
  size?: string;
  theme?: {
    color: string;
  };
};

export const Text = styled.div<Props>`
  color: ${({ theme }) => theme.color};
  font-size: ${({ size }) => size || "1.4rem"};
  margin-bottom: 15px;
`;

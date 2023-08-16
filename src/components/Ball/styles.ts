import { styled } from "styled-components";

export const Ball = styled.li`
  list-style: none;
  width: 4.75rem;
  height: 4.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border-radius: 50%;

  font-size: 1.25rem;
  font-weight: 700;
  line-height: normal;
  color: #333;

  @media (min-width: 760px) {
    width: 6.94981rem;
    height: 6.64763rem;
  }
`;

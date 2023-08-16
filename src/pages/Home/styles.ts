import { styled } from "styled-components";

export const Page = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  > .ballsgroup {
    min-height: 50vh;
    padding: 30px 15px 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5.25rem;
  }

  > .ballsgroup > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.62rem;
  }

  .group {
    margin-top: 5.23rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.74rem;
  }

  @media (min-width: 1020px) {
    flex-direction: row;

    .ballsgroup {
      flex: 2;
      min-height: 100vh;
      position: relative;
    }

    .group {
      margin-top: 0;
      flex-direction: row;
      gap: 1.42rem;
    }
  }
`;

interface ThemeProps {
  color: string;
}

export const Theme = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 63px 0;
  height: 50vh;
  background-color: ${(props) => props.color};

  @media (min-width: 1020px) {
    padding: 5.75rem 6rem;
    width: 30vw;
    height: 100vh;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Icon = styled.i`
  width: 3.99913rem;
  height: 3.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("images/lottohub-logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: #fff;
  font-size: 1.875rem;
  font-weight: 700;
`;

export const Concourse = styled.h2`
  margin-top: 4.69rem;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;

  @media (min-width: 1020px) {
    margin-top: 0;
  }
`;

export const Copyright = styled.small`
  display: block;
  width: 19.75rem;
  height: 3.625rem;
  color: #000;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 147.4%; /* 1.28975rem */

  @media (min-width: 1020px) {
    width: auto;
    height: auto;
    position: absolute;
    bottom: 6.06rem;
  }
`;

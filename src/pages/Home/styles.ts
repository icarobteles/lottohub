import { styled } from "styled-components";

interface HeaderProps {
  theme: string;
}

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 1020px) {
    flex-direction: row;
  }
`;

export const Header = styled.header<HeaderProps>`
  padding: 2rem 0.9375rem;

  background-color: ${(props) => props.theme};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1020px) {
    padding: 5.75rem 6rem;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.74rem;

  margin-top: 5.23rem;
  margin-bottom: 4.69rem;

  @media (min-width: 1020px) {
    flex-direction: row;
    gap: 1.42rem;
    margin: 0;
  }
`;

export const LogoIcon = styled.i`
  width: 3.99913rem;
  height: 3.9rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("images/lottohub-logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;

export const LogoTitle = styled.h1`
  color: #ffffff;
  font-size: 1.875rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Concourse = styled.div`
  display: flex;
  align-items: center;
  gap: 1ch;

  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;

  @media (min-width: 1020px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.9rem;

    letter-spacing: 0.11813rem;
  }
`;

export const ConcourseNumber = styled.span`
  @media (min-width: 1020px) {
    display: none;
  }
`;

export const ConcourseNumberAndData = styled.p`
  display: none;

  @media (min-width: 1020px) {
    display: block;
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 3rem 0.9375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 2.5rem;
`;

export const BallsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.67rem;
`;

export const Copyright = styled.small`
  max-width: 19.75rem;

  color: #000000;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 147.4%; /* 1.28975rem */

  @media (min-width: 1020px) {
    position: absolute;
    bottom: 5.75rem;
    max-width: none;
  }
`;

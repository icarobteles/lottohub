import { styled } from "styled-components";
export const Select = styled.select`
  /* Remove a seta padrão do navegador */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* Adiciona uma imagem personalizada como background da seta */
  background-image: url("images/arrow-select.svg");
  background-position-y: center;
  background-position-x: calc(100% - 2rem);
  background-repeat: no-repeat;

  outline: none;
  border: none;
  padding: 1rem 2rem;

  width: 14.5625rem;
  height: 3.1875rem;

  display: flex;
  align-items: center;

  background-color: #fff;
  border-radius: 5px;

  color: #333;
  text-transform: uppercase;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: normal;

  @media (min-width: 760px) {
    width: 13.49419rem;
    height: 2.82525rem;
    padding: 0.88rem 1.43rem;
  }
`;

import styled from "styled-components"

export const IntroductionContainer = styled.div`
  font-size: 4em;
  padding: 0 0 0 2em;
  display: flex;
  flex-direction: column;
  row-gap: 0.3em;

  @media(max-width: 600px) {
    padding: 1em 1em 2em 1em;
    text-align: center;
    grid-column: 1/3;
    font-size: 3.5em;
  }
`

export const Name = styled.span`
  font-weight: 600;
  letter-spacing: 2px;

  @media(max-width: 600px) {
    font-size: 0.8em;
  }
`

export const Description = styled.span`
  font-size: 0.25em;
  font-weight: 100;
  max-width: 50ch;
  letter-spacing: 1px;
`
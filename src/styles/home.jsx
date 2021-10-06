import styled from "styled-components"

export const Title = styled.h3`
  font-size: 2em;
  text-align: center;
  color: red;
`

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  align-items: center;
`

export const NavLink = styled.link`
  padding: 20px;
  color: white;
  text-decoration: none;
  &:hover {
    color: red;
    background: blue;
  }
`

import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Montserrat";
  color: white;

}
html, body {
  min-height: 100%;
}
body {
  background: radial-gradient(at top left, rgba(146,43,225,1) 0%, rgba(43,9,107,1) 100%);
  background-repeat: no-repeat;
}
p {
  margin: 16px auto;
  line-height: 1.5em;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
}
nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px auto;
}
nav .links {
  display: inline-block;
  text-align: right;
}
nav a {
  display: inline-block;
  margin-left: 20px;
  font-weight: 400;
  padding-bottom: 8px;
  border-bottom: 3px solid transparent;
}
nav a:hover {
  border-color: white;
}
footer p{
  text-align: center;
  color: #bbb;
  margin: 40px auto;
}


`

const Wrapper = styled.div`
  margin-top: 40px;
  text-align: center;
  justify-content: center;
`

export default Wrapper

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: aqua;
  transition: 0.3s;

  &:hover {
    color: red;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 80px;
  margin: 80px 20px;
`

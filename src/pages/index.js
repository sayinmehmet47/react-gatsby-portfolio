import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { Section, Title } from "../styles/home"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StyledLink } from "../styles/globalStyles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function Home({ data }) {
  const image = getImage(data.file)

  return (
    <div>
      <Layout>
        <Section>
          <div>
            {" "}
            <h3>Develop & Deploy</h3>
            <p>UX designer & web developer based in Manchester.</p>
            <StyledLink activeStyle={{ color: "red" }} to="/projects">
              My Portfolio Projects
            </StyledLink>
          </div>
          <GatsbyImage objectFit="cover" image={image} />
        </Section>{" "}
      </Layout>
    </div>
  )
}

export const Query = graphql`
  query Banner {
    file(relativePath: { eq: "banner2.png" }) {
      id
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
  }
`

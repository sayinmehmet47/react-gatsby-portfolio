import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import Wrapper, { Container, StyledLink } from "../../styles/globalStyles"
import Img from "gatsby-image"

import { Title } from "../../styles/home"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      posts: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              stack
              slug
              date
              thumb {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      contacts: allSite {
        nodes {
          id
          siteMetadata {
            title
            description
          }
        }
      }
    }
  `)
  const projects = data.posts.edges.map(e => e.node)
  // const contacts = data.contacts.nodes[0].siteMetadata

  return (
    <div>
      <Layout>
        <Title>Hello this is Projects page</Title>
        <Container>
          {projects.map(e => (
            <StyledLink to={"/projects/" + e.frontmatter.slug} key={e.id}>
              <Wrapper>
                <Img fluid={e.frontmatter.thumb.childImageSharp.fluid} />
                <h2>{e.frontmatter.title}</h2>
                <h6>{e.frontmatter.stack}</h6>
              </Wrapper>
            </StyledLink>
          ))}
        </Container>
        {/* <h5>{contacts.description}</h5> */}
      </Layout>
    </div>
  )
}

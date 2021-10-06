import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"

export default function ProjectDetails({ data }) {
  console.log(data)

  const { html } = data.markdownRemark
  const { stack, title, featuredImage } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <Img fluid={featuredImage.childImageSharp.fluid} />
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  )
}

export const Details = graphql`
  query Details($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        stack
        title
        featuredImage {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

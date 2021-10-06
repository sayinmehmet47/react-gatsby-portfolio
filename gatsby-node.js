const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const ProjectDetails = path.resolve(`./src/templates/project-details.js`)
  const result = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: ProjectDetails,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}

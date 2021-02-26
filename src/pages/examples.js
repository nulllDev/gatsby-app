import React from "react"
import { graphql } from "gatsby"

import Header from "../examples/Header"
import Layout from "../components/layout"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <h1>Examples Page</h1>
      <Header />
      <h3>Author: {author}</h3>
    </Layout>
  )
}

export const data = graphql`
  query PageQuery {
    site {
      info: siteMetadata {
        author
        data
        desc
        description
        person {
          name
          age
        }
        title
      }
    }
  }
`
export default examples

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Use "info: siteMetadata" to rename long names (original: "siteMetadata" <- You'd have to write this everywhere, now you can just use "info")
// Naming the query: "query QueryName" is useful when working with variables. "QueryName" can be anything
const getData = graphql`
  query QueryName {
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

const Header = () => {
  const {
    site: {
      info: {
        data,
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h3>Person: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Item 1: {data[0]}</h3>
    </div>
  )
}

export default Header

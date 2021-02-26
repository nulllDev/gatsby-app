import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

import styles from "../components/products.module.css"

const ComponentName = ({ data }) => {
  const {
    acp: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.pictures.fluid} alt={product.title} />
              <h3>
                {product.title}
                <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>Learn More</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    acp: allContentfulProduct {
      nodes {
        slug
        price
        title
        pictures {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        id
      }
    }
  }
`

export default ComponentName

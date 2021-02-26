import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

// Files that do not end in .js must be specified
import img from "../images/image-3.jpg"

const getImages = graphql`
  {
    fixedImg: file(relativePath: { eq: "image-3.jpg" }) {
      cis: childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluidImg: file(relativePath: { eq: "image-3.jpg" }) {
      cis: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    /* Only the parent container is responsible for the images inside */
    <section className="images">
      <article className="single-image">
        <h3>Basic React Image</h3>
        <img src={img} width="100%" alt="Basic React" />
      </article>

      <article className="single-image">
        <h3>Fixed Image - Blur (300W / 400H)</h3>
        <Image fixed={data.fixedImg.cis.fixed} />
      </article>

      <article className="single-image">
        <h3>Fluid Image - SVG</h3>
        <Image fluid={data.fluidImg.cis.fluid} />
      </article>
    </section>
  )
}

export default Images

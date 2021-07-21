import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello Soorya Saravanapavan! </h1>
    <p>Welcome to my Software For Love Challenge.</p>
    <p>I completed the project. Woo hoo!</p>
    <StaticImage
      src="../images/smiley-face.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Smiley Face"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage

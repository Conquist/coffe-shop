import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaBeer } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <h3>
      {" "}
      Lets go for a <FaBeer />?{" "}
    </h3>
  </Layout>
)

export default IndexPage

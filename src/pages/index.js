import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Hey Gatsby!</h1>
    <h2>hello world</h2>
    <p>hello pupper</p>
    <img  src="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?cs=srgb&dl=animal-chihuahua-cute-39317.jpg&fm=jpg" alt="puppy in a teacup"/>
  </Layout>
)

export default IndexPage

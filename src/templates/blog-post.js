import React from "react"
import { Link, graphql, } from "gatsby"
import Image from "gatsby-image"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { remarkForm } from "gatsby-tinacms-remark"
import get from "lodash.get";

function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, timeToRead } = markdownRemark
  const {image} = frontmatter
  return (
    <Layout>
      <article className="blog-post px-3 py-5 p-md-5">
        <div className="container">
          <header className="blog-post-header">
            <h2 className="title mb-2">{frontmatter.title}</h2>
            <div className="meta mb-3"><span className="date">{frontmatter.date}</span><span className="time">{timeToRead} min{timeToRead > 1 ? "s" : null} read</span><span className="comment"><a href="#">4 comments</a></span></div>
          </header>

          <div className="blog-post-body">
            <Image src={image}/>
            <div
              dangerouslySetInnerHTML={{ __html: html }}
            />

          </div>
          <nav className="blog-nav nav nav-justified my-5">
            <a className="nav-link-prev nav-item nav-link rounded-left" href="index.html">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
            <a className="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
          </nav>
        </div>
      </article>
    </Layout>
  )
}

const BlogPostForm = {
  fields: [
    {
      name: "frontmatter.title",
      component: "text",
      label: "Title",
      required: true,
    },
    { name: "frontmatter.date", component: "date", label: "Date" },
    {
      name: "frontmatter.description",
      component: "textarea",
      label: "Textarea",
    },
    { name: "rawMarkdownBody", component: "markdown", label: "Body" },
    { name: "frontmatter.image", component: "image", label: "Image", previewSrc: filename => `/content/images/${filename}`, previewSrc: (formValues, { input }) => {
      const path = input.name.replace("rawFrontmatter", "frontmatter")
      const gastbyImageNode = get(formValues, path)
      if (!gastbyImageNode) return ""
      //specific to gatsby-image
      return gastbyImageNode.childImageSharp.fluid.src
    },

    uploadDir: () => {
      return "/content/images/"
    }, }
  ],
}

/**
 * The `remarkForm` higher order component wraps the `BlogPostTemplate`
 * and generates a new form from the data in the `markdownRemark` query.
 */
export default remarkForm(BlogPostTemplate, BlogPostForm)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      ...TinaRemark
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        image
      }
    }
  }
`

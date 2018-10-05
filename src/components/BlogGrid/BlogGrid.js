//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

//Styles
import styles from './styles.module.scss'

const BlogGrid = ({data}) => {
  return (
    <div className={styles.banner}>
      <ul className={styles.list}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.excerpt !== "") {
            let slug = '/blog/' + node.frontmatter.slug
            return (
              <li key={node.id} className={styles.listItem}>
                <Link to={slug}>
                  <div className={styles.listContent}>
                    <h4>{node.frontmatter.title}</h4>
                  </div>
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default BlogGrid

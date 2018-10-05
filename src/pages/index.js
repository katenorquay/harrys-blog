//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

import BlogGrid from '../components/BlogGrid'

import bannerImage from '../assets/godot.png'

//Styles
import styles from './styles.module.scss'

const HomePage = ({data}) => {
  return (
    <div className={styles.homePage}>
      <div className={styles.bannerContainer}>
        <img className={styles.bannerImage} src={bannerImage}></img>
        <div className={styles.infoBanner}>
          <h1>Blog Title</h1>
        </div>
      </div>
      <BlogGrid data={data}/>
    </div>
  )
}

export default HomePage

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark (
      filter: { fileAbsolutePath: {regex : "\/blog/"} },
      sort: { order: DESC, fields: [frontmatter___date]},
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
            slug
          }
          excerpt
        }
      }
    }
  }
`;

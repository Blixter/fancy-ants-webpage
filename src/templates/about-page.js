import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Employees from '../components/Employees'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
// import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({
  title,
  heading,
  description,
  employees,
}) => (
  <div>
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title has-text-centered'>{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <h3 className='has-text-weight-semibold is-size-2'>{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <h2 className='has-text-centered has-text-weight-semibold is-size-4'>The Employees</h2>
              <Employees gridItems={employees.information} />
              <div className='columns'>
                <div className='column is-7' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  employees: PropTypes.shape({
    information: PropTypes.array,
  }),
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        employees={frontmatter.employees}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
        employees {
          information {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            roll
            text
          }
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryInformation = entry.getIn(['data', 'employees', 'information'])
  const information = entryInformation ? entryInformation.toJs() : []

  return (
    <AboutPageTemplate
      title={data.title}
      heading={data.heading}
      description={data.description}
      employees={{ information }}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview

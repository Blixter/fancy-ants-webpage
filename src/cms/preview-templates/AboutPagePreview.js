import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  console.log(data)

  if (data) {
    return (
      <AboutPageTemplate
        title={entry.getIn(['data', 'title'])}
        heading={entry.getIn(['data', 'heading'])}
        description={entry.getIn(['data', 'description'])}
        employees={data.employees || { information: [] }}
      />
    )
  } else {
    return (
      'Loading....'
    )
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview

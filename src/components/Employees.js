import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const EmployeeGrid = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.text} className='column is-6'>
        <section className='section'>
          <div className='has-text-centered'>
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className='has-text-centered is-size-5 has-text-weight-bold'>
            {item.name}
          </div>
          <div className='has-text-centered has-text-weight-light is-size-7 is-italic'>
            {item.roll}
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

EmployeeGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      roll: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
}

export default EmployeeGrid

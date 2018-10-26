import React from 'react'
import PropTypes from 'prop-types'

const LatestExperimentCard = ({host, numberOfAssays, experimentAccession, lastUpdate, experimentDescription, species}) => {
  return (
    <div className="tabs-content" data-tabs-content="browse-by-tabs">
      <ul className="clear">
          <li>
              <div className="media-object stack-for-small">
                  <div className="media-object-section middle left hide-for-small-only">
                      <span className="button secondary no-action"  style={{width: 120}} data-tooltip title="Number of assays in experiment">{numberOfAssays.toString()} assays</span>
                  </div>
                  <div className="media-object-section middle hide-for-small-only ">
                      <a className="button fixed-width-medium" href={`${host}/experiments/${experimentAccession}`}>Results</a>
                  </div>
                  <div className="media-object-section middle">
                      <small>{lastUpdate}</small><br/>
                      <a href={`${host}/experiments/${experimentAccession}`}>
                          {experimentDescription} <i>{species}</i>
                      </a>
                  </div>
              </div>
          </li>
      </ul>
    </div>
  )
}

LatestExperimentCard.propTypes = {
  numberOfAssays: PropTypes.number,
  experimentAccession: PropTypes.string,
  lastUpdate: PropTypes.string,
  experimentDescription: PropTypes.string,
  species: PropTypes.string
}

export default LatestExperimentCard

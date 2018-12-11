import React from 'react'
import PropTypes from 'prop-types'

const PanelContent = ({panelName, host, resource, CardType}) => 
  panelName === `Featured` ?     
    <div className={`small-4 columns combo text-center padding-top-medium`}>
      <a href={`${host}${resource[panelName]}`}>
          <img className={`margin-bottom-large`} src={`${host}/resources/images/logos/human_cell_atlas.png`}  height={`400`} />
      </a>
    </div>
    :
    <CardType host={host} resource={resource[panelName]}/>


PanelContent.propTypes = {
  panelName: PropTypes.string.isRequired,
  host: PropTypes.string,
  resource: PropTypes.object,
  CardType: PropTypes.func
}

export default PanelContent

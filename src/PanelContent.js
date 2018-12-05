import React from 'react'
import PropTypes from 'prop-types'
import HCAlogo from './assets/img/HCA-logo.jpg'

const PanelContent = ({panelName, host, resource, CardType}) => 
  panelName === `Featured` ?     
    <div className={`small-4 columns combo text-center padding-top-medium`}>
      <a href={`${host}${resource[panelName]}`}>
          <img className={`margin-bottom-large`} src={HCAlogo}  height={`400`} />
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

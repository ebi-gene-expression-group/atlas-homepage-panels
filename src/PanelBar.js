import React from 'react'
import PropTypes from 'prop-types'

class PanelBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panelName: this.props.panelNames[0]
    }

    this.changePanel = this.changePanel.bind(this)
  }

  changePanel(event){
    this.setState({panelName: event.target.id})
    this.props.onClick(event)
  }

  render() {
    var panelNames = this.props.panelNames
    var panelNameList = panelNames.map(panelName => 
      <li className="tabs-title" key={panelName}>
        {
          panelName==this.state.panelName ? 
            <a aria-selected="true"  id={panelName} onClick={this.changePanel}>{panelName}</a> :
            <a aria-selected="false" id={panelName} onClick={this.changePanel}>{panelName}</a>
        }
      </li>
    )

    return (
      <div>
        <ul className="tabs" data-tabs id="browse-by-tabs">
          {panelNameList}
        </ul>
      </div>
    )
  }
}

PanelBar.propTypes = {
  pnaelNames: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired
}

export default PanelBar

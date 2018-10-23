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
    this.setState({
      panelName: event.id
    })
    this.props.onClick(event)
  }

  render() {
    var cardNames = this.props.panelNames

    var panelNameList = cardNames.map(cardName => 
      cardName==`Species` ?
        <li className="tabs-title" key={cardName}>
          {cardName==this.state.panelName ? 
          <a id={cardName.toLowerCase()} href="#by-species" aria-selected="true" onClick={this.changePanel}>By species</a> :
          <a id={cardName.toLowerCase()} href="#by-species" aria-selected="false" onClick={this.changePanel}>By species</a>}

        </li> :
        <li className="tabs-title" key={cardName}>
          {cardName==this.state.panelName ? 
            <a id={cardName.toLowerCase()} href="#by-animals" aria-selected="true" onClick={this.changePanel}>{cardName}</a> :
            <a id={cardName.toLowerCase()} href="#by-animals" aria-selected="false" onClick={this.changePanel}>{cardName}</a>}
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
  atlasUrl: PropTypes.string
}

export default PanelBar

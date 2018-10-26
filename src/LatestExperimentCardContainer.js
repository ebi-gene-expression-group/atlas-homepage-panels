import React from 'react'
import PropTypes from 'prop-types'
import LatestExperimentCard from './LatestExperimentCard'
import URI from 'urijs'

const CalloutAlert = ({error}) =>
  <div className={`row column`}>
    <div className={`callout alert small`}>
      <h5>Oops!</h5>
      <p>
        {error.description}<br/>
        If the error persists, in order to help us debug the issue, please copy the URL and this message and
        send it to us via <a href={`https://www.ebi.ac.uk/support/gxasc`}>the EBI Support & Feedback system</a>:
      </p>
      <code>{`${error.name}: ${error.message}`}</code>
    </div>
  </div>

CalloutAlert.propTypes = {
  error: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  })
}

class LatestExperimentCardContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      isLoading: true,
      hasError: null
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true })

    const url = URI(this.props.resource, this.props.host).toString()

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`${url} => ${response.status}`)
      }

      this.setState({
        data: await response.json(),
        isLoading: false,
        hasError: null
      })
    } catch(e) {
      this.setState({
        data: null,
        isLoading: false,
        hasError: {
          description: `There was a problem communicating with the server. Please try again later.`,
          name: e.name,
          message: e.message
        }
      })
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: {
        description: `There was a problem rendering this component.`,
        name: error.name,
        message: `${error.message} – ${info}`
      }
    })
  }

  render() {
    const { data, isLoading, hasError } = this.state

    const cards = data && data.map((card, idx) => <LatestExperimentCard key={idx} host={this.props.host} {...card}/>)

    return (
      hasError ?
        <CalloutAlert error={hasError} /> :
        isLoading ?
          <p className={`row column`} id={`loading-message`}> Loading, please wait...</p> :
          data.length > 0 ?
            <div className={`row small-up-2 medium-up-3`}>
              {cards}
            </div> :
            null
    )
  }
}

LatestExperimentCardContainer.propTypes = {
  host: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired
}

export default LatestExperimentCardContainer
import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetchMock from 'fetch-mock'

import {getRandomInt, latestExperimentEntries} from './TestUtils'

import LatestExperimentCardContainer from '../src/LatestExperimentCardContainer'
import LatestExperimentCard from '../src/LatestExperimentCard'

const getRandomHttpErrorCode = () => getRandomInt(400, 600)

Enzyme.configure({ adapter: new Adapter() })

describe(`LatestExperimentCardContainer`, () => {
  beforeEach(() => {
    fetchMock.restore()
  })

  test(`with no data matches snapshot`, () => {
    const tree = renderer.create(<LatestExperimentCardContainer host={``} resource={``}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`until the fetch promise is not resolved a loading message is displayed, then goes away`, async () => {
    fetchMock.get(`*`, `[]`)
    const wrapper = mount(<LatestExperimentCardContainer host={`foo`} resource={`bar`}/>)

    expect(wrapper.find(`#loading-message`).exists()).toBe(true)
    expect(wrapper.find(`.callout.alert`).exists()).toBe(false)
    await wrapper.instance().componentDidMount()
    wrapper.update()
    expect(wrapper.find(`#loading-message`).exists()).toBe(false)
    expect(wrapper.find(`.callout.alert`).exists()).toBe(false)
  })

  test(`renders an error message if request to the server returns 4xx or 5xx`, async () => {
    fetchMock.get(`*`, getRandomHttpErrorCode(400, 600))
    const wrapper = mount(<LatestExperimentCardContainer host={`foo`} resource={`bar`}/>)

    await wrapper.instance().componentDidMount()
    wrapper.update()

    expect(wrapper.find(`.callout.alert`).exists()).toBe(true)
  })

  test(`renders an error message if an error is caught by the error boundary`, async () => {
    fetchMock.get(`*`, `[]`)
    const wrapper = mount(<LatestExperimentCardContainer host={`foo`} resource={`bar`}/>)

    const e = new Error(`This is an error!`)
    wrapper.instance().componentDidCatch(e, `Descriptive error message goes here`)
    wrapper.update()

    expect(wrapper.find(`.callout.alert`).exists()).toBe(true)
  })

  test(`renders the same number of cards as the number of response entries`, async () => {
    fetchMock.get(`*`, latestExperimentEntries())
    const wrapper = mount(<LatestExperimentCardContainer host={`foo`} resource={`bar`}/>)

    await wrapper.instance().componentDidMount()
    wrapper.update()

    expect(wrapper.find(LatestExperimentCard)).toHaveLength(latestExperimentEntries().length)
  })
})

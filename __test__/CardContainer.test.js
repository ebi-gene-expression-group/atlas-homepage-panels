import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CardContainer from '../src/CardContainer'
import LatestExperimentCardContainer from '../src/LatestExperimentCardContainer'
import Card from '../src/Card'
import {panelName, resource, host} from './TestUtils'

Enzyme.configure({ adapter: new Adapter() })

describe(`CardContainer`, () => {
  const props = {host, resource, panelName}
  test(`uses a LatestExperimentCard for latest experiment entries`, () => {
  	const wrapper = shallow(<CardContainer {...props} panelName={`Latest experiments`}/>)
    expect(wrapper.find(LatestExperimentCardContainer).length).toEqual(1)
    expect(wrapper.find(Card).length).toEqual(0)
  })

  test(`uses a static card for featured experiment`, () => {
  	const wrapper = shallow(<CardContainer {...props} panelName={`Featured`}/>)
    expect(wrapper.find(LatestExperimentCardContainer).length).toEqual(0)
    expect(wrapper.find(Card).length).toEqual(1)
  })

  test(`returns null if the tab name is not defined as default`, () => {
  	const wrapper = shallow(<CardContainer {...props}/>)
    expect(wrapper.find(LatestExperimentCardContainer).length).toEqual(0)
    expect(wrapper.find(Card).length).toEqual(0)
  })

  test(`matches snapshot`, () => {
    const tree = renderer.create(<CardContainer {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

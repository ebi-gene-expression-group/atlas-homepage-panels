import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PanelContent from '../src/PanelContent'
import {getRandomInt, speciesResources, experimentResources, host, SpeciesCardType, LatestExperimentCardType} from './TestUtils'

Enzyme.configure({ adapter: new Adapter() })

describe(`PanelContent`, () => {
  const randomSpeciesTabName = Object.keys(speciesResources)[getRandomInt(0, Object.keys(speciesResources).length)]
  const randomExperimentTabName = Object.keys(experimentResources)[getRandomInt(0, Object.keys(experimentResources).length)]

  test(`uses a speciesCardContainer for all popular species`, () => {
    const wrapper = shallow(<PanelContent host={host} CardType={SpeciesCardType} resource={speciesResources} panelName={randomSpeciesTabName}/>)
    expect(wrapper.find(LatestExperimentCardType).length).toEqual(0)
    expect(wrapper.find(SpeciesCardType).length).toEqual(1)
    expect(wrapper.find(`img`).length).toEqual(0)
  })

  test(`uses a LatestExperimentCardContainer for latest experiment entries`, () => {
    console.log(randomExperimentTabName)
  	const wrapper = shallow(<PanelContent host={host} CardType={LatestExperimentCardType} resource={experimentResources} panelName={randomExperimentTabName}/>)
    expect(wrapper.find(LatestExperimentCardType).length).toEqual(1)
    expect(wrapper.find(SpeciesCardType).length).toEqual(0)
    expect(wrapper.find(`img`).length).toEqual(0)
  })

  test(`uses a static card for featured experiment`, () => {
  	const wrapper = shallow(<PanelContent host={host} CardType={LatestExperimentCardType} resource={experimentResources} panelName={`Featured`}/>)
    expect(wrapper.find(LatestExperimentCardType).length).toEqual(0)
    expect(wrapper.find(SpeciesCardType).length).toEqual(0)
    expect(wrapper.find(`img`).length).toEqual(1)
  })

  test(`matches snapshot`, () => {
    const tree = renderer.create(<PanelContent host={host} CardType={LatestExperimentCardType} resource={experimentResources} panelName={randomExperimentTabName}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

})

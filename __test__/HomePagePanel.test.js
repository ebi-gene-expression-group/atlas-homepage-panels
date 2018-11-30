import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import HomePagePanel from '../src/HomePagePanel'
import PanelBar from '../src/PanelBar'
import PanelContent from '../src/PanelContent'

import { getRandomInt, speciesResources, experimentResources, host, SpeciesCardType, LatestExperimentCardType } from './TestUtils'

Enzyme.configure({ adapter: new Adapter() })

describe(`HomePagePanel`, () => {
  const props = {speciesResources, experimentResources, host, SpeciesCardType, LatestExperimentCardType}

  const randomSpeciesTabName = Object.keys(speciesResources)[getRandomInt(0, Object.keys(speciesResources).length)]
  const randomExperimentTabName = Object.keys(experimentResources)[getRandomInt(0, Object.keys(experimentResources).length)]
  
  test(`should have two panel boxes, one experiment container, one species container`, () => {
    const wrapper = shallow(<HomePagePanel {...props} />)
    expect(wrapper.find(PanelBar).length).toEqual(2)
    expect(wrapper.find(PanelContent).length).toEqual(2)
  })

  test(`renders different panel page after clicking each panel bar`, () => {
    const wrapper = shallow(<HomePagePanel {...props}/>)
    wrapper.find(PanelBar).at(0).simulate(`click`, { target: { id: randomSpeciesTabName }})
    wrapper.update()
    expect(wrapper.state().speciesTabName).toEqual(randomSpeciesTabName)

    wrapper.find(PanelBar).at(1).simulate(`click`, { target: { id: randomExperimentTabName }})
    wrapper.update()
    expect(wrapper.state().experimentTabName).toEqual(randomExperimentTabName)
  })

  test(`matches snapshot`, () => {
    const tree = renderer.create(<HomePagePanel {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

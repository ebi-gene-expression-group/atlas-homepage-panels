import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CardContainer from '../src/CardContainer'
import LatestExperimentCardContainer from '../src/LatestExperimentCardContainer'
import Card from '../src/Card'

Enzyme.configure({ adapter: new Adapter() })

describe(`CardContainer`, () => {
  const props = {  host: `link`, panelName: `panel`, CardType: ()=>`I am a card`}
  test(`uses a LatestExperimentCard for latest experiment entries`, () => {
     expect(shallow(<CardContainer {...props} panelName={`Latest experiments`}/>).find(LatestExperimentCardContainer).length).toEqual(1)
     expect(shallow(<CardContainer {...props} panelName={`Latest experiments`}/>).find(Card).length).toEqual(0)
     expect(shallow(<CardContainer {...props} panelName={`Latest experiments`}/>).find(props.CardType).length).toEqual(0)
  })

  test(`uses a static card for featured experiment`, () => {
     expect(shallow(<CardContainer {...props} panelName={`Featured`}/>).find(LatestExperimentCardContainer).length).toEqual(0)
     expect(shallow(<CardContainer {...props} panelName={`Featured`}/>).find(Card).length).toEqual(1)
     expect(shallow(<CardContainer {...props} panelName={`Featured`}/>).find(props.CardType).length).toEqual(0)
  })

  test(`uses a default/prop card for species experiment`, () => {
     expect(shallow(<CardContainer {...props} />).find(LatestExperimentCardContainer).length).toEqual(0)
     expect(shallow(<CardContainer {...props} />).find(Card).length).toEqual(0)
     expect(shallow(<CardContainer {...props} />).find(props.CardType).length).toEqual(1)
  })

  test(`matches snapshot`, () => {
    const tree = renderer.create(<CardContainer {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

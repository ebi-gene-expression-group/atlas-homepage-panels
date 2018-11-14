import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import HomePagePanel from '../src/HomePagePanel'
import PanelBar from '../src/PanelBar'
import CardContainer from '../src/CardContainer'
import {panelNameAList, panelNameBList, resource, host, CardType} from './TestUtils'

Enzyme.configure({ adapter: new Adapter() })

describe(`HomePagePanel`, () => {
  const props = {panelNameAList, panelNameBList, resource, host, CardType}
  test(`should have two panel boxes`, () => {
     const wrapper = shallow(<HomePagePanel {...props}/>)
     expect(wrapper.find(PanelBar).length).toEqual(2)
     expect(wrapper.find(CardContainer).length).toEqual(2)
  })

  test(`renders different panel page after clicking each panel bar`, () => {
    const wrapper = shallow(<HomePagePanel {...props}/>)
    wrapper.find(PanelBar).at(0).simulate(`click`, { target: { id: `foo1` } })
    wrapper.update()
    expect(wrapper.state().panelNameA).toEqual(`foo1`)

    wrapper.find(PanelBar).at(1).simulate(`click`, { target: { id: `test1` } })
    wrapper.update()
    expect(wrapper.state().panelNameB).toEqual(`test1`)
  })

  test(`matches snapshot`, () => {
    const tree = renderer.create(<HomePagePanel {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

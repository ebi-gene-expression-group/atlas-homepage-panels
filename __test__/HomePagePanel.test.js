import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import HomePagePanel from '../src/HomePagePanel'
import PanelBar from '../src/PanelBar'
import CardContainer from '../src/CardContainer'

Enzyme.configure({ adapter: new Adapter() })

describe(`HomePagePanel`, () => {
  const props = {panelNameAList:[`foo1`, `foo2`, `foo3`], panelNameBList: [`test1`, `test2`], host: `link` }
  test(`should have two panel boxes`, () => {
     expect(shallow(<HomePagePanel {...props}/>).find(PanelBar).length).toEqual(2)
     expect(shallow(<HomePagePanel {...props}/>).find(CardContainer).length).toEqual(2)
  })

  test(`renders different panel page after clicking each panel bar`, () => {
    const wrapper = shallow(<HomePagePanel {...props}/>)
    wrapper.find(PanelBar).at(0).simulate('click', { target: { id: 'UsernameA' } })
    wrapper.update()
    expect(wrapper.state().panelNameA).toEqual(`UsernameA`)

    wrapper.find(PanelBar).at(1).simulate('click', { target: { id: 'UsernameB' } })
    wrapper.update()
    expect(wrapper.state().panelNameB).toEqual(`UsernameB`)
  })

  test(`matches snapshot`, () => {
    const tree = renderer.create(<HomePagePanel {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

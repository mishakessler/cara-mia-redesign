import React from 'react'

import { Menu, Segment } from 'semantic-ui-react'

import Lunch from '../menu/Lunch';
import Dinner from '../menu/Dinner';
import PrivateParty from '../menu/PrivateParty';
import Catering from '../menu/Catering';

export default class MobileMenu extends React.Component {
  state = { activeItem: 'lunch' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  menuRender = (activeItem) => {
    switch (activeItem) {
      case 'dinner':
        return <Dinner />
      case 'catering':
        return <Catering />
      case 'private parties':
        return <PrivateParty />
      default:
        return <Lunch />
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <div id="mobile-menu" >
        <Menu attached='top' tabular>
          <Menu.Item
            name='lunch'
            active={activeItem === 'lunch'}
            onClick={this.handleItemClick} />
          <Menu.Item
            name='dinner'
            active={activeItem === 'dinner'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='catering'
            active={activeItem === 'catering'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='private parties'
            active={activeItem === 'private parties'}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Segment attached='bottom'>
          {this.menuRender(activeItem)}
        </Segment>
      </div>
    )
  }
}
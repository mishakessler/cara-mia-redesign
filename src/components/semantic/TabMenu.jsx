import React from 'react'
import '../css/menu.css'

import { Grid, Menu, Segment } from 'semantic-ui-react'

import Lunch from '../menu/Lunch';
import Dinner from '../menu/Dinner';
import PrivateParty from '../menu/PrivateParty';
import Catering from '../menu/Catering';

export default class TabMenu extends React.Component {
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
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='lunch'
              active={activeItem === 'lunch'}
              onClick={this.handleItemClick} />
            <Menu.Item
              name='dinner'
              active={activeItem === 'dinner'}
              onClick={this.handleItemClick} />
            <Menu.Item
              name='catering'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='private parties'
              active={activeItem === 'private parties'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            {this.menuRender(activeItem)}
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
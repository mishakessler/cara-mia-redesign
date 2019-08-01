import React from 'react'

import { Button, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

import Hero from '../Hero';
import MobileMenu from './MobileMenu'
import About from '../About';
import Map from '../Map';
import Gallery from '../Gallery';
import Footer from '../Footer';

export default class SidebarMenu extends React.Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            <Icon name='bars' />
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            <Icon name='angle double left' />
          </Button>
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <Hero />
              <MobileMenu />
              <About />
              <Gallery />
              <Map />
              <Footer />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}


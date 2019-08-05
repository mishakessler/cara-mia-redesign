import React from 'react'

import { Button, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
            <Icon inverted size='big' name='bars' />
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
              <AnchorLink href="#home">Home</AnchorLink>
            </Menu.Item>
            <Menu.Item as='a'>
              <AnchorLink href="#mobile-menu">Menu</AnchorLink>
            </Menu.Item>
            <Menu.Item as='a'>
              <AnchorLink href="#mobile-about">About</AnchorLink>
            </Menu.Item>
            <Menu.Item as='a'>
              <AnchorLink href="#mobile-gallery">Gallery</AnchorLink>
            </Menu.Item>
            <Menu.Item as='a'>
              <AnchorLink href="#mobile-map">Hours & Location</AnchorLink>
            </Menu.Item>
            <Menu.Item as='a'>
              <AnchorLink href="#mobile-footer">Reservations</AnchorLink>
            </Menu.Item>
            <Menu.Item as='a'>
              <AnchorLink href="#mobile-menu">Catering</AnchorLink>
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

// comment
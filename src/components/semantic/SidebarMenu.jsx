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
              <AnchorLink href="#menu">Menu</AnchorLink>
            </Menu.Item>
            <Menu.Item as='a'>
              <AnchorLink href="#about">About</AnchorLink>
            </Menu.Item>
            <Menu.Item as='a'>
              <AnchorLink href="#gallery">Gallery</AnchorLink>
            </Menu.Item>
            <Menu.Item as='a'>
              <AnchorLink inverted href="#footer">Reservations</AnchorLink>
            </Menu.Item>
            <Menu.Item as='a'>
              <AnchorLink inverted href="#menu">Catering</AnchorLink>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Button.Group>
              <Button disabled={visible} onClick={this.handleShowClick}>
                <Icon inverted size='big' name='bars' />
              </Button>
            </Button.Group>
            <Segment basic>
              <Hero id="hero" />
              <MobileMenu id="menu" />
              <About id="about" />
              <Gallery id="gallery" />
              <Map id="map" />
              <Footer id="footer" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

// comment
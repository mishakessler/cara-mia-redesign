# Cara Mia Redesign

A central repo for Yellow 5's SEI/UXDI Group Project.

# Table of Contents

- [Project Description](#project-description)
  - [Collaborators](#collaborators)
- [Design](#design)
  - [Hi-Fi Prototypes](#hi-fi-prototypes)
    - [Desktop](#desktop)
    - [Tablet](#tablet)
    - [Mobile](#mobile)
- [Development](#development)
  - [Functional Goals](#functional-goals)
    - [MVP](#mvp)
    - [Post-MVP](#post-mvp)
  - [Functional Heirarchy](#functional-heirarchy)
    - [Repo Structure](#repo-structure)
  - [Functional Components](#functional-components)
    - [Component Breakdown](#component-breakdown)
    - [Component Timeframes](#component-timeframes)
    - [Helper Functions](#helper-functions)
  - [Supporting Libraries](#supporting-libraries)
  - [Conventions](#conventions)
- [Project Review](#project-review)
  - [Code Showcase](#code-showcase)
  - [Bugs, Issues, and Resolutions](#issues-&-resolutions)
- [Project Followup](#project-followup)

# Project Overview

Cara Mia is a local restaurant in Queens Village which finds a loyal and friendly customer base among its homely, comforting Italian atmosphere and cuisine. Cara Mia's website, while containing unique touches that make it truly theirs, struggles to show the real personality of this staple neighborhood eatery.

In July of 2019, select students from General Assembly's User Experience Design Immersive and the Software Engineering Immersive (May '19 cohort) teamed up to revitalize [Cara Mia's original digital presence](http://queensvillage.caramiarestaurant.com/) and bring a much-needed fresh look to this reliable .

### Collaborators
* [Jasmine Carpentier]()
* [Sophia Furman](http://sophiafurman.com/)
* [Anum Hassan]()
* [Misha Kessler]()
* [Christopher Montalbo](https://github.com/Montyrivers)
* [Christine Wong]()
* [Helena Yau]()

## Group Resources

[Group Drive Folder](https://drive.google.com/drive/folders/1gayygj3YnICzn9SYZBJ7BG1EuYEcVscr)

[Trello Task Management Board](https://trello.com/invite/b/U6agF1Ji/fa54cb61249d72bafbc8191c94cf5f56/cara-mia-user-stories)


# Design 


## Hi-Fi Prototypes

#### Desktop
[Desktop Prototype](https://projects.invisionapp.com/share/35T4VR2TNSX)

#### Tablet
[Tablet Prototype](https://projects.invisionapp.com/share/DHT4VOL7UYQ)

#### Mobile
[Mobile Prototype](https://projects.invisionapp.com/share/7PT4T3FG3H9#/screens)


# Development

## Functional Goals

## Functional Heirarchy

## Functional Components

```

(MK)    |___ Header
(CM)    |___ Hero
(MK)    |___ Menu
(AH)         |___ Lunch 
(CM)         |___ Dinner
(JC)         |___ Private Party
(MK)         |___ Catering 
(AH)    |___ About 
(MK)    |___ Gallery
(JC)    |___ Map 
(MK)    |___ Footer 

```

### Supporting Libraries

* React
* Semantic UI React
* Semantic UI CSS

#### Semantic UI React 

Conditional Render Menu Component

```

import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
            <Menu.Item name='pics' active={activeItem === 'pics'} onClick={this.handleItemClick} />
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the tab height
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

```

Semantic UI Gallery Component 

```

import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleColumnCount = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={5}>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleColumnCount

```
 

## Conventions

### Git

#### Branching

Open terminal to your development branch; pull to ensure most recent merge.
> git pull origin development

Next, create your new branch from your updated development branch:
> git checkout -b {initials}-{branch type}-{component} development
> git push --set-upstream origin {initials}-{branch type}-{component}

Now, proceed to work on your component; add/commit as necessary:
> git add .
> git commit -m "{Message}"

#### Merging

Once you're ready to merge, confirm again that you have the most recent development branch updates:
> git pull origin development

Then proceed to GitHub, submit a new Pull Request. Confirm comparison is:
> from Development to {Your Branch}

### React

#### Component Structuring & Naming

```
<div className="header">
  <div className="secondary-nav">

  </div>
  <div className="primary-nav">

  </div>
</div>
```

```
<h2>Menu</h2>
  <div className="submenu">
    <h3>Lunch</h3>
      <h4>Salad<h4>
        <h5>Foodname</h5>
          <p>Food descriptions</p>
          <h6>Price</h6>
```
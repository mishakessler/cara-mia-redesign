# Cara Mia Redesign

A central repo for Yellow 5's SEI/UXDI Group Project.

## Table of Contents

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

## Project Overview

### Restaurant
* [Cara Mia Website](http://queensvillage.caramiarestaurant.com/)

### Collaborators
* [Jasmine Carpentier]()
* [Sophia Furman]()
* [Anum Hassan]()
* [Misha Kessler]()
* [Christopher Montalbo](https://github.com/Montyrivers)
* [Christine Wong]()
* [Helena Yau]()

## Group Resources

[Group Drive Folder](https://drive.google.com/drive/folders/1gayygj3YnICzn9SYZBJ7BG1EuYEcVscr)

[Trello Task Management Board](https://trello.com/invite/b/U6agF1Ji/fa54cb61249d72bafbc8191c94cf5f56/cara-mia-user-stories)


## Design 


### Hi-Fi Prototypes

#### Desktop
[Desktop Prototype](https://projects.invisionapp.com/share/35T4VR2TNSX)

#### Tablet
[Tablet Prototype](https://projects.invisionapp.com/share/DHT4VOL7UYQ)

#### Mobile
[Mobile Prototype](https://projects.invisionapp.com/share/7PT4T3FG3H9#/screens)


## Development

### Functional Goals

### Functional Heirarchy

### Functional Components

```
|___ Header (MK)
|___ Hero (CM)
|___ Menu
      |___ Lunch (AH)
      |___ Dinner (CM)
      |___ Private Party (JC)
      |___ Catering (MK)
|___ About (AH)
|___ Gallery (MK)
|___ Map (JC)
|___ Footer (MK)
```

### Supporting Libraries

* React
* Semantic UI React
* Semantic UI CSS 
 

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

#### Component Structuring

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
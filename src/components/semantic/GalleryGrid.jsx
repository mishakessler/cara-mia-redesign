import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Gallery1 from '../../assets/Gallery1.png'
import Gallery2 from '../../assets/Gallery2.png'
import Gallery3 from '../../assets/Gallery3.png'
import Gallery4 from '../../assets/Gallery4.png'
import Gallery5 from '../../assets/Gallery5.png'
import Gallery6 from '../../assets/Gallery6.png'


const GalleryGrid = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src={Gallery1} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Gallery2} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Gallery3} />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src={Gallery4} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Gallery5} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Gallery6} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GalleryGrid
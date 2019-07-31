import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import about1 from '../../assets/about1.png'

const GalleryGrid = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src={about1} />
      </Grid.Column>
      <Grid.Column>
        <Image src={about1} />
      </Grid.Column>
      <Grid.Column>
        <Image src={about1} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GalleryGrid
import React from 'react'

import Lunch from './menu/Lunch';
import Dinner from './menu/Dinner';
import PrivateParty from './menu/PrivateParty';
import Catering from './menu/Catering';

export default function Menu() {
  return (
    <div>
      <Lunch />
      <Dinner />
      <PrivateParty />
      <Catering />
    </div>
  )
}


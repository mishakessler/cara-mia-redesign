import React from 'react'

import Lunch from './components/menu/Lunch';
import Dinner from './components/menu/Dinner';
import PrivateParty from './components/menu/PrivateParty';
import Catering from './components/menu/Catering';

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


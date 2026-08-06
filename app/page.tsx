import React from 'react'
import Hero from './Hero';
import ForYou from './ForYou';
import TradingGroup from './TradingGroup';
import FreeButPrecious from './FreeButPrecious';
import PeaceOfMind from './PeaceOfMind';
import CtaBanner from './CtaBanner';
import Faq from './Faq';
import Rewards from './Rewards';
import Simulator from './Simulator';

const page = () => {
  return (
    <div>
      <Hero/>
      <ForYou/>
      <TradingGroup/>
      <Simulator/>
      <FreeButPrecious/>
      <PeaceOfMind/>
      <Rewards/>
      <CtaBanner/>
      <Faq/>
    </div>
  )
}

export default page
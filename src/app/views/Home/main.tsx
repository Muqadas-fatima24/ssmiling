import React from 'react'
import Banner from './banner'
import { HOME_BANNER , AWARD_SECTION, TREATMENTS_DATA  } from '@/app/layout/constants'
import Award from './award'
import Treatments from './treatments'

export default function Main() {
  return (
  <>
  
<Banner data={HOME_BANNER}/>
<Award data={AWARD_SECTION} />
<Treatments />

  </>
  )
}

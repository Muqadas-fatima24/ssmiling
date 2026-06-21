import React from 'react'
import Banner from './banner'
import { HOME_BANNER , AWARD_SECTION, TEAM_DATA  } from '@/app/layout/constants'
import Award from './award'
import Treatments from './treatments'
import { testimonialData} from "@/app/layout/constants";
import SwiperSection from './swipersection'
import Meet from './meet'
import Wonder from './wonder'

export default function Main() {
  return (
  <>
<Banner data={HOME_BANNER}/>
<Award data={AWARD_SECTION} />
<Treatments />
<SwiperSection data={testimonialData}/>
<Meet data={TEAM_DATA}/>
<Wonder heading={"Wondering How We Can Help Improve Your Smile?"} />
  </>
  )
}

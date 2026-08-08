import MainHero from '@/components/sections/MainHero'
import Discover from '@/components/sections/Discover'
import Stepper from '@/components/sections/Stepper'
import LargeTitle from '@/components/sections/LargeTitle'
import BulletPoints from '@/components/sections/BulletPoints'
import SecondaryHero from '@/components/sections/SecondaryHero'
import {
  DiptychSticky,
  DiptychDoubleMask,
  DiptychEdito,
  DiptychSingleMask,
} from '@/components/sections/Diptychs'
import Disciplines from '@/components/sections/Disciplines'
import Timetable from '@/components/sections/Timetable'
import Memberships from '@/components/sections/Memberships'
import Gallery from '@/components/sections/Gallery'
import Quote from '@/components/sections/Quote'
import Reassurance from '@/components/sections/Reassurance'
import FinalCta from '@/components/sections/FinalCta'

/**
 * The page is only an assembly order.
 *
 * Every section reads its own copy from content/site.ts, so re-ordering,
 * removing or duplicating a section is a one-line change here and nothing
 * else in the codebase has to know.
 */
export default function HomePage() {
  return (
    <>
      <MainHero />
      <Discover />
      <Stepper />
      <LargeTitle />
      <BulletPoints />
      <SecondaryHero />
      <DiptychSticky />
      <DiptychDoubleMask />
      <DiptychEdito />
      <Disciplines />
      <Timetable />
      <Memberships />
      <DiptychSingleMask />
      <Gallery />
      <Quote />
      <Reassurance />
      <FinalCta />
    </>
  )
}

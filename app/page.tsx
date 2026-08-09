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
import Gallery from '@/components/sections/Gallery'
import Quote from '@/components/sections/Quote'
import Reassurance from '@/components/sections/Reassurance'
import FinalCta from '@/components/sections/FinalCta'

/**
 * The page is only an assembly order.
 *
 * Each section reads its copy from content/home.ts, so re-ordering,
 * removing or duplicating one is a single-line change here.
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
      <DiptychSingleMask />
      <Gallery />
      <Quote />
      <Reassurance />
      <FinalCta />
    </>
  )
}

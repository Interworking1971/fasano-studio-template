import type { Metadata } from 'next'
import { about } from '@/content/pages'
import PageHeader from '@/components/sections/PageHeader'
import AboutBody from '@/components/sections/AboutBody'
import Quote from '@/components/sections/Quote'
import Reassurance from '@/components/sections/Reassurance'
import FinalCta from '@/components/sections/FinalCta'

export const metadata: Metadata = {
  title: 'About',
  description: about.lede,
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={about.eyebrow}
        title={about.title}
        titleEm={about.titleEm}
        lede={about.lede}
        media={about.hero}
      />
      <AboutBody body={about.body} stats={about.stats} gallery={about.gallery} />
      <Quote />
      <Reassurance />
      <FinalCta />
    </>
  )
}
